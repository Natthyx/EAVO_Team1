/*eslint-disable */
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();


const header = {
    headers: {
        Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`
    },
};

export default class Processor {
    static async PaymentiInitiator (data) {
        return new Promise(async (resolve, reject) => {
            await axios
            .post(process.env.CHAPA_INITIATE_URL, data, header)
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            })
        });
    }

    static async Paymentverifier (data) {
        return new Promise(async (resolve, reject) => {
            await axios
            .get(`${process.env.CHAPA_VERIFY_URL}/${data.tx_ref}`, header)
            .then(async (response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);  
            })
        })
    }
}