/*eslint-disable */
import axios from "axios";
import dotenv from "dotenv";
import MailClient from "./mailer.js";

dotenv.config();


const header = {
    headers: {
        Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`
    },
};

export default class Processor {
    static async PaymentInitiator (data) {
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

    static async MailSender(data) {
        await MailClient.SendMail(data.to, data.subject, data.html);
    }
}