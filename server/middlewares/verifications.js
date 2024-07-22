import JwtManager from "../controllers/validations/jwtAuth.js";


export default class Verification {
    static async VerifyLogin(req, res, next) {
        try{
            if (!req.headers['authorization']) {
                return res.status(401).json({'error': 'Unauthorized'});
            }
            let token = req.headers['authorization'].split(' ')[1];
            const valid = await JwtManager.verify(token);
            if (!valid)
                return res.status(401).json({status: false, message: "token validation error"});
            req.body = valid;
            next()
        } catch (err) {
            return res.status(401).json({status: false, message: err.toString()});
        }
    }

    static async ValidateEmail(req, res, next) {
        const  { email } = req.body
        if (!email) {
            return res.status(400).json({message: "email required"});
        }
        next()
    }

    static async ValidateUsername(req, res, next) {
        const { username } = req.body
        if (!username) {
            return res.status(400).json({status: false, message: "username required"})
        }
        next()
    }

    static async ValidatePassword(req, res, next) {
        const { password } = req.body
        if (!password){
            return res.status(400).json({message: "password required"});
        }
        next()
    }

    static async ValidateNews(req, res, next) {
        const { title, message, readMore } = req.body
        if(!title) {
            return res.status(400).json({message: "title required"});
        }

        if(!message) {
            return res.status(400).json({message: "message required"});
        }

        if(!readMore) {
            return res.status(400).json({message: "link required"});
        }
        next()
    }

    static async ValidateFullname(req, res, next) {
        const { fullName } = req.body
        if (!fullName) {
            return res.status(400).json({status: false, message: "fullName required"})
        }
        next()
    }

    static async ValidatePhoneNo(req, res, next) {
        const { phoneNumber } = req.body
        if (!phoneNumber) {
            return res.status(400).json({status: false, message: "phoneNumber required"})
        }
        next()
    }

    static async ValidatePost(req, res, next) {
        const { postalCode } = req.body
        if (!postalCode) {
            return res.status(400).json({status: false, message: "postalCode required"})
        }
        next()
    }
}