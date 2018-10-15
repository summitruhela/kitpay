const mongoose = require('mongoose')
let commonFile = require('./commonFile.js')
let admin = require('../models/admin.js')
let config = require('../config/config-dev.js')
let user = require('../models/user')
let nodemailer = require('nodemailer')
let userHandler = require('./userHandler.js')
let crypto = require('crypto')
var bcrypt = require('bcryptjs');
let saltRounds = 10;
let myPlaintextPassword = 's0/\/\P4$$w0rD'
let jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary')
//  twilio credentials ............................dubeyanuj639@gmail.com 
const accountSid = 'AC2f70a2338e2e98c22238204f8e8e2f46';
const authToken = '1dcfc1b53628ef167d1f92098a317998';
const client = require('twilio')(accountSid, authToken);
//  nexmo credentials ............................dubeyanuj639@gmail.com 
const Nexmo = require('nexmo')
const nexmo = new Nexmo({
    apiKey: '1ae2c8a3',
    apiSecret: '9hvObNUEuZkpQDeH'
});
// Cloudinary credentials .................................................
cloudinary.config({
    cloud_name: config.cloud.cloud_name,
    api_key: config.cloud.api_key,
    api_secret: config.cloud.api_secret
});
// to hit any url (third party).............................................
var Client = require('node-rest-client').Client;
var nodeClient = new Client();



exports.responseHandler = (res, responseCode, responseMessage, data) => {
        res.send({
            responseCode: responseCode,
            responseMessage: responseMessage,
            data: data
        })
    },

    exports.imageUploadToCloudinary = (imageB64, callback) => {
        // console.log(imageB64)
        cloudinary.v2.uploader.upload(imageB64, (err, result) => {
            // console.log("===>>>>in cloudinary function =====>>>", err, result);
            callback(result.url);
        })
    },



    exports.crypt = function (divPass) {
        console.log("calling function divPass====", divPass)
        const secret = 'Mobiloitte1';
        const hash = crypto.createHmac('sha256', secret)
            .update(divPass)
            .digest('hex');
        return hash;

    };

exports.bcrypt = function (divPass, cb) {
    // console.log("calling bcrypt funciton ====")
    bcrypt.genSalt(saltRounds, function (err, salt) {
        // console.log("calling bcrypt funciton 2 ====")
        bcrypt.hash(divPass, salt, function (err, hashPassword) {
            //   console.log("errrr   hash  ==>>",err,hashPassword)
            cb(null, hashPassword)
            // return hashPassword;
        });
    });


};

exports.bcryptVerify = (password, dbPassword, cb) => {
    console.log("=======in bcypt verify", password, dbPassword)
    bcrypt.compare(password, dbPassword, (err, res) => {
        if (err) {
            return commonFile.responseHandler(res, 400, "Invalid Credentials.")
        } else {
            console.log("null , response======== verify  password by bcrypt function =====>>>>", null, res)
            cb(null, res)
        }
    });
}


exports.jwt = function (body, cb) {
    // console.log("calling jwt function ====", body)
    let token = jwt.sign(body, config.jwtSecretKey)
    // console.log("token====", token)
    cb(null, token)

};

exports.jwtVerify = (req, res, next) => {
    // console.log("req.headers========", req.headers)
    if (req.headers.jwt == "null" || req.headers.jwt == "" || req.headers.jwt == "undefined" || req.headers.jwt == null || req.headers.jwt == undefined) {
        console.log("token missing")
        return commonFile.responseHandler(res, 400, "Token Missing")
    }

    jwt.verify(req.headers.jwt, config.jwtSecretKey, function (err, decoded) {
        if (err) {
            console.log("Invalid token")
            return commonFile.responseHandler(res, 400, "Token Invalid", err)
        } else {
            console.log("decode=====>>>>", decoded)
            next();
        }
    });


}


/*  Allow less secure apps: ON  from your gmail for sending gmail*/

exports.sendEmail = (email, subject, message, link, cc, bcc, callback) => {
    console.log("in send email for forgot password ==> ", email, subject, message, link)
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ph-anuj@mobiloitte.com',
            pass: 'anuj11083'
        }
    })
    // console.log(message,"\n",link)
    let messageObj = {
        from: 'Noreply<ph-anuj@mobiloitte.com>',
        to: email,
        subject: subject,
        text: message, //"A sentence just to check the nodemailer",
        html: link, //"Click on this link to <a href=" + link + ">reset Password</a>",
        cc: cc,
        bcc: bcc
    }
    transporter.sendMail(messageObj, (err, info) => {
        console.log("in send mail second console-----", err, info)
        if (err) {
            console.log("Error occured", err)
            callback(null);
        } else {
            console.log("Mail sent")
            callback(null, info)
        }
    })
}

exports.balanceCal = async (contract, ownerAddress) => {
    // console.log("in balance cal function========",contract,ownerAddress)
    try {
        // console.log("====in try block====")
        var balance = await contract.methods.balanceOf(ownerAddress).call();
        console.log("in try block ====>>", balance);
        return balance;
    } catch (err) {
        console.log("====in catch block====", err)
        // throw err;
        return err;
    }

}

//  twilio for sending otp on mobiles.......................................................................... 
exports.sendMessage = (number, text, callback) => {
    client.messages.create({
        body: 'Your otp-  ' + "123642dfherw5",
        to: '+917451919823', // Text this number
        from: '+15868008694' // From a valid Twilio number
    }).then(data => {
        console.log("your otp is====>>", data)
        callback(null, data)
    }).catch(err => {
        console.log("in catch send otp to mobile by twilio===")
        callback(err)
    })
}

//  nexmo for sending otp on mobiles.......................................................................... 
exports.sendMessageNexmo = (number, callback) => {
    let otp = Math.floor(100000 + Math.random() * 900000) //six digit random number
    let from = '+918273242159';
    let to = '+91' + number;
    let text = 'Your OTP verification number is ' + otp;
    nexmo.message.sendSms(from, to, text, (error, response) => {
        if (error) {
            console.log("second")
            throw error;
        } else {
            console.log("response=====>>", response)
            callback(null, otp)
        }
    })
}

// get the response from third party or etherscan................................................................
exports.nodeClient = (url ,cb)=>{
    /* to get all transaction from a account 
     var url = "http://api-ropsten.etherscan.io/api?module=account&action=txlist&address=" + address + "&sort=dsc"
     */
    // console.log("url ton hit===>>", url)
    nodeClient.get(url, (data, response) => {
    //   console.log("data==>>", data);
      cb(null,data)
    //   console.log("response===>",response);
    });
}