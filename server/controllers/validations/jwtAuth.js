import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { promisify } from "util";
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
        const csrf = uuidv4()
        data.csrf = csrf
        const token = await jwt.sign(data, process.env.JWT_SECRET_KEY, {expiresIn});
        return token;
    }

    static async verify(token) {
        const verify = promisify(jwt.verify);
        const result = await verify(token, process.env.JWT_SECRET_KEY);
        return result;
    }
}