let adminRoutes=require('express').Router()
let adminHandler=require('../fileHandler/adminHandler.js')
let func = require('../fileHandler/function.js')
adminRoutes.post('/login',adminHandler.login);

adminRoutes.post('/addToken',func.jwtVerify,adminHandler.addToken);  //add jwt...
adminRoutes.post('/updateTermAndService',func.jwtVerify,adminHandler.updateTermAndService);
adminRoutes.post('/updateAboutUs',func.jwtVerify,adminHandler.updateAboutUs);
adminRoutes.post('/updatePolicy',func.jwtVerify,adminHandler.updatePolicy);
adminRoutes.post('/changePasswordOfAdmin',func.jwtVerify,adminHandler.changePasswordOfAdmin)
adminRoutes.post('/forgotPassword',adminHandler.forgotPassword)
adminRoutes.post('/userManagement',func.jwtVerify,adminHandler.userManagement)
adminRoutes.post('/changePasswordOfUser',func.jwtVerify,adminHandler.changePasswordOfUser)
adminRoutes.post('/sweepPaperWallet',func.jwtVerify,adminHandler.sweepPaperWallet)
adminRoutes.post('/blockUserByAdmin',func.jwtVerify,adminHandler.blockUserByAdmin)
adminRoutes.get('/totalRegistereduser',func.jwtVerify,adminHandler.totalRegistereduser)
adminRoutes.get('/activeUsers',func.jwtVerify,adminHandler.activeUsers)
adminRoutes.get('/totalBlockedUser',func.jwtVerify,adminHandler.totalBlockedUser)
adminRoutes.get('/numberOfTokens',func.jwtVerify,adminHandler.numberOfTokens)
adminRoutes.get('/numberOfTransaction',func.jwtVerify,adminHandler.numberOfTransaction)
adminRoutes.get('/totalTransactions',func.jwtVerify,adminHandler.totalTransactions)
adminRoutes.get('/myProfile',func.jwtVerify,adminHandler.myProfile)
adminRoutes.post('/myProfileEdit',func.jwtVerify,adminHandler.myProfileEdit)
adminRoutes.post('/walletManagement',func.jwtVerify,adminHandler.walletManagement)
adminRoutes.post('/withDrawFee',func.jwtVerify,adminHandler.withDrawFee)
adminRoutes.post('/editWithDrawFee',func.jwtVerify,adminHandler.editWithDrawFee)
adminRoutes.post('/viewTokenInfo',func.jwtVerify,adminHandler.viewTokenInfo)
adminRoutes.post('/deleteToken',func.jwtVerify,adminHandler.deleteToken)
adminRoutes.post('/transactionDetails',func.jwtVerify,adminHandler.transactionDetails)
adminRoutes.post('/payToken',func.jwtVerify,adminHandler.payToken)
adminRoutes.get('/totalCoins',func.jwtVerify,adminHandler.totalCoins)
adminRoutes.post('/show_token_balance',func.jwtVerify,adminHandler.show_token_balance)
adminRoutes.post('/payInfo',func.jwtVerify,adminHandler.payInfo)
adminRoutes.post('/rejectRequest',func.jwtVerify,adminHandler.rejectRequest)
adminRoutes.post('/tokenList',adminHandler.tokenList)

adminRoutes.post('/resetPassword',adminHandler.resetPassword)
adminRoutes.post('/test2',adminHandler.test2)



module.exports=adminRoutes;