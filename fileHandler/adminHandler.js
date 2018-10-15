const mongoose = require('mongoose')
var Web3 = require('web3');
let admin = require('../models/admin.js')
let config = require('../config/config-dev.js')
let user = require('../models/user')
let token = require('../models/tokenList')
let transactions = require('../models/transactionHistory')
let tokenPurchase = require('../models/tokenPurchase')
let func = require('./function.js')
let termAndService = require('../models/termAndService')
let AboutUs = require('../models/aboutUs')
let Policy = require('../models/privacyPolicy')
var BigNumber = require('bignumber.js');
var fs = require('fs');
const numberToBN = require('number-to-bn');
var each = require('async-each-series');
let Tx = require('ethereumjs-tx');
var abi = JSON.parse(fs.readFileSync('abi.json', 'utf-8'));
var abiArray = JSON.parse(fs.readFileSync('abiArray.json', 'utf-8'));
var abiTRZA = JSON.parse(fs.readFileSync('abiTRZA.json', 'utf-8'));
// var web3 = new Web3(Web3.givenProvider || 'https://ropsten.infura.io/1c7b730f883e44f39134bc8a680efb9f');
var web3 = new Web3(Web3.givenProvider || 'https://mainnet.infura.io');
var Accounts = require('web3-eth-accounts');
var accounts = new Accounts('https://mainnet.infura.io/');
// var accounts = new Accounts('https://ropsten.infura.io/');


module.exports = {

    jwtVerify: (req, res, next) => {
        console.log("req.body========")
        jwt.verify(req.body.jwtToken, config.jwt, function (err, decoded) {
            if (err) {
                return commonFile.responseHandler(res, 400, "Token Missing.")
            } else {
                console.log("decode", decoded)
                next();
            }
        });
    },
    /*............................................ LOGIN ..........................................................*/
    login: (req, res) => {
        console.log("request body", req.body)
        if (!req.body.email || !req.body.password) {
            return func.responseHandler(res, 401, "Error: Credentials missing")
        }
        admin.findOne({
            email: req.body.email
        }, {
            name: 1,
            email: 1,
            profilePic: 1,
            password: 1,
            accountID: 1,
            location: 1
        }).lean().exec((err, result) => {
            if (err)
                return func.responseHandler(res, 400, "Error: In login function")
            else if (result) {
                func.bcryptVerify(req.body.password, result.password, (err, resultHash) => {
                    console.log("result hash======>", resultHash)
                    if (resultHash === true) {
                        func.jwt({
                            _id: result._id
                        }, (err_, result_) => {
                            if (err_)
                                console.log("err_In admin generate JWt at login =====>>")
                            else {
                                result.jwt = result_
                                delete result.password
                                console.log("result for admin login===>>", result)
                            }
                        })
                        console.log("result======", result)
                        return func.responseHandler(res, 200, "Successful login", result)
                    } else {
                        return func.responseHandler(res, 400, "Wrong Email id or password.")
                    }
                })
            } else
                return func.responseHandler(res, 400, "Wrong Email id or password.")
        })
    },

    //  ======================== DASHBOARD API =======================================
    totalRegistereduser: (req, res) => {
        user.find({}).count().lean().exec((err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal Server error")
            }
            console.log(result);
            return func.responseHandler(res, 200, "Succes", result)
        })
    },

    activeUsers: (req, res) => {
        user.find({
            status: "ACTIVE"
        }).count().lean().exec((err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal Server error")
            }
            console.log(result);
            return func.responseHandler(res, 200, "Succes", result)
        })
    },

    totalBlockedUser: (req, res) => {
        user.find({
            status: "BLOCKED"
        }).count().lean().exec((err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal Server error")
            }
            console.log(result);
            return func.responseHandler(res, 200, "Succes", result)
        })
    },
    totalCoins: (req, res) => {
        token.find({
            status: "ACTIVE"
        }).count().lean().exec((err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal Server error")
            }
            console.log(result);
            return func.responseHandler(res, 200, "Succes", result)
        })
    },
    numberOfTransaction: (req, res) => {
        tokenPurchase.find({
            action: "Complete"
        }).count().lean().exec((err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal Server error")
            }
            console.log(result);
            return func.responseHandler(res, 200, "Succes", result)
        })
    },
    myProfile: (req, res) => {
        admin.findOne({}).exec((err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal Server error")
            } else if (!result) {
                return func.responseHandler(res, 404, "No details found")
            } else {
                return func.responseHandler(res, 200, "Succes", result)
            }
        })
    },

    myProfileEdit: (req, res) => {
        console.log("===>>", req.body)
        if (!req.body._id) {
            return func.responseHandler(res, 401, "Error: Credentials missing")
        }
        if (!req.body.name || !req.body.email || !req.body.phoneNumber || !req.body.profilePic || !req.body.DOB || !req.body.address) {
            return func.responseHandler(res, 401, "Error: Parameter missing")
        }
        func.imageUploadToCloudinary(req.body.profilePic, (url) => {
            console.log("myProfileEdit========", url)
            var obj = {
                name: req.body.name,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                profilePic: url,
                DOB: req.body.DOB,
                address: req.body.address,
                gender: req.body.gender
            }
            admin.findByIdAndUpdate({
                _id: req.body._id
            }, obj, {
                new: true
            }, (err, result) => {
                if (err) {
                    return func.responseHandler(res, 400, "Internal Server error")
                } else {
                    return func.responseHandler(res, 200, "Succes", result)
                }
            })

        })

    },



    /*............................................ ADD TOKEN ..........................................................*/

    /*    http://localhost:8000/admin/addToken  
          Method - Post
          request -
          {
        "tokenName":"zcash",
        "tokenImage":"base 64",
        "tokenAmount":"$ 100",
        "numberOfToken":"10"
          }
          Response -
          {
      "responseCode": 200,
      "responseMessage": "Success: Coin saved."
        }
    */

    addToken: (req, res) => {
        console.log("req.body=====>>", req.body)
        if (!req.body.contractAddress || !req.body._id || !req.body.tokenImage)
        return func.responseHandler(res, 400, "Error: Parameters missing")

        token.findOne({contractAddress:req.body.contractAddress},(err,result)=>{
            if(err){
                return func.responseHandler(res, 400, "Internal server Error.")
            }
            else if(result){
                return func.responseHandler(res, 400, "Token already added.")
            }
            else{
                if (req.body.tokenType === "ERC") {
                    let add = new token({
                        contractAddress: req.body.contractAddress,
                        createdBy: mongoose.Types.ObjectId(req.body._id),
                        tokenAbi: []
                    })
        
                    if (web3.utils.isAddress(req.body.contractAddress)) {
                        var getAbiUrl = "https://api.etherscan.io/api?module=contract&action=getabi&address=" + req.body.contractAddress
                        func.nodeClient(getAbiUrl, (err_, result_) => {
                            // console.log("result ===>>"+ typeof JSON.parse(result_.result))
                            console.log("========>>", result_)
                            if (result_.status == '0') {
                                return func.responseHandler(res, 400, "Contract source code not verified.", result.result)
                            } else {
                                var getInfoUrl = "https://api.ethplorer.io/getTokenInfo/" + req.body.contractAddress + "?apiKey=freekey"
                                func.nodeClient(getInfoUrl, (err1, result1) => {
                                    // console.log("result for get info of token ====>>",result1)
                                    func.imageUploadToCloudinary(req.body.tokenImage, (url) => {
                                        // console.log("url===", url)
                                        if (url != undefined) {
                                            // add.symbol = result1.symbol
                                            add['tokenAbi'] = JSON.parse(result_.result)
                                            // console.log("adddddddd++++++.......>>>",add)
                                            add.tokenDecimal = result1.decimals
                                            add.tokenType = "ERC"
                                            add.tokenName = result1.name
                                            add.contractAddress = result1.address
                                            add.tokenImage = url;
                                            add.save((err, result) => {
                                                console.log("========>>>", result)
                                                if (err)
                                                    return func.responseHandler(res, 400, "Error: saving Coin.", err)
                                                else
                                                    return func.responseHandler(res, 200, "Success: New Token saved.")
                                            })
                                        } else
                                            return func.responseHandler(res, 400, "Url cannot be obtained.")
                                    })
                                })
                            }
                        })
                    } else {
                        return func.responseHandler(res, 400, "Please provide correct contract address")
                    }
                } else {
                    if (!req.body.tokenName || !req.body.tokenImage || !req.body.tokenPrice || !req.body.contractAddress || !req.body.tokenDecimal || !req.body.quantity || !req.body._id || !req.body.privateKey || !req.body.ownerAddress)
                        return func.responseHandler(res, 400, "Error: Parameters missing")
                    let add = new token({
                        tokenName: req.body.tokenName,
                        tokenImage: req.body.tokenImage,
                        tokenPrice: req.body.tokenPrice,
                        ownerAddress: req.body.ownerAddress,
                        contractAddress: req.body.contractAddress,
                        quantity: req.body.quantity,
                        tokenDecimal: req.body.tokenDecimal,
                        privateKey: req.body.privateKey,
                        createdBy: mongoose.Types.ObjectId(req.body._id),
        
                    })
                    console.log("===check valid=>>>>>", web3.utils.isAddress(req.body.ownerAddress))
                    if (web3.utils.isAddress(req.body.contractAddress)) {
                        if (web3.utils.isAddress(req.body.ownerAddress)) {
                            func.imageUploadToCloudinary(req.body.tokenImage, (url) => {
                                console.log("url===", url)
                                if (url != undefined) {
                                    var getAbiUrl = "https://api.etherscan.io/api?module=contract&action=getabi&address=" + req.body.contractAddress
                                    func.nodeClient(getAbiUrl, (err_, result_) => {
                                        add.tokenImage = url;
                                        add.tokenType = "OWN"
                                        add['tokenAbi'] = JSON.parse(result_.result)
                                        add.save((err, result) => {
                                            console.log("========>>>", result)
                                            if (err)
                                                return func.responseHandler(res, 400, "Error: saving Coin.", err)
                                            else
                                                return func.responseHandler(res, 200, "Success: New Token saved.")
                                        })
                                    })
                                } else
                                    return func.responseHandler(res, 400, "Url cannot be obtained.")
                            })
                        } else {
                            return func.responseHandler(res, 400, "Please provide correct contract address")
                        }
                    } else {
                        return func.responseHandler(res, 400, "Please provide correct contract address")
                    }
                }
            }
        })
    },


    totalTransactions: (req, res) => {
        transactions.find({}, (err, result) => {
            if (err)
                return func.responseHandler(res, 400, "Error: Something went wrong.", err)
            else if (result.length < 1)
                return func.responseHandler(res, 200, "Success: Transaction are not available.", result)
            else
                return func.responseHandler(res, 200, "Success: Total transactions.", result.length)
        })
    },

    /*
        url - http://localhost:1412/admin/updateTermAndService
        method - POST 
        body : 
        {
       "_id":"5b6bdc1588e3d413e70badc3",
       "data":"dfhdf"
       }
         */
    updateTermAndService: (req, res) => {
        console.log("body-=====>>", req.body)
        if (!req.body._id) {
            return func.responseHandler(res, 400, "Error: Parameters missing")
        }
        termAndService.findOneAndUpdate({
            _id: req.body._id
        }, {
            $set: {
                "terms": req.body.data
            }
        }, {
            new: true
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Error: Update term and service.", err)
            } else {
                return func.responseHandler(res, 200, "Success: Term And Service updated.")
            }
        })
    },

    /*
    url - http://localhost:1412/admin/updateAboutUs 
    Method - POST
    Body: 
    {
    "_id":"5b6bdc1588e3d413e70badc5",
    "data":"drhdfhfghghdfgh"
    }
    */
    updateAboutUs: (req, res) => {
        console.log("req.body-=====>>", req.body)
        if (!req.body._id) {
            return func.responseHandler(res, 400, "Error: Parameters missing")
        }
        AboutUs.findOneAndUpdate({
            _id: req.body._id
        }, {
            $set: {
                "about": req.body.data
            }
        }, {
            new: true
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Error: About Us.", err)
            } else {
                return func.responseHandler(res, 200, "Success:About Us updated.")
            }
        })
    },
    /*
    url - http://localhost:1412/admin/updateAboutUs
    Method - Post
    body ;
    {
    "_id":"5b6bdc1588e3d413e70badc5",
    "data":"drhdfhfghghdfgh"
    }
    */
    updatePolicy: (req, res) => {
        console.log("body-=====>>", req.body.data)
        if (!req.body._id) {
            return func.responseHandler(res, 400, "Error: Parameters missing")
        }
        Policy.findOneAndUpdate({
            _id: req.body._id
        }, {
            $set: {
                "policy": req.body.data
            }
        }, {
            new: true
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Error: Update Policy.", err)
            } else {
                return func.responseHandler(res, 200, "Success:Update Policy updated.")
            }
        })
    },

    changePasswordOfAdmin: (req, res) => {
        if (!req.body._id || !req.body.password) {
            return func.responseHandler(res, 400, "Error: Parameters missing")
        }
        func.bcrypt(req.body.password, (err1, result1) => {
            if (err1) {
                return func.responseHandler(res, 400, "Error: Internal Server Error.", err1)
            } else {
                admin.findByIdAndUpdate({
                    _id: req.body._id
                }, {
                    $set: {
                        password: result1
                    }
                }, (err, result) => {
                    if (err) {
                        return func.responseHandler(res, 400, "Error: Internal Server Error.", err)
                    } else {
                        return func.responseHandler(res, 200, "Success:Password Change Successfully.")
                    }
                })
            }
        })

    },

    /*
    url - http://localhost:1412/admin/forgotPassword
    Method - Post
    body ;
    {
    "_id":"5b6bdc1588e3d413e70badc5",
    "password":""
    }
    */
    forgotPassword: (req, res) => {

        if (!req.body.email) {
            return func.responseHandler(res, 400, "Error: Parameters Missing")
        }
        admin.findOne({
            "email": req.body.email
        }, (err, result) => {
            console.log("in forgot password  ====>>", err, result)
            if (err) {
                return func.responseHandler(res, 400, "Error: in forgot password")
            } else if (result) {
                var random = Math.floor(100000 + Math.random() * 900000)
                // let link = 'http://172.16.6.183:1412/reset?_id=' + result._id + '&' + "ran=" + random  //for staging
                let link = 'http://172.16.6.79:4200/reset?_id=' + result._id + '&' + "ran=" + random //for local

                console.log("link====", link)
                func.sendEmail(req.body.email, "KiTPAY", "Password reset link", "Click on this link to <a href=" + link + ">reset Password</a>", null, null, (err, result) => {
                    if (result) {
                        admin.findOneAndUpdate({
                            email: req.body.email
                        }, {
                            $set: {
                                ran_No_pass: random
                            }
                        }, {
                            new: true
                        }, (err_, result_) => {
                            if (err_) {
                                return func.responseHandler(res, 400, "Error: saving random number in forgot password")
                            } else {
                                console.log("in update random number===>>", result_)
                                return func.responseHandler(res, 200, "We have sent you an email with reset instruction.");
                            }
                        })

                    } else
                        return func.responseHandler(res, 400, "Link not sent. Please try again");
                })
            } else
                return func.responseHandler(res, 400, "Please provide correct E-mail")
        })
    },

    /* 
        come with a new link
        url - http://172.16.6.183:1412/admin/resetPassword?_id=5b76c211d69a741b130b0be9&ran=955382
        Method - POST 
        body : 
        {
       "password":"anuj"
        }
        
        */

    resetPassword: (req, res) => {
        console.log("req.query===", req.query)
        console.log("req.body===", req.body)
        if (!req.query._id || !req.body.password || !req.query.ran)
            return func.responseHandler(res, 400, "Error: Parameters missing1")
        func.bcrypt(req.body.password, (err1, result1) => {
            if (err1) {
                console.log("Error in creating hash reset password api", err1)
            } else {
                console.log(result1)
                admin.findOne({
                    "_id": req.query._id
                }, (err2, result2) => {
                    if (err2)
                        return func.responseHandler(res, 400, "Error: resetPassword")
                    else if (result2) {
                        if (req.query.ran == result2.ran_No_pass) {
                            var random = Math.floor(100000 + Math.random() * 900000)
                            admin.findOneAndUpdate({
                                "_id": req.query._id
                            }, {
                                $set: {
                                    ran_No_pass: random,
                                    password: result1
                                }
                            }, (err3, result3) => {
                                if (err3) {
                                    return func.responseHandler(res, 400, "Error: resetPassword", err3)
                                } else {
                                    console.log("result3===>>", result3)
                                    return func.responseHandler(res, 200, "Success password reset")
                                }

                            })
                        } else {
                            return func.responseHandler(res, 400, "You alredy use this link.")
                        }

                    } else {
                        return func.responseHandler(res, 400, "Error: No user found")
                    }
                })
            }
        })
    },
    //  ====================================================== second options of admin panel menu ====================================
    userManagement: (req, res) => {
        console.log("in user management")
        if (!req.body.fromDate || !req.body.toDate || req.body.fromDate == null || req.body.toDate == null) {
            var query = {}
        } else {
            var fromDate = new Date(req.body.fromDate)
            fromDate.setHours(0, 0, 0, 0)
            var toDate = new Date(req.body.toDate)
            toDate.setHours(23, 59, 59, 999)
            var query = {
                $and: [{
                    createdAt: {
                        $gte: fromDate,
                        $lte: toDate
                    }
                }]
            }
        }
        let options = {
            page: req.body.page || 1,
            limit: 5,
            sort: {
                createdAt: -1
            }
        }
        user.paginate(query, options, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (result.length < 1) {
                return func.responseHandler(res, 200, "User not found.")
            } else {
                console.log("result ===>>", JSON.stringify(result))
                return func.responseHandler(res, 200, "Success", result)
            }
        })
    },

    //  change password of a user from admin panel........................................................................................
    changePasswordOfUser: (req, res) => {
        if (!req.body._id || !req.body.userId || !req.body.newPassword) {
            return func.responseHandler(res, 400, "Error: Parameters missing")
        }
        admin.findOne({
            _id: req.body._id
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error1.")
            } else if (!result) {
                return func.responseHandler(res, 400, "Invalid credentials")
            } else {
                func.bcrypt(req.body.newPassword, (err_, hashPassword) => {
                    if (err_) {
                        return func.responseHandler(res, 400, "Error: Could not bcrypt the password.")
                    } else {
                        user.findOneAndUpdate({
                            _id: req.body.userId
                        }, {
                            $set: {
                                password: hashPassword
                            }
                        }, {
                            new: true
                        }, (err1, result1) => {
                            if (err1) {
                                return func.responseHandler(res, 400, "Internal server error2.")
                            } else if (!result1) {
                                return func.responseHandler(res, 400, "Invalid User credentials")
                            } else {
                                return func.responseHandler(res, 200, "Success : Admin change the password of user.")
                            }
                        })
                    }
                })

            }
        })

    },

    //  sweep paper api for admin panel ........................
    sweepPaperWallet: (req, res) => {
        if (!req.body._id || !req.body.userId) {
            return func.responseHandler(res, 400, "Error: Parameters missing")
        }
        admin.findOne({
            _id: req.body._id
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error1.")
            } else if (!result) {
                return func.responseHandler(res, 400, "Invalid credentials")
            } else {
                user.findOne({
                    _id: req.body.userId
                }, (err1, result1) => {
                    if (err1) {
                        return func.responseHandler(res, 400, "Internal server error2.")
                    } else if (!result1) {
                        return func.responseHandler(res, 400, "Invalid User credentials")
                    } else {
                        return func.responseHandler(res, 200, "Success : This is your user Information.", result1)
                    }
                })

            }
        })

    },
    //  blockUser from admin panel ........................................................................................................
    blockUserByAdmin: (req, res) => {
        if (!req.body._id || !req.body.userId || !req.body.status) {
            return func.responseHandler(res, 400, "Error: Parameters missing")
        }
        admin.findOne({
            _id: req.body._id
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error1.")
            } else if (!result) {
                return func.responseHandler(res, 400, "Invalid credentials")
            } else {
                user.findOneAndUpdate({
                    _id: req.body.userId
                }, {
                    $set: {
                        status: req.body.status
                    }
                }, {
                    new: true
                }, (err, result) => {
                    if (err) {
                        return func.responseHandler(res, 400, "Internal server error2.")
                    } else if (!result) {
                        return func.responseHandler(res, 400, "Invalid User credentials")
                    } else {
                        return func.responseHandler(res, 200, "Success", result)
                    }
                })
            }
        })
    },
    // show user transaction history in admin panel wallet management menu..................................
    walletManagement: (req, res) => {
        console.log("req.body=====>>>", req.body)

        console.log("from date====>>", fromDate)
        console.log("to date====>>", toDate)
        if (req.body.fromDate && req.body.toDate && req.body.token && req.body.status) {
            console.log("111111111")
            var fromDate = new Date(req.body.fromDate)
            fromDate.setHours(0, 0, 0, 0)
            var toDate = new Date(req.body.toDate)
            toDate.setHours(23, 59, 59, 999)
            var query = {
                $and: [{
                    status: req.body.status
                }, {
                    token: req.body.token
                }, {
                    createdAt: {
                        $gte: fromDate,
                        $lte: toDate
                    }
                }]
            }
        } else if (req.body.status && req.body.token) {
            console.log("222222222")
            var query = {
                $and: [{
                    status: req.body.status
                }, {
                    token: req.body.token
                }]
            }
        } else if (req.body.fromDate && req.body.toDate && req.body.status) {
            console.log("333333333")
            var fromDate = new Date(req.body.fromDate)
            fromDate.setHours(0, 0, 0, 0)
            var toDate = new Date(req.body.toDate)
            toDate.setHours(23, 59, 59, 999)
            var query = {
                $and: [{
                    status: req.body.status
                }, {
                    createdAt: {
                        $gte: fromDate,
                        $lte: toDate
                    }
                }]
            }
        } else if (req.body.status) {
            console.log("44444444")
            var query = {
                status: req.body.status
            }
        }

        var options = {
            page: req.body.page || 1,
            limit: 10,
            sort: {
                createdAt: -1
            }
        }
        transactions.paginate(query, options, (err, result) => {
            console.log("result===>>", result)
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (result.length < 1) {
                return func.responseHandler(res, 200, "Transactions not found.")
            } else {

                return func.responseHandler(res, 200, "Success", result)

            }
        })
    },


    //  transaction details show in admin panel...............with all filters......................
    transactionDetails: (req, res) => {
        console.log("@@@@@@", req.body)
        var options = {
            page: req.body.page || 1,
            limit: 10,
            sort: {
                createdAt: -1
            }
        }
        var fromDate = new Date(req.body.fromDate)
        fromDate.setHours(0, 0, 0, 0)
        console.log("from date===>>", fromDate)
        var toDate = new Date(req.body.toDate)
        toDate.setHours(23, 59, 59, 999)
        console.log("toDatee===>>", toDate)
        if ((!req.body.transactionId || req.body.transactionId == undefined) && (!req.body.fromDate || !req.body.toDate || req.body.toDate == undefined || req.body.toDate == undefined) && (req.body.tokenName) && (req.body.action)) {
            console.log("in 111111 filter", req.body)
            var query = {
                tokenName: req.body.tokenName,
                action: req.body.action
            }

        } else if ((req.body.transactionId) && (!req.body.fromDate || !req.body.toDate || req.body.toDate == undefined || req.body.toDate == undefined) && (req.body.tokenName) && (req.body.action)) {
            console.log("in 2222 filter", req.body)
            var query = {
                $and: [{
                    paymentId: {
                        $regex: new RegExp(req.body.transactionId, "ig")
                    }
                }, {
                    tokenName: req.body.tokenName,
                    action: req.body.action
                }]
            }
        } else if (req.body.toDate && req.body.fromDate && req.body.tokenName && !req.body.transactionId && req.body.action) {
            console.log("in 33333 filter", req.body)
            var query = {
                $and: [{
                    action: req.body.action
                }, {
                    tokenName: req.body.tokenName
                }, {
                    createdAt: {
                        $gte: fromDate,
                        $lte: toDate
                    }
                }]
            }
        } else if ((req.body.transactionId) && (req.body.fromDate || req.body.toDate) && (req.body.tokenName) && (req.body.action)) {
            console.log("32222 filter", req.body)
            var query = {
                $and: [{
                    paymentId: {
                        $regex: new RegExp(req.body.transactionId, "ig")
                    }
                }, {
                    tokenName: req.body.tokenName
                }, {
                    action: req.body.action
                }, {
                    createdAt: {
                        $gte: fromDate,
                        $lte: toDate
                    }
                }]
            }
        }
        if ((!req.body.transactionId || req.body.transactionId == undefined) && (!req.body.fromDate || !req.body.toDate || req.body.toDate == undefined || req.body.toDate == undefined) && (!req.body.tokenName) && (req.body.action)) {
            console.log("44444 filter", req.body)
            var query = {
                action: req.body.action
            }
        }
        tokenPurchase.paginate(query, options, (err, result) => {
            console.log("query===>", query)
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (!result) {
                return func.responseHandler(res, 400, "Invalid credentials")
            } else {
                return func.responseHandler(res, 200, "Success", result)
            }
        })
    },
    // payment info when admin click on pay button...........................
    payInfo: (req, res) => {
        if (!req.body._id) {
            return func.responseHandler(res, 400, "Error: Parameters missing")
        }
        tokenPurchase.findOne({
            _id: req.body._id
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (!result) {
                return func.responseHandler(res, 400, "Data not found.")
            } else {
                console.log("payInfo=====>>>", result)
                return func.responseHandler(res, 200, "Success", result)
            }
        })

    },
    // payment by admin to send token to user...........................................................
    payToken: (req, res) => {
        // console.log("req.body===>", req.body)
        var tokenAddress = req.body.tokenAddress
        token.findOne({
            contractAddress: tokenAddress
        }, (err, tokenResult) => {
            // console.log("err,result===>>",err,tokenResult)
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (!tokenResult) {
                return func.responseHandler(res, 400, "No Data Found.111")
            } else {

                var tokenName = tokenResult.tokenName
                // console.log("=====>>>tokenResult.tokenName====>>",tokenResult.tokenName)
                var toAddress = req.body.toAddress
                // console.log("=====>>>tokenResult.toAddress====>>",tokenResult.toAddress)
                var decimal = tokenResult.tokenDecimal;
                // console.log("=====>>>tokenResult.tokenDecimal====>>",tokenResult.tokenDecimal)
                var amount = new BigNumber(req.body.amount).multipliedBy(new BigNumber(Math.pow(10, decimal)));
                // console.log('Final amount is=====>>>>>', amount);
                var check_amount = amount;
                var amount = web3.utils.toHex(amount) //use in raw transaction
                // console.log('Final amount is=====>>>>>', amount);
                // console.log("result of token ===>>", tokenResult)
                // console.log("tokenResult.ownerAddress========>>>",tokenResult.ownerAddress)
                var myAddress = tokenResult.ownerAddress
                console.log("tokenResult.ownerAddress========>>>", myAddress)
                web3.eth.getTransactionCount(myAddress).then(count => {
                    console.log("count==>", count)
                    privateKey = tokenResult.privateKey
                    // console.log("tokenResult.privateKey=======>>>",tokenResult.privateKey)
                    var privateKey = privateKey.split("0x")
                    var privatekey = privateKey[1]
                    var privateKey = new Buffer(privatekey, 'hex');
                    var contractAddress = tokenAddress; // token address
                    var contract = new web3.eth.Contract(abi, contractAddress, {
                        from: myAddress
                    })
                    // console.log("contract========>>>",contract)
                    // var decimal11 = contract.decimals()
                    //  console.log("decimal1111111111111111111111111111=====>>>",decimal11)
                    contract.methods.balanceOf(myAddress).call().then(function (balance) {
                        console.log("@@@@@@balance===", balance)
                        let check_balance = balance;
                        var finalBalance = new BigNumber(balance).isGreaterThanOrEqualTo(new BigNumber(check_amount));
                        console.log("withdraw fee===>>", tokenResult.withDrawFee)
                        var actualFee = (tokenResult.withDrawFee / 1000000000000000000).toString()
                        // console.log("actual fee===>", actualFee)
                        // var arr_ = actualFee.split('-')
                        // console.log("arr_===>", arr_)
                        var firstNum = actualFee.split('e-')
                        var num = Number(actualFee.split('e-')[0]) * Number('1e' + (actualFee.split('e-')[1]))
                        console.log("num=====>>>>", num)
                        if (finalBalance) {
                            var rawTransaction = {
                                "from": myAddress,
                                "gasPrice": web3.utils.toHex(num),
                                // "gasPrice": web3.utils.toHex(z),
                                "gasLimit": web3.utils.toHex(210000),
                                "to": contractAddress,
                                "value": "0x0",
                                "data": contract.methods.transfer(toAddress, amount).encodeABI(),
                                "nonce": web3.utils.toHex(count)
                            }
                            var transaction = new Tx(rawTransaction)
                            transaction.sign(privateKey)
                            web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'), (err2, hash) => {
                                console.log("========err2===", err2, hash)
                                if (err2) {
                                    return func.responseHandler(res, 400, "Increase your nonce")
                                } else {
                                    tokenPurchase.findOneAndUpdate({
                                        _id: req.body._id_tokenPurchase
                                    }, {
                                        $set: {
                                            action: "Complete",
                                            txHash: hash
                                        }
                                    }, (err1, result) => {
                                        if (err1) {
                                            return func.responseHandler(res, 400, "Internal server error2.", err1)
                                        } else {
                                            return func.responseHandler(res, 200, "Successfully send token to user wallet.", hash)
                                        }
                                    })

                                }
                            })
                        } else {
                            console.log("Insufficient Token")
                            return func.responseHandler(res, 400, "Insufficient Token")
                        }

                    }).catch(errBalance => {
                        console.log("Insufficient fund.", errBalance)
                        return func.responseHandler(res, 400, "Provide valid information.", errBalance)
                    })
                }).catch(err => {
                    // console.log("err===>>>", err)
                    return func.responseHandler(res, 400, "Provide valid information.", err)
                })
            }
        })

    },
    // when admin don't want to send token to user ........... admin reject the request of user........................
    rejectRequest: (req, res) => {
        if (!req.body._id_tokenPurchase) {
            return func.responseHandler(res, 400, "Error: Parameters missing")
        }
        tokenPurchase.findOneAndUpdate({
            _id: req.body._id_tokenPurchase
        }, {
            $set: {
                action: "Reject"
            }
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else {
                return func.responseHandler(res, 200, "Success", result)
            }
        })

    },

    withDrawFee: (req, res) => {
        if (req.body.coinName) {
            var query = {
                $and:[{status:"ACTIVE"}, {tokenName: {$regex: new RegExp(req.body.coinName, "ig")}}]
               
            }
        } else {
            var query = {status:"ACTIVE"}
        }
        token.find(query, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else {
                return func.responseHandler(res, 200, "Success", result)
            }
        })
    },

    editWithDrawFee: (req, res) => {
        if (!req.body.tokenId || !req.body.fee) {
            return func.responseHandler(res, 400, "Error: Parameters missing")
        }
        token.findOneAndUpdate({
            _id: req.body.tokenId
        }, {
            $set: {
                withDrawFee: req.body.fee
            }
        }, {
            new: true
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else {
                return func.responseHandler(res, 200, "Success: With Fee Updated Successfully.", result)
            }
        })
    },
    //  view token information corresponding to token _id..........
    viewTokenInfo: (req, res) => {
        if (!req.body._id)
            return func.responseHandler(res, 400, "Error: Parameters missing")
        token.findOne({
            _id: req.body._id
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else {
                console.log("result token info================>>>", result)
                return func.responseHandler(res, 200, "Success", result)
            }
        })

    },
    // change the status of token when admin delete the token.......................
    deleteToken: (req, res) => {
        if (!req.body._id)
            return func.responseHandler(res, 400, "Error: Parameters missing")
        token.findOneAndUpdate({
            _id: req.body._id
        }, {
            $set: {
                "status": "DELETED"
            }
        }, {
            new: true
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (!result) {
                return func.responseHandler(res, 404, "No Data Found")
            } else {
                return func.responseHandler(res, 200, "Token Delete Successfully.")
            }
        })
    },


    numberOfTokens: (req, res) => {
        var bal = 0,
            counter = 0;
        var finalBalance = 0;
        token.find({
            status: "ACTIVE"
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else {
                // console.log("================@@@@=============", result)
                each(result, (ele, next) => {
                    // console.log("element===", ele)
                    var ownerAddress = ele.ownerAddress
                    // console.log("====owner address======>", ownerAddress)
                    var tokenName = ele.tokenName
                    // console.log("====tokenName======>", tokenName)
                    var contractAddress = ele.contractAddress
                    // console.log("====contractAddress======>", contractAddress)
                    var decimal = ele.tokenDecimal
                    // console.log("decimals====>>>",decimal)
                    var contract = new web3.eth.Contract(abi, contractAddress, {
                        from: ownerAddress
                    })

                    func.balanceCal(contract, ownerAddress).then((balance) => {
                        counter++;
                        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", balance)
                        var balance_ = Number(new BigNumber(balance).dividedBy(new BigNumber(Math.pow(10, decimal)))).toFixed(1)
                        console.log("balance_ after big number===>>", balance_)
                        if (balance_ == "NaN" && counter != result.length) {
                            console.log("111111")
                            next();
                        } else if (balance_ == "NaN" && counter == result.length) {
                            console.log("222222")
                            return func.responseHandler(res, 200, "Number of tokens.", finalBalance)
                            next();
                        } else if (balance_ != "NaN") {
                            console.log("333333")
                            var balance__ = parseInt(balance_)
                            console.log("balance 111____==>", balance_, finalBalance)
                            // 
                            finalBalance = Number(balance_ + finalBalance).toFixed(1);
                            console.log("balance 222____==>", finalBalance)
                            next();
                        } else if (balance_ != "NaN" && counter == result.length) {
                            console.log("4444444")
                            finalBalance = finalBalance + balance_
                            return func.responseHandler(res, 200, "Number of tokens.", finalBalance)
                            next();
                        }

                    }).catch(err => {
                        counter++;
                        if (counter == result.length) {
                            return func.responseHandler(res, 200, "Number of tokens.", finalBalance)
                        }
                        next();
                    })

                })
            }
        })
    },
    //  show balance of particular token to user app and website................................................................
    show_token_balance: (req, res) => {
        console.log("req.body===>>>", req.body)
        if (!req.body.walletAddress) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        var walletAddress = req.body.walletAddress
        var contract = req.body.contractAddress
        token.findOne({
            contractAddress: req.body.contractAddress
        }, (err, result) => {
            console.log("@@@===>>>", err, result)
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (!result) {
                return func.responseHandler(res, 404, "No result found.")
            } else {
                var tokenName = result.tokenName
                // contract = new web3.eth.Contract(abiArray[tokenName], contract, {
                contract = new web3.eth.Contract(abi, contract, {
                    from: walletAddress
                })
                // contract = new web3.eth.Contract(result.tokenAbi, contract, {from: walletAddress}) 
                func.balanceCal(contract, walletAddress).then((balance) => {
                    // var balance = new BigNumber(balance).dividedBy(new BigNumber(Math.pow(10, result.tokenDecimal)));
                    var balance = Number(new BigNumber(balance).dividedBy(new BigNumber(Math.pow(10, result.tokenDecimal))));
                    console.log("balance=====<>>>", balance)
                    var data = {
                        balance: balance,
                        USD: "$" + balance * (result.tokenPrice / result.quantity),
                        tokenName: result.tokenName
                    }
                    console.log("data=====>>>>", data)
                    return func.responseHandler(res, 200, "Success.", data)
                }).catch(err => {
                    console.log("@@@@errrrrr====>>", err)
                    return func.responseHandler(res, 400, "Internal server error.")
                })
            }
        })

    },
    //  after Added ERC 20 token to user wallet and get current price of token...............................................................................
    tokenList: (req, res) => {
        // custom pagination..........................
        let m = req.body.limit || 10
        let n = req.body.page || 1
        // filter according to tokenName......................
        if (req.body.tokenName) {
            var query = {
                $and: [{
                    tokenName: {
                        $regex: new RegExp(req.body.tokenName, "ig")
                    }
                }, {
                    status: "ACTIVE"
                }]
            }
        } else {
            var query = {
                status: "ACTIVE"
            }
        }
        // get all data from db acc to filter......................
        console.log("hiiiii")
        token.find(query, {
            tokenAbi: 0,
            privatekey: 0,
            tokenDecimal: 0
        }).lean().exec((err, result) => {
            console.log("hiiiii", err, result)
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (result.length == 0) {
                return func.responseHandler(res, 200, "No token found.")
            } else {
                var counter = 0;
                each(result, (ele, next) => {
                    if (ele.tokenType === "ERC") {
                        counter++;
                        var getInfoUrl = "https://api.ethplorer.io/getTokenInfo/" + ele.contractAddress + "?apiKey=freekey"
                        func.nodeClient(getInfoUrl, (err1, result1) => {
                            // console.log("result1====>>",result1.price.rate,ele.contractAddress)
                            console.log("count==>>", counter, result.length, result1.price.rate)
                            ele['tokenPrice'] = result1.price.rate
                            //    final.push(ele)
                            console.log("result.length ===>>", result.length === counter)
                            if (result.length === counter) {
                                result = result.slice((n - 1) * m, n * m)
                                let final = {
                                    data: result,
                                    page: n,
                                    limit: m,
                                    total: result.length,
                                    pages: Math.ceil(result.length / m)
                                }
                                return func.responseHandler(res, 200, "Success.", final)
                            }
                            next();
                        })
                    } else {
                        counter++;
                        // console.log("count==>>",counter,result.length)
                        // console.log("result1.length ===>>",result.length === counter)   
                        if (result.length == counter) {
                            result = result.slice((n - 1) * m, n * m)
                            let final = {
                                data: result,
                                page: n,
                                limit: m,
                                total: result.length,
                                pages: Math.ceil(result.length / m)
                            }
                            return func.responseHandler(res, 200, "Success.", final)
                        }
                        next();
                    }
                })
            }
        })
    },



    test2: (req, res) => {
        var myAddress = "0xe39d11CFB90052aB1436a4E7f015b5d946365c74"
        var a = new web3.eth.getTransactionList(myAddress)
        console.log("a=====>>", a)
        web3.eth.getTransactionCount(myAddress).then(count => {
            console.log("count==>>", count)
            var contractAddress = "0xecEe3B21c619ABa75d5875aa47722E58DD858925"
            //  var tokenContract = new web3.eth.Contract(abiTRZA).at(0xecEe3B21c619ABa75d5875aa47722E58DD858925)//kit
            var tokenContract = new web3.eth.Contract(abi, contractAddress, {})
            console.log("tokenContract ==== >>>", tokenContract)
            // var tokenContract = new web3.eth.Contract(abi).at(0x024c7c50a7FD96338D1CdC1128365b02E6A1f39a)//trza
            // var tokenContract = new ETHEREUM_CLIENT.eth.Contract(abi).at(0xecEe3B21c619ABa75d5875aa47722E58DD858925)
            var decimal = tokenContract.decimals()
            // console.log("decimal=====>>>",decimal)
            // var balance = tokenContract.balanceOf(address)
            // console.log("balance=====>>>",balance)
            // var adjustedBalance = balance / Math.pow(10, decimal)
            // console.log("balance=====>>>",adjustedBalance)
            // var tokenName = tokenContract.name()
            // console.log("balance=====>>>",tokenName)
            // var tokenSymbol = tokenContract.symbol()
            // console.log("balance=====>>>",tokenSymbol)
        })
        // .catch(err=>{
        //     console.log("err==>>",err)
        // })


    }

}