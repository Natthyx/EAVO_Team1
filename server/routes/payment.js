/*eslint-disable */
import PaymentGateway from "../controllers/paymentGateway.js";


export default function injectRoutes(app) {
    app.post('/eavo/donation/pay', PaymentGateway.initiatePayment);
    app.get('/eavo/donation/verify/:tx_ref', PaymentGateway.verifyPayment);
}