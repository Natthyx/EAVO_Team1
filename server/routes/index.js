/*eslint-disable */
import passport from "passport";
import dotenv from "dotenv";
import PaymentGateway from "../controllers/paymentGateway.js";
import UserController from "../controllers/userController.js";
import Verification from "../middlewares/verifications.js";
import EventHandler from "../controllers/eventController.js";
import ProgramHandler from "../controllers/programController.js";
dotenv.config()


export default function injectRoutes(app) {
    // payment gateways
    app.post('/eavo/donation/pay', PaymentGateway.initiatePayment);
    app.get('/eavo/donation/verify/:tx_ref', PaymentGateway.verifyPayment);

    // user related endpoints
    app.post('/eavo/admin/sign-up',
        Verification.ValidateEmail,
        Verification.ValidateUsername,
        Verification.ValidatePassword,
        UserController.signUp);

    app.get('/eavo/admin/email-verify/:token', UserController.EmailVerify);
    app.post('/eavo/admin/login',
        Verification.ValidateEmail,
        Verification.ValidatePassword,
        UserController.login);

    app.post('/eavo/admin/forgot-password',
        Verification.ValidateEmail,
        UserController.forgotPassword);

    app.post('/eavo/admin/reset-password/:token',
        Verification.ValidatePassword,
        UserController.resetPassword);

    app.get('/eavo/user/total-donation',
        Verification.ValidateEmail,
        UserController.totalDonated);

    app.post('/eavo/user/news/subscribe',
        Verification.ValidateEmail,
        UserController.SubscribeNewsletter
    );

    app.post('/eavo/user/news/send',
        Verification.ValidateNews,
        UserController.SendNews
    );

    app.post('/eavo/user/contact',
        Verification.ValidateFullname,
        Verification.ValidateEmail,
        Verification.ValidatePhoneNo,
        Verification.ValidatePost,
        UserController.contactList
    )

    // event handler
    app.get('/eavo/events/', EventHandler.getAllEvents);
    app.post('/eavo/events/',
        Verification.VerifyLogin,
        Verification.ValidateEventPost,
        EventHandler.createEvent);
    app.get('/eavo/events/:id', EventHandler.getEventById);
    app.put('/eavo/events/:id',
        Verification.VerifyLogin,
        EventHandler.updateEvent);
    app.delete('/eavo/events/:id',
        Verification.VerifyLogin,
        EventHandler.deleteEvent)

    // program handler
    app.get('/eavo/programs/', ProgramHandler.getAllPrograms);
    app.post('/eavo/programs/',
        Verification.VerifyLogin,
        Verification.ValidateEventPost,
        ProgramHandler.createProgram);
    app.get('/eavo/programs/:id', ProgramHandler.getProgramById);
    app.put('/eavo/programs/:id',
        Verification.VerifyLogin,
        ProgramHandler.updateProgram);
    app.delete('/eavo/programs/:id',
        Verification.VerifyLogin,
        ProgramHandler.deleteProgram);

    app.get('/login/federated/google', passport.authenticate('google'));

    app.get('/oauth2/redirect/google', passport.authenticate('google', {
        successReturnToOrRedirect: process.env.FRONT_HOME,
        failureRedirect: `${process.env.FRONT_HOME}login`
      }));

    app.get('/google/logout', function(req, res, next) {
        req.logout(function(err) {
            if (err) {
              return next(err); // Passes any error to the error-handling middleware
            }
            res.redirect(process.env.FRONT_HOME); // Redirect to home page or login page after logout
          });
        });;
}