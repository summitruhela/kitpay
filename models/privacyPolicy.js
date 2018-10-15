const mongoose = require('mongoose');

var privacyPolicy=mongoose.Schema({
   
    policy:{
     type:String,
        default:null
    },
   
    createdAt:{
        type:Date,
        default:Date.now()
        }
});

privacyPolicyMgmt=mongoose.model('privacyPolicy',privacyPolicy,'privacyPolicy');
module.exports=privacyPolicyMgmt;

function init(){
    // console.log("privacyPolicyMgmt calling function")
    privacyPolicyMgmt.findOne({}, (error, success) => {
        if (error) {
            console.log(error)
        }
        else {        
            if (success===null) {
                new privacyPolicyMgmt({
                   
                    policy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare, nisl ut pulvinar varius, ex purus luctus metus, vitae fermentum lacus leo at quam. Donec finibus felis ut lorem iaculis consequat. Sed non dui ut lorem accumsan malesuada. Mauris efficitur ultrices elit, eget maximus elit accumsan quis. Sed ut dignissim lectus. Etiam vehicula orci at consectetur faucibus. Nullam tempus tincidunt fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras fringilla scelerisque justo, nec luctus diam vestibulum eu. Donec metus sem, tristique vel massa quis, luctus lobortis neque. Nullam augue lectus, maximus vel sollicitudin a, convallis eleifend risus. Praesent rhoncus feugiat felis in viverra. Maecenas nec felis ultricies, dignissim lorem in, auctor nisl. Morbi mi elit, tempor non accumsan a, faucibus eu purus. In fermentum congue sagittis. Vivamus non nibh sit amet risus aliquet lobortis.",
               
               
                 }).save((error, success) => {
                    console.log("Successfully Added privacy policy Content")
                })
    
            }
        }
    })
}

init();


