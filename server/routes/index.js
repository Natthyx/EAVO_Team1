/*eslint-disable */
import PaymentGateway from "../controllers/paymentGateway.js";
import UserController from "../controllers/userController.js";
import Verification from "../middlewares/verifications.js";


export default function injectRoutes(app) {
    // payment gateways
    app.post('/eavo/donation/pay', PaymentGateway.initiatePayment);
    app.get('/eavo/donation/verify/:tx_ref', PaymentGateway.verifyPayment);

    // user related endpoints
    app.post('/eavo/user/sign-up',
        Verification.ValidateEmail,
        Verification.ValidateUsername,
        Verification.ValidatePassword,
        UserController.signUp);

    app.get('/eavo/user/email-verify/:token', UserController.EmailVerify);
    app.post('/eavo/user/login',
        // Verification.ValidateEmail,
        // Verification.ValidatePassword,
        UserController.login);

    app.post('/eavo/user/forgot-password',
        Verification.ValidateEmail,
        UserController.forgotPassword);

    app.post('/eavo/user/reset-password/:token',
        Verification.ValidatePassword,
        UserController.resetPassword);

    app.get('/eavo/user/total-donation',
        Verification.VerifyLogin,
        UserController.totalDonated);

    app.post('/eavo/user/news/subscribe',
        Verification.ValidateEmail,
        UserController.SubscribeNewsletter
    );

    app.post('/eavo/user/news/send',
        Verification.ValidateNews,
        UserController.SendNews
    );

}