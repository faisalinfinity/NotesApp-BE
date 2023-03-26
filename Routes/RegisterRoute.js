const express=require("express")
const { Register } = require("../Controller/Authcontroller")
const Validator = require("../Middlewares/Validator")

const RegisterRoute=express.Router()

RegisterRoute.post("/",Validator, Register)

module.exports={RegisterRoute}
