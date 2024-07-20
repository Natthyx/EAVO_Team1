# Empowering African Voices Organization(EAVO)

[![Coverage Status](https://coveralls.io/repos/github/RuthTadesse/EAVO_Team1/badge.svg?branch=main)](https://coveralls.io/github/RuthTadesse/EAVO_Team1?branch=main)

A Donation website built with Express, MongoDB/Mongoose, Bull, and Node.js.

## Requirements
+ MongoDB server
+ Redis server
+ Mongoose ODM
+ JSONWebToken
+ Express.js
+ Node.js Run Time Enviroment

### Applications

+ Node.js

### APIs

#### User

+ `/eavo/user/sign-up` Post request to signup user needs `email, username & password` to be sent in json format

+ `/eavo/user/email-verify/:token`, get request to verify email after signup

+ `/eavo/user/forgot-password`, post request and needs `email` as a json

+ `/eavo/user/reset-password/:token` post request to reset password after forgot password sends email and needs `password`

+ `/eavo/user/total-donation` get the total donation of user after login

+ `/eavo/user/news/subscribe` post request to subscribe to newsletter needs `email`

+ `/eavo/user/news/send` post request to send email to all subscribers and needs `title, message, readMore` title is the title of the email, message is the main message of the email and it's put to `<p>` tag in html, 
readMore is a link to your more info.

#### Payment

payment doesnt need login to be performed

+ `/eavo/donation/pay` post request to pay the donation and needs `amount, currency(only USD & ETB), email, first_name, last_name`
and returns checkout_url which the frontend willbe forwarded to for the transaction & tx_ref is transaction reference(save it in ur front end for verifying th transaction later)

+ `/eavo/donation/verify/:tx_ref` get request to get transaction status, status could be `success, failed, pending`.