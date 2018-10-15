let token = require('../models/tokenList')
let func = require('./function.js')
let user = require('../models/user')
var Web3 = require('web3');
// var web3 = new Web3(Web3.givenProvider || 'https://mainnet.infura.io');
var web3 = new Web3(Web3.givenProvider || 'https://ropsten.infura.io/1c7b730f883e44f39134bc8a680efb9f');
var fs = require('fs');
// var abiArray = JSON.parse(fs.readFileSync('abi.json', 'utf-8'));
var BigNumber = require('bignumber.js');
let Tx = require('ethereumjs-tx');
const numberToBN = require('number-to-bn');
var Accounts = require('web3-eth-accounts');
var accounts = new Accounts('https://ropsten.infura.io/');
// var accounts = new Accounts('https://mainnet.infura.io/');
let transactionHistory = require('../models/transactionHistory')

module.exports = {
    sendErc: (req, res) => {
        console.log("req.body=====>>>",req.body)
        var amount = Number(new BigNumber(req.body.amount));
        if (!req.body.myAddress || !req.body.privateKey || !req.body.toAddress || !req.body.amount || !req.body.tokenAddress) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        user.findOne({
            address: req.body.myAddress,
            privateKey: req.body.privateKey
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error1.")
            } else if (!result) {
                return func.responseHandler(res, 400, "Invalid Credentials")
            } else {
                token.findOne({
                    contractAddress: req.body.tokenAddress
                }, (err1, result1) => {
                    if (err1) {
                        return func.responseHandler(res, 400, "Internal server error2.")
                    } else if (!result1) {
                        return func.responseHandler(res, 404, "No contract found")
                    } else {
                        var tokenName = result1.tokenName
                        var myAddress = req.body.myAddress
                        // console.log("my address1 ====>>",myAddress)
                        var contractAddress = result1.contractAddress
                        // console.log("my address2 ====>>",contractAddress)
                        var abi = result1.tokenAbi
                        // console.log("abi====>>",abi)
                        var decimal = result1.tokenDecimal
                        // console.log("my address3 ====>>",decimal)
                        var privateKey = req.body.privateKey.split("0x")
                        // console.log("my address4 ====>>",privateKey)
                        var privatekey = privateKey[1]
                        // console.log("my address5 ====>>",privatekey)
                        var privateKey = new Buffer(privatekey, 'hex');
                        // console.log("my address6 ====>>",privateKey)
                        // console.log("====== All is well ")
                        if (web3.utils.isAddress(req.body.toAddress)) {
                            web3.eth.getTransactionCount(myAddress).then(count => {
                                console.log("count==>", count)
                                // console.log(" balance  ==========>>>>>",abi , myAddress)
                                // var contract = new web3.eth.Contract(abiArray, contractAddress, {
                                var contract = new web3.eth.Contract(abi, contractAddress)
                            //    console.log("contract instance  ==========>>>>>",contract)                              
                                contract.methods.balanceOf(myAddress).call().then(balance => {
                                    console.log("balance ======>>>", balance)
                                    var temp_amount = new BigNumber(req.body.amount);
                                    // console.log('temp amount is======>>>>>>', temp_amount);
                                    var amount = new BigNumber(req.body.amount).multipliedBy(new BigNumber(Math.pow(10, decimal)))
                                    var check_amount = amount;
                                    // console.log("amount===>>", amount)
                                    var amount = web3.utils.toHex(amount)
                                    // console.log("amount====>> after converting ===>> ", amount)
                                    var finalBalance = new BigNumber(balance).isGreaterThanOrEqualTo(new BigNumber(check_amount));
                                    console.log("final balance ====>>", finalBalance)
                                    if (finalBalance) {
                                        // console.log("final balance1111")
                                        var toAddress = req.body.toAddress
                                        var rawTransaction = {
                                            "from": myAddress,
                                            "gasPrice": web3.utils.toHex(20 * 1e9),
                                            "gasLimit": web3.utils.toHex(210000),
                                            "to": contractAddress,
                                            "value": "0x0",
                                            "data": contract.methods.transfer(toAddress, amount).encodeABI(),
                                            "nonce": web3.utils.toHex(count)
                                        }
                                        console.log("final balance222", rawTransaction)
                                        var transaction = new Tx(rawTransaction)
                                        transaction.sign(privateKey)
                                        web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'), (err2, hash) => {
                                            console.log("generating hash 111111====>", hash)
                                            if(err2){
                                                console.log("err2======>>",err2)
                                                return func.responseHandler(res,400, "Intrinsic gas too low.")
                                            }
                                            else{
                                                var obj = transactionHistory({
                                                    contractAddress: contractAddress,
                                                    token: tokenName,
                                                    transactionId: hash,
                                                    transactionDate: Date.now(),
                                                    walletAddress: myAddress,
                                                    toAddress: toAddress,
                                                    amount: Number(new BigNumber(req.body.amount)),
                                                    status: "sent"

                                                })
                                                var obj1 = transactionHistory({
                                                    contractAddress: contractAddress,
                                                    token: tokenName,
                                                    transactionId: hash,
                                                    transactionDate: Date.now(),
                                                    walletAddress: toAddress,
                                                    fromAddress: myAddress,
                                                    amount: req.body.amount,
                                                    status: "receive"

                                                })
                                                console.log("HI")
                                                obj.save((err1, result) => {
                                                    if (err1) {
                                                        return func.responseHandler(res, 400, "Internal server error2.", err1)
                                                    } else {
                                                        obj1.save((err2, result2) => {
                                                            if (err2) {
                                                                return func.responseHandler(res, 400, "Internal server error3.", err2)
                                                            } else {
                                                                return func.responseHandler(res, 200, "Success", hash)
                                                            }

                                                        })
                                                    }
                                                })
                                            }
                                           
                                        })
                                    }
                                    else{
                                        return func.responseHandler(res, 400, "You have don't have such amount to sent.")       
                                    }
                                }).catch(err => {
                                    return func.responseHandler(res, 400, "Can't fetch amount from etherscan.", err)
                                })
                            }).catch(err => {
                                return func.responseHandler(res, 400, "Can't get transaction count.", err)
                            })
                        } else {
                            return func.responseHandler(res, 400, "Please provide valid contract address.")
                        }
                    }
                })

            }
        })
    },

    test1: (req, res) => {
        // console.log("final balance1111")
        // var myAddress = req.body.myAddress || ""
        // console.log("check 1 ===", myAddress)
        // var contractAddress = req.body.tokenAddress || "0x722dd3F80BAC40c951b51BdD28Dd19d435762180"
        // console.log("check 2 ===", contractAddress)
        // var toaddress = req.body.toAddress
        // console.log("check 3 ===", toaddress)
        // var contract = new web3.eth.Contract(abi, contractAddress, {
        //     from: myAddress
        // })
        // var rawTransaction = {
        //     "from": myAddress,
        //     "gasPrice": web3.utils.toHex(2 * 1e9),
        //     "gasLimit": web3.utils.toHex(210000),
        //     "value": "0x0",
        //     "to": contractAddress,
        //     "data": contract.methods.transfer(toAddress, amount).encodeABI(),
        //     "nonce": web3.utils.toHex(count)
        // }
        // console.log("final balance222", rawTransaction)
        // var transaction = new Tx(rawTransaction)
        // transaction.sign(privateKey)
        // web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'), (err2, hash) => {
        //     console.log("generating hash ====>", hash)
        // })
 
        

 
    }
}

