import express from "express";
import bodyParser from "body-parser";
import passport from  "passport";
import GoogleStrategy from "passport-google-oauth20";
import session from "express-session";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import injectRoutes from "./routes/index.js";
import { FCModel } from "./models/federatedModel.js";
import { User } from "./models/user.js";

dotenv.config();
// import {userRouter} from "./routes/user.js"


const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET


const googleClient = new GoogleStrategy({
    clientID,
    clientSecret,
    callbackURL: 'http://localhost:5000/oauth2/redirect/google',
    scope: [ 'profile', 'email'],
    state: true
}, 
async function(accessToken, refreshToken, profile, cb) {

    let gUser = await FCModel.findOne({ provider: 'https://accounts.google.com', subject: profile.id });
    if (gUser) {
      gUser = User.findOne({ email: profile.email });
      return cb(null, gUser);
    }

    let newUser = User.findOne({ email:  profile.emails && profile.emails[0].value});

    if (newUser) {
      const newCredential = new FCModel({
        provider: 'https://accounts.google.com',
        subject: profile.id,
      });
      await newCredential.save()
      return cb(null, newUser);
    }
    
    newUser = new User({
      username: profile.displayName,
      email: profile.emails && profile.emails[0].value,
    });
    await newUser.save()

    const newCredential = new FCModel({
      provider: 'https://accounts.google.com',
      subject: profile.id,
    });
    await newCredential.save()
    return cb(null, newUser);
  }
)



passport.use(googleClient)


passport.serializeUser((user, cb) => {
    process.nextTick(() => {
        cb(null, {username: user.username, name: user.name});
    });
})

passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });

passport

const app = express();
app.use(bodyParser.json());
mongoose.connect(process.env.MONGO_URL);
app.use(express.json())
app.use(session({
    secret: process.env.SESSION_SECRET, // Use a strong, unique secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
  }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}
))
// use helmet
app.use(cookieParser())
// app.use('/auth',userRouter)

function startServer() {
    const port = process.env.PORT;
    injectRoutes(app);
    app.listen(port,() =>{
        console.log(`Server started on port ${port}`)
    })
}

startServer();


export default app
