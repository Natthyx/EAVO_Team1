import crypto from 'crypto';
import redisClient from "../utils/redisConnection.js"



export default class TokenUtil {

    static async CreateRandomString(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        const randomArray = new Uint8Array(length);
        crypto.getRandomValues(randomArray);
        randomArray.forEach((number) => {
          result += chars[number % chars.length];
        });
        return result;
      }
      
    static async CreateToken(username, typePhrase) {
        if (!username) {
            return new Error("username required")
        }
        const randomString = TokenUtil.CreateRandomString(52);
        const key = `${typePhrase}_${randomString}`
        await redisClient.set(key, username, 86400);
        return randomString;
    }

    static async VerifyToken(token, typePhrase) {
        if (!token) {
          return new Error("token must be string")
        }
        const key = `${typePhrase}_${token}`;
        const username = await redisClient.get(key);
        if (username)
          await redisClient.del(key);
        return username;
    }
}