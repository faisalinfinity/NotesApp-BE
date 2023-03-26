const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
       
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }


})

const userModel=mongoose.model("user",userSchema)

module.exports=userModel