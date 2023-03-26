const express = require("express");

const HomeRoute=express.Router()

HomeRoute.get("/",(req,res)=>{
    
    res.send("Home Route")
})


module.exports={HomeRoute}