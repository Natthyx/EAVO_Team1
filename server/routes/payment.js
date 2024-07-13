/*eslint-disable */
import PaymentGateway from "../controllers/paymentGateway";


export default function injectRoutes(app) {
    app.post('/eavo/donation/pay', PaymentGateway.initiatePayment);
    app.get('/eavo/donation/verify', PaymentGateway.verifyPayment);
}