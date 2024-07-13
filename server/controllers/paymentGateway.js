/*eslint-disable */
import Bull from "bull";
import dotenv from "dotenv";
import { Donation } from "../models/donation";

dotenv.config();
const redis_url = REDIS_URL;
const PaymentInitiatorQueue = new Bull("paymentinitiator", redis_url);
const PaymentVerifierQueue = new Bull("paymentverfier", redis_url);


export default class PaymentGateway {

    /**
     * `initiatePayment` initiates a payment transaction using data from the request query
     * and returns a checkout URL in the response.
     */
    static async initiatePayment(req, res) {
        const { amount, email, first_name, last_name, currency} = req.query.query
        const tx_ref = "tx-eavo-donation-" + Date.now();
        const callback_url = CALLBACK_URL;
        const return_url = RETURN_URL;
        const customization = {
            title: "Empowering African Voices",
            description: "Support our mission to amplify the voices of African communities."
        }
        const data = { 
            amount,
            email,
            first_name,
            last_name,
            currency,
            tx_ref,
            callback_url,
            return_url,
            customization
        };
        const queueObj = await PaymentInitiatorQueue.add(data);
        PaymentInitiatorQueue.on('completed', (job) => {
            if (job.id === queueObj.id) {
                return res.status(200).json(
                    {
                        checkout_url: job.returnvalue.data.data.checkout_url
                    });
            }
        })
        PaymentInitiatorQueue.on('failed', (job) => {
            if (job.id === queueObj.id) {
                return res.status(400);
            }
        })
    }

    /**
     *  `verifyPayment` asynchronously verifies a payment transaction using an external API
     * and saves the transaction details to a database.
     */
    static async verifyPayment(req, res) {
        const tx_ref = req.params.tx_ref;
        const data = {tx_ref}
        const queueObj = await PaymentVerifierQueue.add(data);
        PaymentVerifierQueue.on("completed",  async (job) => {
            if (job.id === queueObj.id) {
                if (job.returnvalue.data.data.status == "success") {
                    const {email, amount, currency, tx_ref} = response.data.data;
                    const newDonation = new Donation({
                        email,
                        amount,
                        currency,
                        tx_ref
                    })
                    await newDonation.save()
                    return res.status(200).json({status: "success"});
                } else if (job.returnvalue.data.data.status == "pending") {
                    return res.status(200).json({status: "pending"});
                }
                return res.status(200).json({status: "failed"});
            }
        })
        PaymentVerifierQueue.on("failed", (job) => {
            if (job.id === queueObj.id) {
                return res.status(400);
            }
        })
    }

}