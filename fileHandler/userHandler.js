let user = require('../models/user.js')
let kyc = require('../models/kyc.js')
let termAndService = require('../models/termAndService')
let token = require('../models/tokenList')
let aboutUs = require('../models/aboutUs')
let ContactUs = require('../models/contactUs')
let tokenPurchase = require('../models/tokenPurchase')
let transactionHistory = require('../models/transactionHistory')
let privacyPolicy = require('../models/privacyPolicy')
let service = require('./service.js')
let func = require('./function.js')
let admin = require('../models/admin.js')
let paypal = require('paypal-rest-sdk');
// let commonFile = require('./commonFile.js')
mongoose = require('mongoose')

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AcUREEH4_TyW7GhJpxgYJr4y_ZuUJjdDj5W2s9Xw9HfFPIqoAyAOoqnImwKkhip1sE0adS5mFnzH_gxp',
    'client_secret': 'EILre6KQCv0c9fyzDW443JeAP337VwVmB-1bmLzvW75JES6tHD5TxPiupAbBuDaYx-UuTy805suJ_HUL',
    /*anuj7570218
    singhanurag400@gmail.com
password: Suneeta@143
    */
    // 'client_id':'AXRHJ0-YL0WibOOPajvkiwNO1ISDjJGWstj4HDldg51Ig3Z69nkcwkmliD7p3c0w_YjVvIgzAkeAC_Kk',//anurag singh
    // 'client_secret':'EKeB2Ig75_1bYM3RxA_CWLp-fL_sGMmOl-IPK6PjOd3-BU710EQeKqTp6Hp9kxE4WWS8ICyrYGAwtmji'
});

module.exports = {
    //    =============================  Term and services api  ===================================================================
    termAndService: (req, res) => {
        termAndService.find({}, (err, result) => {
            if (err)
                throw err
            else {
                return func.responseHandler(res, 200, "You static content.", result)
            }
        })
    },
    //    =============================  About Us Api  ==========================================================================
    aboutUs: (req, res) => {
        aboutUs.find({}, (err, result) => {
            if (err)
                throw err
            else {
                return func.responseHandler(res, 200, "You static content.", result)
            }
        })

    },


    //    =====================================================  Contact Us Api  ====================================================================================================
    contactUs: (req, res) => {
        console.log("coming in contact us")
        if (!req.body.email || !req.body.name || !req.body.message) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        var obj = new ContactUs({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        /*
          save function................
                      new ContactUs({
                       name:req.body.name,
                       email:req.body.email,
                       message:req.body.message
                   }).save()
 
        */
        obj.save((err, result) => {
            if (err) {
                console.log("in err")
                return func.responseHandler(res, 400, "Internal server error.")
            } else {
                console.log("in success")
                return func.responseHandler(res, 200, "You post has been successfully saved.")
            }
        })


    },


    //    =============================  Privacy policy Api  ==========================================================================

    privacyPolicy: (req, res) => {
        privacyPolicy.findOne({}, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else {
                return func.responseHandler(res, 200, "These are privacy policy of website.", result)
            }
        })
    },


    //    =============================  Login Api  ==========================================================================
    login: (req, res) => {
        if (!req.body.privateKey || !req.body.password) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        user.findOne({
            privateKey: req.body.privateKey,
        }, (err, result) => {
            if (err)
                return func.responseHandler(res, 400, "Internal server error.")
            else if (result) {
                if (result.status == "BLOCKED") {
                    return func.responseHandler(res, 401, "You are Blocked by admin.")
                } else {
                    console.log("result====", JSON.stringify(result.password))
                    func.bcryptVerify(req.body.password, result.password, (err1, result1) => {
                        console.log("result1==========", result1)
                        if (err) {
                            return func.responseHandler(res, 400, "Internal server error1.")
                        } else if (result1 == false) {
                            return func.responseHandler(res, 400, "Invalid Credentials.")
                        } else {
                            func.jwt(req.body.privateKey, (err_, result_) => {
                                if (err_)
                                    return func.responseHandler(res, 400, "Internal server error2.")
                                else {

                                    var result_1 = {
                                        jwt: result_,
                                        address: result.address
                                    }
                                    return func.responseHandler(res, 200, "You have successfully login.", result_1)
                                }
                            })
                        }
                    })
                }

            } else {
                console.log("in last else")
                return func.responseHandler(res, 401, "Invalid Credentials.")
            }
        })
    },

    //  =================================       Total Collection Api      =====================================================================
    totalCollection: (req, res) => {
        token.find({}, (err, result) => {
            console.log("result====", result.length)
            if (err) {
                return func.responseHandler(res, 400, "Internal Server Error")
            } else if (!result.length) {
                var total = 0
                return func.responseHandler(res, 200, "user not found", total)
            } else {
                var tokenAmount = 0;
                var numberOfToken = 0;
                // console.log("result======>>>"+JSON.stringify(result[0]))
                for (var i = 0; i < result.length; i++) {
                    tokenAmount = tokenAmount + result[i].tokenAmount
                    numberOfToken = numberOfToken + result[i].numberOfToken
                }
                var result = {
                    tokenAmount: tokenAmount,
                    numberOfToken: numberOfToken
                }
                return func.responseHandler(res, 200, "Success", result)
            }
        })
    },


    /*=====================================================================================================================================================/
    /                                                     This Api is for Teransaction History                                                             /               /
    /                                               In this api Date always from front in Time stamps                                                      /
    /                                  there are some filters in this api(fromDate , toDate , receive ,sent , all)                                         /
    /=====================================================================================================================================================*/
    transactionHistory: (req, res) => {
        console.log("req.body data======>>>", req.body)
        if (!req.body.walletAddress)
            return func.responseHandler(res, 401, "Parameters missing.")
        let options = {
            page: req.body.page || 1,
            limit: 10,
            sort: {
                createdAt: -1
            }
        }
        var fromDate = new Date(req.body.fromDate)
        console.log("fromDate==>>", fromDate)
        fromDate = fromDate.setHours(0, 0, 0, 0)
        console.log("fromDate==>>", fromDate)
        var toDate = new Date(req.body.toDate)
        toDate = toDate.setHours(23, 59, 59, 999)
        console.log("REQ.BODY status===", req.body.status)
        //    console.log("REQ.BODY===token name ", req.body.coinName)
        console.log("REQ.BODY===", req.body.fromDate)
        console.log("REQ.BODY===", req.body.toDate)
        console.log("from date===", fromDate)
        console.log("toDate date===", toDate)
        
                                              /* when status is All . */

        if (req.body.status === "all" || req.body.status == undefined) {

            console.log("==in all filter =========")
            //    when no filter work instead of Status (All)..................
            if ((req.body.tokenName == undefined || req.body.tokenName == null) && (req.body.fromDate == undefined || req.body.toDate == undefined)) {
                console.log("==in all filter =====1111====")
                var query = {
                    walletAddress: req.body.walletAddress,
                    // status:"sent"
                }
            }
            //    when user want coinName filter .................
            else if ((req.body.fromDate == undefined && req.body.toDate == undefined) && (req.body.tokenName != undefined)) {
                console.log("==in all filter ===2222======")
                var query = {
                    $and: [{
                        walletAddress: req.body.walletAddress
                    }, {
                        token: {
                            $regex: new RegExp(req.body.tokenName, "ig")
                        }
                    }]

                }
            }
            //    when user want fromDate and toDate filter ..............
            else if (((req.body.fromDate != undefined && req.body.toDate != undefined) && (req.body.tokenName == undefined) && (req.body.tokenName == null))) {
                console.log("==in all filter ====3333=====")
                var query = {
                    $and: [{
                        walletAddress: req.body.walletAddress
                    }, {
                        transactionDate: {
                            $gte: fromDate,
                            $lte: toDate
                        }
                    }]
                }
            } else {
                //     when there is all filter works like as coinName , from Date , to Date.............
                console.log("==in all filter ==4444=======")
                var query = {
                    $and: [{
                        walletAddress: req.body.walletAddress
                    }, {
                        transactionDate: {
                            $gte: fromDate,
                            $lte: toDate
                        }
                    }, {
                        token: {
                            $regex: new RegExp(req.body.tokenName, "ig")
                        }
                    }]
                }

            }

        }
        // =======================================================================================================================================================================================================================
        //     when status is send / receive ...............................................................................................................................
        else if (req.body.status == "sent" || req.body.status == "receive") {
            console.log("======in send or receive filter =======")
            //    when no filter work instead of Status (send/receive)..................
            if ((req.body.tokenName == undefined) && (req.body.fromDate == undefined) && (req.body.toDate == undefined)) {
                console.log("====in send/receive ==111=====")
                var query = {
                    walletAddress: req.body.walletAddress,
                    status: req.body.status
                }
            }
            //    when user want coinName filter .................
            else if ((req.body.fromDate == undefined) && (req.body.toDate == undefined) && (req.body.tokenName != undefined)) {
                var query = {
                    $and: [{
                        walletAddress: req.body.walletAddress
                    }, {
                        status: req.body.status
                    }, {
                        token: {
                            $regex: new RegExp(req.body.tokenName, "ig")
                        }
                    }]
                }
            }
            //    when user want fromDate and toDate filter ..............
            else if ((req.body.fromDate != undefined) && (req.body.toDate != undefined) && (req.body.tokenName == undefined)) {
                var query = {
                    $and: [{
                        walletAddress: req.body.walletAddress
                    }, {
                        status: req.body.status
                    }, {
                        transactionDate: {
                            $gte: fromDate,
                            $lte: toDate
                        }
                    }]
                }
            } else {
                //     when there is all filter works like as coinName , from Date , to Date ,status.............
                var query = {
                    $and: [{
                        walletAddress: req.body.walletAddress
                    }, {
                        status: req.body.status
                    }, {
                        transactionDate: {
                            $gte: fromDate,
                            $lte: toDate
                        }
                    }, {
                        token: {
                            $regex: new RegExp(req.body.tokenName, "ig")
                        }
                    }]
                }
            }
        }
        // console.log("query====",query)
        transactionHistory.paginate(query, options, (err, result) => {
            console.log("arrr=========>>>>>>", )
            if (err)
                return func.responseHandler(res, 400, "Internal server error.")
            else if (result.length < 1) {
                return func.responseHandler(res, 200, "Not found")
            } else {
                console.log("result======>>>", result)
                return func.responseHandler(res, 200, "Success", result)
            }
        })
    },

    /*=====================================================================================================================================================/
    /                                                     This Api is for searching Token on Home Page                                                     /               /
    /               These tokens are added by admin panel , there are two types of token Own smart contract and All ERC Tokens                             /
    /                                                        User can only search by token Name                                                            /
    /=====================================================================================================================================================*/
    searchListToken: (req, res) => {
        let options = {
            select: "-tokenAbi -tokenDecimal",
            page: req.body.page || 1,
            limit: 10,

        }
        // when get only admin own token
        if (req.body.tokenType == null || req.body.tokenType == undefined) {
            console.log("111111")
            if (req.body.tokenName) {
                var query = {
                    $and: [{
                        tokenName: {
                            $regex: new RegExp(req.body.tokenName, "ig")
                        },
                    }, {
                        status: "ACTIVE"
                    }]
                }
            } else {
                var query = {
                    $and:[{status: "ACTIVE"}]
                }
            }
        }
        // when get only ERC token
        else {
            console.log("2222222")
            if (req.body.tokenName) {
                var query = {
                    $and: [{
                        tokenType: "OWN"
                    }, {
                        tokenName: {
                            $regex: new RegExp(req.body.tokenName, "ig")
                        },
                    }, {
                        status: "ACTIVE"
                    }]
                }
            } else {
                console.log("33333")
                var query = {
                    $and:[{status: "ACTIVE",tokenType:"OWN"}]
                    
                }
            }
        }

        // console.log("query=====")
        token.paginate(query, options, (err, result) => {
            console.log("result lentgh", result)
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (result.total < 1) {
                return func.responseHandler(res, 200, "No Token Found", result)
            } else {
                // console.log("result======>>>",result);
                return func.responseHandler(res, 200, "Success", result)
            }
        })
    },

    // ================================== ADMIN API   add information of transaction ======================================================================

    addTransactionHistory: (req, res) => {
        var obj = new transactionHistory({
            status: req.body.status,
            coin: req.body.coinName,
            transactionDate: Date.now(),
            transactionId: req.body.transactionId,
            //   privateKey : req.body.privateKey
        })
        obj.save((err, result) => {
            if (err)
                throw err
            else {
                return func.responseHandler(res, 200, "Success", result)
            }
        })
    },
    /*=====================================================================================================================================================/
    /                                                     This Api is for paypal payment                                                                   /
    /               This method generate a link for payment and this link give to front End and link directly open the paypal payment page                 /
    /                                In payal there are 3 apis (1) purchase Topken (2) Pay success (3) Pay cancel                                          /                                                                                 /
    /=====================================================================================================================================================*/
    purchaseToken: (req, res) => {
        console.log("req.body====>>", req.body)
        var create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://172.16.6.183:1412/user/paySuccess",
                "cancel_url": "http://172.16.6.183:1412/user/payCancel"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "item",
                        "sku": "item",
                        "price": req.body.price,
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": req.body.price
                },
                "description": "This is the payment description."
            }]
        };

        paypal.payment.create(create_payment_json, (error, payment) => {
            if (error) {
                console.log("Error==in paypal link create=====>", error)
                throw error;
            } else {
                // console.log("Create Payment Response");
                console.log(payment);
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === 'approval_url') {
                        console.log("payment link----->", payment.links[i].href);
                        return func.responseHandler(res, 200, "Success", payment)

                    }
                }
            };
        })
    },

    // 2) Second Method ===============================================When paypal transaction is success ======================================================
    paySuccess: (req, res) => {
        console.log("in paypal succes=====>>>")
        const PayerID = req.query.PayerID;
        const payment_Id = req.query.paymentId;
        console.log("Query Data==========>>", req.query)
        const execute_payment_json = {
            "payerid": PayerID,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "50.00"
                }
            }]
        };
        var paymentId = payment_Id

        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                console.log(error);
                return func.responseHandler(res, 400, "Transaction is cancelled", error)

            } else {
                console.log(JSON.stringify(payment));
                res.send({
                    responceCode: 200,
                    responceMessage: "this is the payment gateway ",
                    payment
                })
            }
        });
    },
    //3 Third Method) ==================================================== PaYPAL When Transaction is Cancel  =================================================
    payCancel: (req, res) => {

        console.log("cancel transaction ---->")
        return func.responseHandler(res, 400, "Transaction is cancelled")

    },

    /*=====================================================================================================================================================/
    /                    This Api call when payment is done by the user (Method return payerId,transaction Amount,orderiD etc.)                            /
    /                                                                                                                                                      /
    /                   paypal form front End when payment is success_____ and show in admin panel in Transaction Details / management                     /
    /=====================================================================================================================================================*/
    tokenPurchaseSuccess: (req, res) => {
        if (!req.body.tokenName || !req.body.paymentId || !req.body.userWalletAddress || !req.body.tokenAddress || !req.body.numberofToken)
            return func.responseHandler(res, 401, "Parameters missing.")
        var obj = new tokenPurchase({
            tokenAddress: req.body.tokenAddress,
            tokenName: req.body.tokenName,
            userWalletAddress: req.body.userWalletAddress,
            payerId: req.body.payerId,
            amount: req.body.amount,
            paymentToken: req.body.paymentToken,
            orderId: req.body.orderId,
            paymentId: req.body.paymentId,
            numberofToken: req.body.numberofToken

        })
        obj.save((err, result) => {
            if (err)
                return func.responseHandler(res, 400, "Internal server error.")
            else {
                return func.responseHandler(res, 200, "Successfully added payment information. Admin will send you token .", result)
            }
        })
    },
 
    /*=====================================================================================================================================================/
    /                                                 These all are testing function                                                                       /
    /=====================================================================================================================================================*/
    test: (req, res) => {
        func.sendMessage(8273242159, "otp", (err, result) => {
            if (err) {
                console.log("err====>>>", err)
            } else {
                console.log("result====>>>", result)
            }
        })

    },

    test1: (req, res) => {
        var number = '9918777723'
        func.sendMessageNexmo(number, (err, result) => {
            if (err) {
                console.log("err=====>>")
            } else {
                console.log("result=====>>")
            }
        })

    }
}


