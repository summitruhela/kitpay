const user = require('./userHandler.js')
const User = require('../models/user.js')

module.exports = {
    signUp:(query, callback) => {
        // console.log("query===",query.privateKey)
        User.findOne({ privateKey:query.privateKey }, (err, result) => {
            // console.log("errrrrrrr",err,result)
            if(err){
                callback(err)
            }
            else if(result){
                callback(null, result)
            }
            else{
                
                var user = new User(query)
                user.save((err, success)=>{
                    console.log("success",success)
                    callback(err, success)
                })
            }
        })
    },

}