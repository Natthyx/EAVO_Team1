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
}