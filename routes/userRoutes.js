const userRoutes = require('express').Router();
const mongoose = require('mongoose');
const userHandler = require('../fileHandler/userHandler.js')
const commonFile = require('../fileHandler/commonFile.js')
let func = require('../fileHandler/function.js')


userRoutes.get('/termAndService',userHandler.termAndService)
userRoutes.post('/login',userHandler.login)
userRoutes.get('/aboutUs',userHandler.aboutUs)
userRoutes.post('/contactUs',userHandler.contactUs)
userRoutes.get('/privacyPolicy',userHandler.privacyPolicy)
userRoutes.get('/totalCollection',func.jwtVerify,userHandler.totalCollection)
userRoutes.post('/transactionHistory',func.jwtVerify,userHandler.transactionHistory)
userRoutes.post('/addTransactionHistory',func.jwtVerify,userHandler.addTransactionHistory)
userRoutes.post('/searchListToken',func.jwtVerify,userHandler.searchListToken)
userRoutes.post('/purchaseToken',func.jwtVerify,userHandler.purchaseToken)
userRoutes.get('/paySuccess',func.jwtVerify,userHandler.paySuccess)
userRoutes.post('/payCancel',func.jwtVerify,userHandler.payCancel)
userRoutes.post('/tokenPurchaseSuccess',func.jwtVerify,userHandler.tokenPurchaseSuccess)
userRoutes.post('/test',userHandler.test)
userRoutes.post('/test1',userHandler.test1)


module.exports = userRoutes;

