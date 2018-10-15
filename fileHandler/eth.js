var Web3 = require('web3');
let func = require('./function.js')
let kyc = require('../models/kyc.js')
let user = require('../models/user.js')
let token = require('../models/tokenList')
let transactionHistory = require('../models/transactionHistory')
var CircularJSON = require('circular-json')
var async = require('async');
const numberToBN = require('number-to-bn');
let Tx = require('ethereumjs-tx');
var CoinMarketCap = require("node-coinmarketcap");
var coinmarketcap = new CoinMarketCap();
const currencyConvert = require('currency-convert')
var fs = require('fs');
let each = require('async-each-series')
var BigNumber = require('bignumber.js');
// var abiArray = JSON.parse(fs.readFileSync('abi.json', 'utf-8'));
// var abiTRZA = JSON.parse(fs.readFileSync('abiTRZA.json', 'utf-8'));
var abi = JSON.parse(fs.readFileSync('abi.json', 'utf-8'));
var abiArray = JSON.parse(fs.readFileSync('abiArray.json', 'utf-8'));
// console.log("abiArray====>>", abiArray.KITTOKEN)

/*  ................... ropston infura .....................*/
// var web3 = new Web3(Web3.givenProvider || 'https://mainnet.infura.io');
var web3 = new Web3(Web3.givenProvider || 'https://ropsten.infura.io/1c7b730f883e44f39134bc8a680efb9f');
// var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/1c7b730f883e44f39134bc8a680efb9f'));
var Accounts = require('web3-eth-accounts');
// var accounts = new Accounts('https://mainnet.infura.io/');
var accounts = new Accounts('https://ropsten.infura.io/');



module.exports = {

    /*=======================================================================================================================================================/     
    /                                            wallet create API                                                                                           /
    /=======================================================================================================================================================*/
    createWallet: (req, res) => {
        if (!req.body.password) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        func.bcrypt(req.body.password, (err, hashPassword) => { //bcrypt the password

            if (err)
                return func.responseHandler(res, 400, "Internal server error.")
            else {

                console.log("hashPassword=====>>", hashPassword)
                var privateKey = web3.eth.accounts.wallet.create(1, req.body.password) //create a wallet with address and privateKey
                console.log("privatekey--------------" + CircularJSON.stringify(privateKey))
                // console.log("=====length=====",privateKey.length)
                // console.log("result===",privateKey.length - 1)
                var objInfo = privateKey.length - 1;
                // console.log("@@@@@@",privateKey[objInfo]);
                // console.log("new account ===>",newaccount)
                console.log("=====address>>====", privateKey[objInfo].address)
                // console.log("=====privateKey>>====", privateKey[objInfo].privateKey)

                var obj = new user({
                    password: hashPassword,
                    address: privateKey[objInfo].address,
                    privateKey: privateKey[objInfo].privateKey

                })
                obj.save((err2, result2) => {
                    if (err2) {
                        return func.responseHandler(res, 400, "Internal server error2.", err2)
                    } else {
                        // console.log("result2=====",result2)
                        func.jwt(privateKey[0].privateKey, (err3, result3) => {
                            if (err3)
                                return func.responseHandler(res, 400, "Internal server error3.", err3)
                            else {
                                // console.log("result2=====", result2)
                                kyc.create({
                                    user_id: result2._id,
                                    userWalletAddress: result2.address
                                }, (err4, result4) => {
                                    if (err4) {
                                        return func.responseHandler(res, 400, "Internal server error4.", err4)
                                    } else {
                                        var resObj = { // make a object that send to in final response.......
                                            address: privateKey[objInfo].address,
                                            privateKey: privateKey[objInfo].privateKey,
                                            jwt: result3
                                        }

                                        return func.responseHandler(res, 200, "1) Do not lose it! It cannot be recovered if you lose it. 2) Do not share it! 3) Your funds will be stolen if you use this file on a malicious/phishing site. 4) Make a backup! 5)  Secure it like the millions of dollars it may one day be worth.", resObj)
                                    }
                                })
                            }
                        })

                    }
                })
            }

        })
    },
    // =========================================================================================================================================================================================

    getBalance: (req, res) => {
        web3.eth.getBalance(req.query.address).then((data) => {
            // console.log("getBalance function data--->>", data, web3.utils.fromWei(data, 'ether'))
            // console.log("data", data)
            coinmarketcap.multi(coins => {
                var oneDollar = coins.get("ETH").price_usd
                console.log("dollar@@@===>", oneDollar)
                // console.log("===@@@@@===", coins.get("ETH").price_usd); // Print price of ETH in USD
                var dollar = oneDollar * web3.utils.fromWei(data, 'ether')
                console.log("dollar===>>", dollar)
                var obj = {}
                obj.ethereum = web3.utils.fromWei(data, 'ether')
                obj.dollar = "$" + dollar;
                console.log("obj=====>>>", obj)
                return func.responseHandler(res, 200, "Success.", obj)
            });
        }).catch(err => {
            return err
        });
    },

    /**********************************************************************************************************************************************************************************************                                   
    /                                                 send KIT token to an ethereum address 
    /*********************************************************************************************************************************************************************************************/


    sendToken: (req, res) => {
        // console.log("req.body===>", req.body)
        if (!req.body.myAddress || !req.body.privateKey || !req.body.toAddress || !req.body.tokenName || !req.body.amount || !req.body.tokenAddress) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        var tokenName = req.body.tokenName
        // console.log("tokenName=====>>", tokenName)
        var myAddress = req.body.myAddress;
        var toAddress = req.body.toAddress;
        var decimal = req.body.decimal;
        var temp_amount = new BigNumber(req.body.amount);
        // console.log('temp amount is======>>>>>>', temp_amount);
        var amount = new BigNumber(req.body.amount).multipliedBy(new BigNumber(Math.pow(10, decimal)))
        var check_amount = amount;
        // console.log("amount===>>", amount)
        var amount = web3.utils.toHex(amount)
        // console.log("amount====>> after converting ===>> ", amount)
        var tokenAddress = req.body.tokenAddress
        user.findOne({
            address: req.body.myAddress,
            privateKey: req.body.privateKey
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error1.")
            } else if (!result) {
                return func.responseHandler(res, 400, "Invalid Credentials")
            } else {
                if (web3.utils.isAddress(req.body.toAddress)) {
                    web3.eth.getTransactionCount(myAddress).then(count => {
                        // console.log("count==>", count)
                        var privateKey = req.body.privateKey.split("0x")
                        var privatekey = privateKey[1]
                        // console.log("after split=======>", privateKey)
                        var privateKey = new Buffer(privatekey, 'hex');
                        var contractAddress = tokenAddress; // token address
                        var contract = new web3.eth.Contract(abi, contractAddress, {
                            from: myAddress
                        })
                        contract.methods.balanceOf(myAddress).call().then(function (balance) {
                            // console.log("@@@@@@balance===", balance)
                            let check_balance = balance;
                            var finalBalance = new BigNumber(balance).isGreaterThanOrEqualTo(new BigNumber(check_amount));
                            // console.log('Actual value is========>>>>>>>>', finalBalance);
                            // var balance = web3.utils.toHex(balance)
                            // console.log("amount=by body==>",amount)
                            // console.log("Actual balance===>",balance)


                            // console.log("checking true or false===,,",balance >= amount)
                            if (finalBalance) {
                                var rawTransaction = {
                                    "from": myAddress,
                                    "gasPrice": web3.utils.toHex(2 * 1e9),
                                    "gasLimit": web3.utils.toHex(210000),
                                    "to": contractAddress,
                                    "value": "0x0",
                                    "data": contract.methods.transfer(toAddress, amount).encodeABI(),
                                    "nonce": web3.utils.toHex(count)
                                }
                                // console.log("raw transaction ===>>>",rawTransaction)
                                var transaction = new Tx(rawTransaction)
                                transaction.sign(privateKey)
                                web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'), (err2, hash) => {
                                    // console.log("========err2===", err2, hash)
                                    if (err2) {
                                        // return func.responseHandler(res, 400, err2 + "", err2 + "")
                                        return func.responseHandler(res, 400, "insufficient funds")
                                    } else {
                                        var obj = transactionHistory({
                                            contractAddress: contractAddress,
                                            token: tokenName,
                                            transactionId: hash,
                                            transactionDate: Date.now(),
                                            walletAddress: myAddress,
                                            toAddress: toAddress,
                                            amount: req.body.amount,
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
                            } else {
                                // console.log("Insufficient balance")
                                return func.responseHandler(res, 400, "Insufficient Token")
                            }

                        }).catch(errBalance => {
                            // console.log(errBalance)
                            return func.responseHandler(res, 400, "Provide valid information.")
                        }

                        )
                    }).catch(err => {
                        // console.log("err===>>>", err)
                        return func.responseHandler(res, 400, "Provide valid information.", err)
                    })
                } else {
                    return func.responseHandler(res, 400, "Provide valid information.")
                }

            }
        })
    },

    /*=============================================================================================================================================================
    /                                                                      Ethereum BlockChain part                                                               /
    /                                                                Create All Ethereum functionality after CR                                                 /
    =============================================================================================================================================================*/
    getEthereumBalance: (req, res) => {
        getEthereumBalance(req.params.walletAddress, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.", err)
            } else {
                return func.responseHandler(res, 200, "Success.", result)
            }
        })
    },
    walletHistory: (req, res) => {
        console.log(req.body)
        if (!req.body.walletAddress || !req.body.status) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        var page = req.body.page || 1
        var limit = req.body.limit || 10
        walletHistory(req.body.walletAddress, req.body.status, limit, page, (err, result) => {
            console.log("=======>>>>", err, result)
            return func.responseHandler(res, 200, "Success.", result)
        })
    },
    // send ethereum from one wallet to another wallet..................................
    sendEthereum: (req, res) => {
        console.log("req.body====>", req.body)
        if (!req.body.toAddr || !req.body.fromAddr || !req.body.value) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        var a = web3.utils.isAddress(req.body.toAddr)
        if (a) {
            user.findOne({
                address: req.body.fromAddr
            }, (err, result) => {
                if (err) {
                    return func.responseHandler(res, 400, "Internal server error.", err)
                }
                else if (!result) {
                    return func.responseHandler(res, 400, "Please provide correct receiver address.")
                }
                else {
                    console.log("result from database====>>>", result)
                    // return;
                    sendEthereum(req.body.toAddr, req.body.fromAddr, req.body.value, result.privateKey, (err1, result1) => {
                        console.log("err,result====>>>", err1, result1)

                        if (err1) {
                            return func.responseHandler(res, 400, "Nonce too low.", err)
                        }
                        else  {
                                new transactionHistory({
                                    token:req.body.fromAddr,
                                    transactionId:result1

                                }).save()
                            
                            return func.responseHandler(res, 200, "Success.", result1)
                        }
                    })
                }
            })
        } else {
            return func.responseHandler(res, 400, "Please provide correct receiver address.")
        }

    }
}

/*==============================================================================================================================================================/
                                                                    There is a function section 
===============================================================================================================================================================/
/                                                             (1) Get Ethereum Balance function  
/ ==============================================================================================================================================================*/
var getEthereumBalance = (ethAddress, cb) => {
    web3.eth.getBalance(ethAddress).then((balance) => {
        console.log("bigNBUMBER", balance)
        var balance = Number(new BigNumber(balance).dividedBy(new BigNumber(Math.pow(10, 18))))
        cb(null, balance);
    }).catch(err => {
        cb(err)
    });
}
//  get all wallet transaction history from ethereum and using custom pagination...........
var walletHistory = (walletAddress, status, limit, page, cb) => {
    var walletAddress = walletAddress.toLowerCase()
    // custom pagination..........................
    let m = limit || 10
    let n = page || 1
    var finalArray = [];
    var historyUrl = "http://api-ropsten.etherscan.io/api?module=account&action=txlist&address=" + walletAddress + "&sort=asc"
    func.nodeClient(historyUrl, (err, result) => {
        if (err) {
            cb(err)
        } else {
            /* this condition is run when  get all transaction list with send and receive */
            if (!status || status == undefined || status == null || status == "All") {
                var finalArray1 = result.result.slice((n - 1) * m, n * m)
                let final = {
                    data: finalArray1,
                    page: n,
                    limit: m,
                    total: result.result.length,
                    pages: Math.ceil(result.result.length / m)
                }
                cb(null, final)
            }
            /* this condition is run when  get only sent transaction list */
            else if (status === "sent") {
                each(result.result, (ele, next) => {
                    if (ele.from == walletAddress) {
                        finalArray.push(ele)
                    }
                    next();
                }, (err) => {
                    if (err) {
                        throw err;
                    }
                    var finalArray1 = finalArray.slice((n - 1) * m, n * m)
                    let final = {
                        data: finalArray1,
                        page: n,
                        limit: m,
                        total: finalArray.length,
                        pages: Math.ceil(finalArray.length / m)
                    }
                    cb(null, final)
                })

            }
            /* this condition is run when  get only receive transaction list */
            else if (status == "receive") {
                console.log("in receive")
                each(result.result, (ele, next) => {
                    // console.log("in receive user",ele.to,walletAddress ,ele.to == walletAddress)
                    if (ele.to == walletAddress) {
                        finalArray.push(ele)
                        // console.log("ele", ele)
                    }
                    next();
                }, (err) => {
                    if (err) {
                        throw err
                    }
                    var finalArray1 = finalArray.slice((n - 1) * m, n * m)
                    let final = {
                        data: finalArray1,
                        page: n,
                        limit: m,
                        total: finalArray.length,
                        pages: Math.ceil(finalArray.length / m)
                    }
                    cb(null, final)
                })
            }
        }
    })
}


var sendEthereum = (toAddr, fromAddr, value, privateKey, cb) => {
    console.log("==========+>>>>>>>>>>>>>>>", toAddr, fromAddr, value, privateKey)
    var myKey = privateKey
    getBalance(fromAddr, (err, result) => {
        //   console.log(" err nd result ==>>",err,result)
        if (err) {
            // console.log("err in get balance function=====")
        } else {
            // console.log("=======>>>", myKey)
            myKey = myKey.split('0x')
            myKey = myKey[1]
            // console.log("=======>>>", myKey)
            myKey = new Buffer(myKey, 'hex');
            demo = new Buffer(myKey, 'hex');
            // console.log("=======>>>", myKey, value)
            var amount = new BigNumber(value).multipliedBy(new BigNumber(Math.pow(10, 18)));
            // console.log("amount===>>", amount)
            signTxn(toAddr, fromAddr, amount, myKey, (err, result) => {
                if (err) {
                    console.log("err in SIGNTXN function===", err)
                } else {
                    console.log("hi bro ", result)
                    web3.eth.sendSignedTransaction(result).then((receipt) => {
                        // console.log("receipt===>>", receipt.transactionHash)
                        cb(null, receipt.transactionHash)
                    }).catch(err => {
                        console.log("err=====>>@@@@@==>>>", err)
                        cb(err)
                    })
                    
                }
            })
        }
    })
}



getBalance = (address, cb) => {
    web3.eth.getBalance(address).then(amount => {
        console.log("calling get balancce function  amount==>>", amount)
        amount = new BigNumber(amount).dividedBy(new BigNumber(Math.pow(10, 18)))
        //   console.log("amountBigNo.==>>", amount)
        cb(null, amount)
    }).catch(err => {
        cb(null, err)
    })
}

signTxn = (toAddr, fromAddr, value, privateKey, cb) => {
    console.log("calling signTxn Method====>>", toAddr, fromAddr, value, privateKey)
    estGas(toAddr, fromAddr, value, (estmdGas) => {
        console.log("estmdGas is ====>>", estmdGas)
        getCurrentGasPrice((err, currentGasPrice) => {
            console.log("currentGasPrice====>>", currentGasPrice)
            getTxnCountForNonce(fromAddr, (hardCount) => {
                console.log("hard count===>>", hardCount)
                var rawTx = {
                    nonce: web3.utils.toHex(hardCount),
                    from: web3.utils.toHex(fromAddr),
                    gasPrice: web3.utils.toHex(20 * 1e9),
                    gas: web3.utils.toHex(21000),
                    to: web3.utils.toHex(toAddr),
                    value: web3.utils.toHex(value)
                }

                var tx = new Tx(rawTx);
                tx.sign(demo);
                let serializedTx = tx.serialize();
                // console.log("serializedTx", serializedTx)
                let cbData = '0x' + serializedTx.toString('hex')
                // console.log("cb Data is ", cbData)
                cb(null, cbData)
            })
        })
    })
}


estGas = (toAddr, fromAddr, value, cb) => {
    web3.eth.estimateGas({
        from: fromAddr,
        to: toAddr,
        value: value
    }).then((estmdGas) => {
        console.log(" Your estmdGas is ==>>", estmdGas)
        return cb(estmdGas)
    }).catch(err => {
        console.log("in err==>>", err)
    })
}

getCurrentGasPrice = (cb) => {
    web3.eth.getGasPrice().then((currentGasPrice) => {
        console.log("currentGasPrice===>>", currentGasPrice)
        cb(null, currentGasPrice)
    }).catch(err => {
        console.log("err in get current gas price")
        cb(null, err)
    })
}

getTxnCountForNonce = (addr, cb) => {
    web3.eth.getTransactionCount(addr)
        .then((count) => {
            return cb(count)
        }).catch(err => {
            console.log("err in get TXN for NONCE function")
            cb(null, err)
        });
}