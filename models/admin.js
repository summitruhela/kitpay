const mongoose = require('mongoose');
const commonFile = require('../fileHandler/commonFile.js')
const db = mongoose.connection;
let func = require('../fileHandler/function.js')

let Admin = mongoose.Schema({

    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    name: {
        type: String
    },
    gender: {
        type: String,
        enum:["Male","Female"],
        default:"Male"
    },
    profilePic: {
        type: String
    },
    address: {
        type:String,
        default:"delhi"
       
    },
    phoneNumber: {
        type: Number
    },
    DOB:{
        type:String,
        default:Date.now
    },
    ran_No_pass: {
        type: Number,
        default: 131313
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})
let AdminModel = mongoose.model('admin', Admin, 'admin');

module.exports = AdminModel

AdminModel.findOne({}, (error, success) => {
    if (error) {
        console.log(error)
    } else {
        if (!success) {
            func.bcrypt("Mobiloitte1", (err, password) => {
                if (err)
                    console.log(err)
                else {
                    new AdminModel({
                        email: "ph-anuj@mobiloitte.com",
                        password: password,
                        name: "Anuj",
                        phoneNumber: "8273242159",
                        profilePic: "http://eadb.org/wp-content/uploads/2015/08/profile-placeholder.jpg"
                    }).save((error, success) => {
                        console.log("Successfully Added Admin")
                    })
                }
            })
        }
    }
})