import { User } from "../models/user";
import PwdUtil from "../utils/pwdUtils.js";
import JwtManager from "./validations/jwt_auth.js";
import TokenUtil from "../utils/tokenUtils.js";



export default class UserController {
    static async signUp(req, res) {
        const { username, email, password } = req.body;
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
            console.log(`user created with username ${user.username}`)
            return res.status(200).json({status: true, 
                message: `user created with username ${user.username}`});
        } catch (err) {
            console.log(err.toString())
            return res.status(500).json({status: false, message: err.toString()})
        }
    }

    static async login(req, res) {
        const {email, password} = req.body;
        if (!email) {
            return res.status(400).json({message: "email required"});
        }

        if (!password){
            return res.status(400).json({message: "password required"});
        }
        const user = await User.findOne({ email })
        if(!user){
            return res.json({status:false, message: "User not found"})
        }
        const validation = PwdUtil.Compare(password, user.password);
        if (!validation) {
            return res.status(401).json({status: false, message: "Unauthorized"});
        }
        const token = JwtManager.sign(user.username, '1d')
        res.cookie('access_token', token, {httpOnly: true, expiresIn: '1d'});
        return res.status(200).json({status: true, token});
    }

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

            const randomString = TokenUtil.CreateToken(user.username);
            // mailing the string needed

        } catch(err) {}
        
    }
}