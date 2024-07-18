import nodemailer from 'nodemailer';
import dotenv from "dotenv";
import Bull from 'bull';


dotenv.config()
const redis_url = process.env.REDIS_URL;
const MailerQueue = new Bull("mailerqueue", redis_url);


class Mailer {
    constructor () {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EAVO_EMAIL, 
              pass: process.env.EAVO_EMAIL_PASS,
            },
          
          });
    }

    async composeEmailMessage(to, subject, html) {
        if (!to || typeof to != 'string') {
            return new Error("email must be a string")
        }

        if (!subject || typeof subject != 'string') {
            return new Error("subject must be a string")
        }

        const htmlPattern = /<([a-z][\s\S]*?)>/i;
        if(!html || !htmlPattern.test(html)) {
            return new Error("html must resumble html pattern")
        }
        const data = {
            to,
            subject,
            html
        }
        await MailerQueue.add(data);
    }

    async composeEmailMessages(to, subject, html) {
        if (!to || !Array.isArray(to)) {
            return new Error("email must be a Array")
        }

        if (!subject || typeof subject != 'string') {
            return new Error("subject must be a string")
        }

        const htmlPattern = /<([a-z][\s\S]*?)>/i;
        if(!html || !htmlPattern.test(html)) {
            return new Error("html must resumble html pattern")
        }
        to.forEach(async (elem) => {
            const data = {
                to: elem,
                subject,
                html,
            };
            await MailerQueue.add(data);
        })

    }

    async SendMail(to, subject, html) {
        const info = await this.transporter.sendMail({
            from: '"EAVO Support" <support@eavo.com>',
            to,
            subject,
            html
        });
        return info
    }
}

const MailClient = new Mailer();
export default MailClient;
