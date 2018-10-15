const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const db = mongoose.connection;
let tokenList = mongoose.Schema({

    tokenName: {
        type: String

    },
    tokenImage: {
        type: String
    },
    tokenPrice: {
        type: Number,
        // match:'^[0-9]+$'
    },
    tokenAbi:{
        type:Object
    },
    tokenType:{
        type:String,
        enum:["OWN","ERC"],
        require:true
    },
    contractAddress: {
        type: String,      
    },
    quantity:{
        type:Number
    },
    tokenDecimal:{
        type:Number
    },
    ownerAddress:{
        type:String
    },
    privateKey:{
        type:String
    },
    withDrawFee:{       // show in admin panel and admin can edit this
        type:Number,
        default : 1000
    },
    status:{
        type:String,
        default:"ACTIVE",
        enum:["ACTIVE","DELETED"]
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
},
    {strict:false}  //create or add an extra key from front
)

tokenList.plugin(mongoosePaginate)
module.exports = mongoose.model('tokenList', tokenList, 'tokenList');
