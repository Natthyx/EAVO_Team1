import jwt from 'jsonwebtoken';
import uuid4 from 'uuid';
import dotenv from 'dotenv';

dotenv.config();

export default class JwtManager {
    static async sign(data, expiresIn='1d') {
        if (!data) {
            return new Error("data must not be empty")
        }
        if (typeof data !== 'object') {
            return new Error("data type must be object")
        }
        const csrf = uuid4()
        data.csrf = csrf
        const token = jwt.sign(data, process.env.JWT_SECRET_KEY, {expiresIn});
        return token;
    }
}