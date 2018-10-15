const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
let Schema = mongoose.Schema;

let tokenPurchase = new Schema({

    tokenAddress: {
        type: String
    },
    tokenName: {
        type: String
    },
    userWalletAddress: {
        type: String
    },
    amount: {
        type: Number
    },
    paymentToken: {
        type: String
    },
    orderId: {
        type: String
    },
    paymentId: {
        type: String
    },
    payerId:{
        type:String
    },
    numberofToken: {
        type: Number
    },
    // generate when admin transfer the token  to user wallet
    txHash:{
     type:String,
     default:null
    },
    action:{
        type:String,
        enum:["Request","Complete","Reject"],
        default: "Request"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
tokenPurchase.plugin(mongoosePaginate)
module.exports = mongoose.model('tokenPurchase', tokenPurchase, 'tokenPurchase')