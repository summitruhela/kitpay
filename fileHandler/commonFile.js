const bcrypt = require('bcryptjs')
// const nodemailer = require('nodemailer')
// const jwt = require('jsonwebtoken')
const config = require('../config/config-dev.js')
const cloudinary = require('cloudinary')
// const async = require('async')
// let speakEasy = require('speakeasy');
// var NodeGeocoder = require('node-geocoder');
var self = this;
let transporter;
cloudinary.config({
    cloud_name: config.cloud.cloud_name,
    api_key: config.cloud.api_key,
    api_secret: config.cloud.api_secret
});
const accountSid = 'AC70d02cf2c76d11ff4e6c0f3e9ecfb923';
const authToken = '052a59ef85f9fec4aa0f8c7dd46886bb';
const client = require('twilio')(accountSid, authToken);
// let secret = speakEasy.generateSecret({ length: 20 });


module.exports = {

    responseHandler: (res, responseCode, responseMessage, data) => {
        res.send({
            responseCode: responseCode,
            responseMessage: responseMessage,
            data: data
        })
    },
    // createHash: (password, callback) => {
    //     bcrypt.hash(password, 10, (err, hash) => {
    //         if (err)
    //             callback(err, null)
    //         else
    //             callback(null, hash)
    //     })
    // },
    // compareHash: (password, storedHash, callback) => {
    //     bcrypt.compare(password, storedHash, (err, result) => {
    //         if (err)
    //             callback(null)
    //         else
    //             callback(result)
    //     })
    // },
    sendEmail: (email,subject, message, link, cc, bcc, callback) => {
        transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'vaibhavdrichierich@gmail.com',
                pass: 'vaibhav777'
            }
        })
        // console.log(message,"\n",link)
        let messageObj = {
            from: 'Noreply<vaibhavdrichierich@gmail.com>',
            to: email,
            subject: subject,
            text: message,//"A sentence just to check the nodemailer",
            html: link,//"Click on this link to <a href=" + link + ">reset Password</a>",
            cc:cc,
            bcc:bcc
        }
        transporter.sendMail(messageObj, (err, info) => {
            if (err) {
                console.log("Error occured", err)
                callback(null);
            } else {
                console.log("Mail sent")
                callback("Mail sent.")
            }
        })
    },

    jwtDecode: (token, callback) => {
        jwt.verify(token, config.jwtSecretKey, (err, decoded) => {
            if (err) {
                callback(null)
                console.log(err)
            } else {
                callback(decoded)
                console.log(decoded)
            }
        })
    },

    imageUploadToCloudinary: (imageB64, callback) => {
        // console.log(imageB64)
        cloudinary.v2.uploader.upload(imageB64, (err, result) => {
            console.log(err, result);
            callback(result.url);
        })
    },

    uploadMultipleImages: (imagesB64, callback) => {
        let a = [];
        console.log("uploadMultipleImages");
        async.eachSeries(imagesB64, (item, callbackNextIteratn) => {
            module.exports.imageUploadToCloudinary(item, (url) => {
                a[a.length] = url;
                callbackNextIteratn();
            })
        }, (err) => {
            callback(a);
            console.log("Done with async loop")
        })
        console.log(a);
    },

    generateOTP: (callback) => {
        let secret = speakEasy.generateSecret({ length: 20 });
        console.log("secret======>>>>>>"+JSON.stringify(secret))
        // let token = speakEasy.totp({
        //     secret: secret.base32,
        //     encoding: 'base32'
        // })
        let token = 123456;
        callback(token, secret);
    },

    sendText: (number, otp, callback) => {
        console.log(number, "====>>>", typeof(number))
        client.messages
            .create({
                to:  number,
                from: "+19513192317", // vaibhav sir
                // from: "+19783064180", // anshu mam
                // from: "+14132695276", // shadab
                body: 'Your one-time password for Tap Culture is' + otp,
            })
            .then((message) => {
                console.log("space", message.sid)
                callback(message.sid);
            }, (err) => {
                console.log(err);
                callback(null);
            });
    },

    verifyOTP: (otp, secret, callback) => {
        let tokenValidates = speakEasy.totp.verify({
            secret: secret,
            encoding: 'base32',
            token: otp,
            window: 10 //implies that 10==5 min @default step=30s
            // step: 1
        });
        console.log("tokenValidates", tokenValidates)
        callback(tokenValidates);
    },

    getLatLong: (place, callback) => {
        let fn,temp;
        var options = {
            provider: 'google',
            // Optional depending on the providers
            // httpAdapter: 'https', // Default
            apiKey: 'AIzaSyB959XY2RqlTkZNYuNRp1EU_YiA3KjS71Q' // for Mapquest, OpenCage, Google Premier
            // formatter: null         // 'gpx', 'string', ...
        };
        var geocoder = NodeGeocoder(options);
        // fn = () => {
            geocoder.geocode(place, function(err, result) {
                // console.log(err, result);
                if (result) {
                    callback(result[0].latitude, result[0].longitude)
                }
            });
    }


// var apn = require('apn');
  //   push_notification = function(deviceToken,message){
  // var options = {
  //   "cert": config.pemFile,
  //   "key":  config.pemFile,
  //   "passphrase": "Mobiloitte1",

  //   "gateway": "gateway.push.apple.com",
  //   "port": 2195,
  //   "enhanced": true,
  //   "cacheLength": 5,
  //   "title":"Bean There",
  //   "message":"Hello from Bean There. Here is a message for you!!",
  // };
  // var title="Bean There";
  // var message= message;
  // var apnConnection = new apn.Connection(options);
  // var myDevice = new apn.Device(deviceToken);
  // var note = new apn.Notification();

  //   //note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
  //   note.badge = 1;
  //   note.alert = message;
  //   note.payload = {"title":title,"message":message};
  //   try{
  //     apnConnection.pushNotification(note, myDevice);
  //     console.log('iOS Push Notification send');
  //     return true;
  //   } catch(ex){
  //     console.log("Error in push notification-- ",ex);
  //     return false;
  //   }
  // }

    // imageUploadToCloudinary1:(imageUrl)=>{
    //     console.log("Control was here")
    //     cloudinary.v2.uploader.upload(imageUrl,(err,result)=>{
    //         console.log("cloudinary function",result,err);
    //         return result.url;
    //     })
    // }
}