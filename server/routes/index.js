/*eslint-disable */
import PaymentGateway from "../controllers/paymentGateway.js";
import UserController from "../controllers/userController.js";


export default function injectRoutes(app) {
    // payment gateways
    app.post('/eavo/donation/pay', PaymentGateway.initiatePayment);
    app.get('/eavo/donation/verify/:tx_ref', PaymentGateway.verifyPayment);

    // user related endpoints
    app.post('/eavo/user/sign-up', UserController.signUp);
    app.get('/eavo/user/email-verify/:token', UserController.EmailVerify);
    app.post('/eavo/user/login', UserController.login);
    app.post('/eavo/user/forgot-password', UserController.forgotPassword);
    app.post('/eavo/user/reset-password/:token', UserController.resetPassword);
}