const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
let Schema = mongoose.Schema;

let transactionSchema = new Schema({
	contractAddress:{
		type:String
	},
	token: {
		type: String
	},
	transactionId: {
		type: String
	},
	transactionDate: {
		type: Date,
		default: Date.now
	},
	walletAddress: {
		type: String
	},
	privateKey:{
		type:String
	},
	status: {
		type: String,
		enum: ["sent", "receive"]
	},
	fromAddress:{
		type:String
	},
	toAddress:{
		type:String
	},
	amount:{
		type:String,
	},
	addressType:{
		type:String,
		default:"token"
	},
	createdAt: {
		type: Date,
		default: Date.now()
	}
})

transactionSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('transactions', transactionSchema, 'transactions')