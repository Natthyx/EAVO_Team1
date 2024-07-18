import fs from 'fs';
import { User } from "../models/user";
import PwdUtil from "../utils/pwdUtils.js";
import JwtManager from "./validations/jwt_auth.js";
import TokenUtil from "../utils/tokenUtils.js";
import MailClient from "../utils/mailer.js";


export default class UserController {
    /**
     * `signUp` handles user registration by checking for required fields, verifying
     * uniqueness of username and email, hashing the password, and saving the user to the database.
     */
    static async signUp(req, res) {
        let { username, email, password } = req.body;
        if (!username) {
            return res.status(400).json({message: "username required"});
        }

        if (!email) {
            return res.status(400).json({message: "email required"});
        }

        if (!password){
            return res.status(400).json({message: "password required"});
        }

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

            password = PwdUtil.PwdHasher(password);
            user = new User({
                username,
                email,
                password
            });
            await user.save()
            console.log(`user created with username ${user.username}`);

            const subject = "Email Verfication";
            const randomString = TokenUtil.CreateToken(user.username, "EV");
            let verifyLink = `${process.env.EMAIL_VERIFY_LINK}${randomString}`
            let html = fs.readFileSync(process.env.VERIFY_HTML_PATH, "utf8");
            html.replace("User", user.username);
            html.replace("Your Verification", verifyLink);
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
            const username = TokenUtil.VerifyToken(lastUri, "EV");
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
        if (!email) {
            return res.status(400).json({message: "email required"});
        }

        if (!password){
            return res.status(400).json({message: "password required"});
        }
        const user = await User.findOne({ email })
        if(!user || !user.verified){
            return res.status(400).json({status:false, message: "User not found or not verified"})
        }
        const validation = PwdUtil.Compare(password, user.password);
        if (!validation) {
            return res.status(401).json({status: false, message: "Unauthorized"});
        }
        const token = JwtManager.sign(user.username, '1d')
        res.cookie('access_token', token, {httpOnly: true, expiresIn: '1d'});
        return res.status(200).json({status: true, token});
    }

    /**
     * `forgotPassword` handles the process of sending an email with
     * instructions to reset a user's password.
     */
    static async forgotPassword(req, res) {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({message: "email required"});
        }
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const randomString = TokenUtil.CreateToken(user.username, "FP");
            const subject = 'Instructions to Reset Your Password';
            const resetLink = `${process.env.PASSWORD_RESET_LINK}${randomString}`
            let html = fs.readFileSync(process.env.RESET_HTML_PATH, "utf8");
            html.replace("User", user.username);
            html.replace("Reset Link", resetLink);
            await MailClient.composeEmailMessage(user.email, subject, html);
            return res.status(200).json({status: true, message: "email sent to reset password"});
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
        if (!password){
            return res.status(400).json({message: "password required"});
        }

        try {
            const url = req.originalUrl.split("/");
            const lastUri = url[url.length - 1];
            const username = TokenUtil.VerifyToken(lastUri, "FP");
            if (!username) {
                return res.status(404).json({status: false, message: `user not found with username ${username}`});
            }

            const user = await User.findOne({ username });
            if (!user) {
                return res.status(404).json({status: false, message: `user not found`});
            }

            password = PwdUtil.PwdHasher(password);
            user.password = password;
            await user.save();
            const subject = "Password saved";
            let html = fs.readFileSync(process.env.RESET_CONFIRM_HTML_PATH, "utf8");
            await MailClient.composeEmailMessage(user.email, subject, html);
            return res.status(200).json({status: true, message: "password saved"});
        } catch (err) {
            return res.status(500).json({status:false, message: err.toString()});
        }
    }
}