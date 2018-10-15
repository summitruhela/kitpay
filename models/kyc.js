const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const db = mongoose.connection;
let KYC = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,ref:'User'
    },
    userWalletAddress:{
        type:String,
        default:null
    },
    name :{
        type:String,
        default:null
    },
    email : {
        type:String,
        default:null
    },
    phoneNumber:{
        type:Number,
        default:null
    },
    country :{
        type:String,
        default:null
    },
    status:{
         type:String,
         default : "REQUEST",
         enum :['VERIFIED','REJECTED',"REQUEST"]
     },
    image :{
         type:String,
         default:null
    },
    otpPhone:{
        type:Number,
         default:null
    },
    otpEmail:{
        type:Number,
        default:null
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


KYC.plugin(mongoosePaginate)
module.exports = mongoose.model('kyc', KYC, 'kyc');
