import express from "express";
import bcryt from "bcrypt";
import jwt from 'jsonwebtoken';
const router = express.Router();
import { User } from "../models/user.js";
import nodemailer from 'nodemailer';

router.post("/signup", async(req,res)=>{
    const {username, email, password} = req.body;
    const user=  await User.findOne({email})
    if(user){
        return res.json({message: "User already exists"})
    }


const hashpassword=await bcryt.hash(password,10)
const newUser =new User({
    username,
     email,
      password: hashpassword})
await newUser.save()
return res.json({status:true ,message: "User created"})

})

router.post("/login", async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email})
    if(!user){
        return res.json({status:false ,message: "User not found"})
    }
    const validPassword = await bcryt.compare(password, user.password)
    if(!validPassword){
        return res.json({status:false ,message: "Invalid credentials"})
    }   
    const token = jwt.sign({username:user.username}, process.env.KEY,{expiresIn:"1d"})
    res.cookie('token',token,{httpOnly:true, expiresIn:"1d"})
    return res.json({status:true, message:"login successful"})
})    
router.post('/forgotpassword', async(req,res)=>{
    const {email} = req.body
    try {
        const user=await User.findOne({email})
        if(!user){
            return res.json({message: "User not found"})
        }
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'youremail@gmail.com',
                pass: 'yourpassword'
            }
        });

        var mailOptions = {
            from: 'youremail@gmail.com',
            to: 'myfriend@yahoo.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
   
   
   
    } catch (error) {

        console.log(error)
    }
})

export {router as userRouter}