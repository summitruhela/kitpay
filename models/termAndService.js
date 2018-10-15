const mongoose = require('mongoose');

let termsAndServices=mongoose.Schema({
   
    terms:{
        type:String,
        default:null
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

});

let termsAndServicesMgmt=mongoose.model('termsAndServices',termsAndServices,'termsAndServices');
module.exports=termsAndServicesMgmt;

termsAndServicesMgmt.findOne({}, (error, success) => {
    if (error) {
        console.log(error)
    }
    else {        
        if (success===null) {
            new termsAndServicesMgmt({
               
                terms:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare, nisl ut pulvinar varius, ex purus luctus metus, vitae fermentum lacus leo at quam. Donec finibus felis ut lorem iaculis consequat. Sed non dui ut lorem accumsan malesuada. Mauris efficitur ultrices elit, eget maximus elit accumsan quis. Sed ut dignissim lectus. Etiam vehicula orci at consectetur faucibus. Nullam tempus tincidunt fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras fringilla scelerisque justo, nec luctus diam vestibulum eu. Donec metus sem, tristique vel massa quis, luctus lobortis neque. Nullam augue lectus, maximus vel sollicitudin a, convallis eleifend risus. Praesent rhoncus feugiat felis in viverra. Maecenas nec felis ultricies, dignissim lorem in, auctor nisl. Morbi mi elit, tempor non accumsan a, faucibus eu purus. In fermentum congue sagittis. Vivamus non nibh sit amet risus aliquet lobortis.",
           
           
             }).save((error, success) => {
                console.log("Successfully Added Term and Service Content")
            })

        }
    }
})

// mongoose.model('staticContent',StaticContent,'staticContent').findOne({},(err,result)=>{
//     if(err)
//     console.log("errrrrrr")
//     else if(result == null){
//         var data ={
//          termsAndServices:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare, nisl ut pulvinar varius, ex purus luctus metus, vitae fermentum lacus leo at quam. Donec finibus felis ut lorem iaculis consequat. Sed non dui ut lorem accumsan malesuada. Mauris efficitur ultrices elit, eget maximus elit accumsan quis. Sed ut dignissim lectus. Etiam vehicula orci at consectetur faucibus. Nullam tempus tincidunt fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras fringilla scelerisque justo, nec luctus diam vestibulum eu. Donec metus sem, tristique vel massa quis, luctus lobortis neque. Nullam augue lectus, maximus vel sollicitudin a, convallis eleifend risus. Praesent rhoncus feugiat felis in viverra. Maecenas nec felis ultricies, dignissim lorem in, auctor nisl. Morbi mi elit, tempor non accumsan a, faucibus eu purus. In fermentum congue sagittis. Vivamus non nibh sit amet risus aliquet lobortis.",
//         }
//         mongoose.model('staticContent',StaticContent,'staticContent').create(data,(err,data)=>{
//           if(err){
//             console.log("errrrrrr")
//           }
//           else{
//             console.log("Successfully Added Content")
//           }
//         })
//     }
// })