let ethRoutes=require('express').Router()
let ethHandler=require('../fileHandler/eth.js')
let func = require('../fileHandler/function.js')
let erc = require('../fileHandler/erc.js')


ethRoutes.get('/getBalance',func.jwtVerify,ethHandler.getBalance);
ethRoutes.post('/sendToken',func.jwtVerify,ethHandler.sendToken);
ethRoutes.post('/createWallet',ethHandler.createWallet);
ethRoutes.get('/getEthereumBalance/:walletAddress',ethHandler.getEthereumBalance);
ethRoutes.post('/walletHistory',ethHandler.walletHistory);
ethRoutes.post('/sendEthereum',ethHandler.sendEthereum);


//  only for SEND ERC
ethRoutes.post('/sendErc',func.jwtVerify,erc.sendErc);
ethRoutes.post('/test1',erc.test1);
module.exports=ethRoutes;