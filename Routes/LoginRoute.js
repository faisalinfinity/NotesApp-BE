const express = require("express");
const { Login } = require("../Controller/Authcontroller");
const LoginRoute = express.Router();

LoginRoute.post("/", Login);

module.exports = { LoginRoute };
