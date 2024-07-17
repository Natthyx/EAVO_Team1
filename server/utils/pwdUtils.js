import bcryt from "bcrypt";



export default class PwdUtil {
    static async PwdHasher(password) {
        if (!password) {
            return new Error("Password must not be empty")
        }
        const hashedPwd = await bcryt.hash(password, 10);
        return hashedPwd;
    }

    static async Compare(password, hashedPwd) {
        if (!password || !hashedPwd) {
            return new Error("password or hashPwd are null")
        }
        const validation = await bcryt.compare(password, hashedPwd);
        return validation;
    }
}