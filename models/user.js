const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const db = mongoose.connection;
let User = mongoose.Schema({
     status:{
         type:String,
         default : "ACTIVE",
         enum :['ACTIVE','BLOCKED']
     },
    //  ERC:{
    //      type:[{}]
    //  },
    password: {
        type: String
    },
    address:{
        type:String
    },
    privateKey: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


User.plugin(mongoosePaginate)
module.exports = mongoose.model('user', User, 'user');