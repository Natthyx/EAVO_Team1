import fs from 'fs';
import { User } from "../models/user.js";
import PwdUtil from "../utils/pwdUtils.js";
import JwtManager from "./validations/jwtAuth.js";
import TokenUtil from "../utils/tokenUtils.js";
import MailClient from "../utils/mailer.js";
import { Donation } from '../models/donation.js';
import CurrencyExchanger from '../utils/currencyExchanger.js';
import { NewsLetter } from '../models/newsletter.js';
import { Contact } from '../models/contactForm.js';


export default class UserController {
    /**
     * `signUp` handles user registration by checking for required fields, verifying
     * uniqueness of username and email, hashing the password, and saving the user to the database.
     */
    static async signUp(req, res) {
        let { username, email, password } = req.body;
        try {
            let user;

            user = await User.findOne({ username });
            if (user) {
                return res.status(400).json({status: false, message: `user with the username ${username} exists`})
            }

            user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({status: false, message: `user with the email ${email} exists`})
            }

            password = await PwdUtil.PwdHasher(password);
            user = new User({
                username,
                email,
                password
            });
            await user.save()

            const subject = "Email Verfication";
            const randomString = await TokenUtil.CreateToken(user.username, "EV");
            let verifyLink = `${process.env.EMAIL_VERIFY_LINK}${randomString}`
            let html = fs.readFileSync(process.env.VERIFY_HTML_PATH, "utf8");
            html = html.replace("[User]", user.username);
            html = html.replace("[Your Verification]", verifyLink);
            await MailClient.composeEmailMessage(user.email, subject, html)

            return res.status(200).json({status: true, 
                message: `user created with username ${user.username}`});
        } catch (err) {
            console.log(err.toString())
            return res.status(500).json({status: false, message: err.toString()})
        }
    }

    /**
     * EmailVerify verifies a user's email based on a token extracted from the request URL
     * and updates the user's verification status in the database.
     */
    static async EmailVerify(req, res) {
        try{
            const url = req.originalUrl.split("/");
            const lastUri = url[url.length - 1];
            const username = await TokenUtil.VerifyToken(lastUri, "EV");
            console.log(username);
            if (!username) {
                return res.status(404).json({status: false, message: `user not found with username ${username}`});
            }

            const user = await User.findOne({ username });
            if (!user) {
                return res.status(404).json({status: false, message: `user not found`});
            }
            user.verified = true;
            await user.save();
            return res.status(200).json({status: true, message: "email verified successfully"})
        } catch(err) {
            return res.status(500).json({status: false, message: err.toString()});
        }
    }

    /**
     * function handles user login by validating email and password, checking user existence,
     * comparing passwords, generating a JWT token, setting a cookie, and returning a response with the
     * token.
     */
    static async login(req, res) {
        const {email, password} = req.body;

        const user = await User.findOne({ email })
        if(!user || !user.verified){
            return res.status(400).json({status:false, message: "User not found or not verified"})
        }
        const validation = await PwdUtil.Compare(password, user.password);
        if (!validation) {
            return res.status(401).json({status: false, message: "Unauthorized"});
        }
        const token = await JwtManager.sign({username: user.username}, '1d')
        res.cookie('access_token', token, {httpOnly: true, expiresIn: '1d'});
        return res.status(200).json({status: true, token});
    }

    /**
     * `forgotPassword` handles the process of sending an email with
     * instructions to reset a user's password.
     */
    static async forgotPassword(req, res) {
        const { email } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({status: false, message: 'User not found' });
            }

            const randomString = await TokenUtil.CreateToken(user.username, "FP");
            const subject = 'Instructions to Reset Your Password';
            const resetLink = `${process.env.PASSWORD_RESET_LINK}${randomString}`
            let html = fs.readFileSync(process.env.RESET_HTML_PATH, "utf8");
            html = html.replace("User", user.username);
            html = html.replace("Reset Link", resetLink);
            await MailClient.composeEmailMessage(user.email, subject, html);
            return res.status(200).json({status: true, message: "Instruction sent to email please check your email"});
        } catch(err) {
            return res.status(500).json({status: false, message: err.toString()});
        }
        
    }

    /**
     * `resetPassword` resets a user's password by hashing the new password
     * and updating it in the database.
     */
    static async resetPassword(req, res) {
        let { password } = req.body

        try {
            const url = req.originalUrl.split("/");
            const lastUri = url[url.length - 1];
            const username = await TokenUtil.VerifyToken(lastUri, "FP");
            if (!username) {
                return res.status(404).json({status: false, message: `user not found with username ${username}`});
            }

            const user = await User.findOne({ username });
            if (!user) {
                return res.status(404).json({status: false, message: `user not found`});
            }

            password = await PwdUtil.PwdHasher(password);
            user.password = password;
            await user.save();
            const subject = "Password saved";
            let html = fs.readFileSync(process.env.RESET_CONFIRM_HTML_PATH, "utf8");
            html = html.replace("User", user.username);
            html = html.replace("Your Link", `${process.env.FRONT_HOME}login`);
            await MailClient.composeEmailMessage(user.email, subject, html);
            return res.status(200).json({status: true, message: "password saved"});
        } catch (err) {
            return res.status(500).json({status:false, message: err.toString()});
        }
    }

    /**
     * calculates the total amount donated by a user in USD, considering different
     * currencies by converting them using a CurrencyExchanger.
     */
    static async totalDonated(req, res) {
        const { email } = req.body

        const user = await Donation.findOne({ email });
        if (!user) {
            return res.status(404).json({status: false, message: "no user with donation found"});
        }
        const allDonation = await Donation.find({ email: user.email });
        // console.log(allDonation)
        let totalDonated = 0;
        for (const donation of allDonation) {
            if (donation.currency != "USD") {
                totalDonated += await CurrencyExchanger.changeCurrency(donation.amount, donation.createdAt);
            } else {
                totalDonated += donation.amount;
            }
        }
        return res.status(200).json({status: true, totalAmount: totalDonated, currency: "USD"});
    }

    /**
     * `SubscribeNewsletter` checks if a user is already subscribed to a newsletter, and
     * either unsubscribes them or subscribes them accordingly.
     */
    static async SubscribeNewsletter(req, res) {
        const  { email } = req.body
        let newsletter = await NewsLetter.findOne({ email });
        if (newsletter && newsletter.subscribed) {
            newsletter.subscribed = false;
            await newsletter.save()
            return res.status(200).json({status: !newsletter.subscribed, message: "Sucessfully Unsubscribed"});
        }

        if (newsletter && !newsletter.subscribed) {
            newsletter.subscribed = true;
            await newsletter.save()
            return res.status(200).json({status: newsletter.subscribed, message: "Sucessfully Subscribed"});
        }
        newsletter = new NewsLetter({ email });
        await newsletter.save()
        return res.status(200).json({status: newsletter.subscribed, message: "Successfully Subscribed"});
    }

    /**
     * `SendNews` sends a newsletter email to all subscribed users with the provided
     * title, message, and read more link.
     */
    static async SendNews(req, res) {
        const { title, message, readMore } = req.body
        let allEmails = await NewsLetter.find({ subscribed: true });
        const subject = title;
        let emailData = {}
        let html = fs.readFileSync(process.env.NEWSLETTER_HTML_PATH, "utf8");
        const orginalHtml = html;
        for (const email of allEmails) {
            html = html.replace("Newsletter Title", title);
            html = html.replace("message here", message);
            html = html.replace("Read Link", readMore);
            emailData[email.email] = html;
            html = orginalHtml;
        }

        MailClient.composeEmailMessages(emailData, subject);
        const subscriberEmails = allEmails.map((newsObj) => newsObj.email);
        return res.status(200).json({status: true,
            message: `email is being sent to the following emails`,
            emails: subscriberEmails});
    }

    static async contactList(req, res) {
        const { fullName, email, phoneNumber, postalCode } = req.body
        let contactPerson = await Contact.findOne({ email });
        if (contactPerson) {
            return res.status(200).json({status: false, message: "email already added"});
        }

        contactPerson = await Contact.findOne({ phoneNumber });
        if (contactPerson) {
            return res.status(200).json({status: false, message: "phone already added"});
        }

        contactPerson = Contact({
            fullName,
            email,
            phoneNumber,
            postalCode
        })
        await contactPerson.save()
        return res.status(200).json({status: true, message: "contact personnal created"})
    }

}