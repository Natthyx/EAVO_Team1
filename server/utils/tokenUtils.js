import crypto from 'crypto';
import redisClient from "../utils/redisConnection.js"



export default class TokenUtil {

    static async createRandomString(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        const randomArray = new Uint8Array(length);
        crypto.getRandomValues(randomArray);
        randomArray.forEach((number) => {
          result += chars[number % chars.length];
        });
        return result;
      }
      
    static async CreateToken(username) {
        if (!username) {
            return new Error("username required")
        }
        const randomString = TokenUtil.createRandomString(52);
        const key = `FP_${randomString}`
        await redisClient.set(key, username, 86400);
        return randomString;
    }
}