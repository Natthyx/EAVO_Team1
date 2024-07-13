import Bull from 'bull';
import Processor from './utils/processor.js';

import dotenv from "dotenv";

dotenv.config();
const redis_url = process.env.REDIS_URL;
const PaymentInitiatorQueue = new Bull("paymentinitiator", redis_url);
const PaymentVerifierQueue = new Bull("paymentverfier", redis_url);

console.log(`Worker is Listening for jobs`);

PaymentInitiatorQueue.process(async (job) => {
    console.log(`Worker processing payment job ${job.id}`);
    if (!job.data.email) {
        return new Error('email missing');
    }
    if (!job.data.amount) {
        return new Error('amount missing');
    }
    if (!job.data.first_name) {
        return new Error('first_name missing');
    }
    if (!job.data.last_name) {
        return new Error('last_name missing');
    }
    if (!job.data.currency) {
        return new Error('currency missing');
    }
    if (!job.data.tx_ref) {
        return new Error('reference missing');
    }
    if (!job.data.callback_url) {
        return new Error('callback_url missing');
    }
    if (!job.data.return_url) {
        return new Error('return_url missing');
    }
    await Processor.PaymentiInitiator(job.data);
    console.log(`Payment Job ${job.id} processed`);
});

PaymentVerifierQueue.process(async (job) => {
    console.log(`Worker processing payment verification job ${job.id}`);
    if (!job.data.tx_ref) {
        return new Error('reference missing');
    }
    await Processor.Paymentverifier(job.data);
    console.log(`Verification Job ${job.id} processed`);
})
