import Bull from 'bull';
import Processor from './utils/processor.js';

import dotenv from "dotenv";
import MailClient from './utils/mailer.js';

dotenv.config();
const redis_url = process.env.REDIS_URL;
const PaymentInitiatorQueue = new Bull("paymentinitiator", redis_url);
const PaymentVerifierQueue = new Bull("paymentverfier", redis_url);
const MailerQueue = new Bull("mailerqueue", redis_url);

console.log(`Worker is Listening for jobs`);

PaymentInitiatorQueue.process(async (job) => {
    console.log(`Worker processing payment job ${job.id}`);

    const result = await Processor.PaymentInitiator(job.data);
    console.log(`Payment Job ${job.id} processed`);
    return result;
});

PaymentVerifierQueue.process(async (job) => {
    console.log(`Worker processing payment verification job ${job.id}`);
    const result = await Processor.Paymentverifier(job.data);
    console.log(`Verification Job ${job.id} processed`);
    return result;
})

MailerQueue.process(async (job) => {
    console.log(`Worker processing job ${job.id} to send Email`);
    const info = await MailClient.SendMail(job.data);
    console.log(`Job process finished email sent with an id ${info.messageId}`);
})
