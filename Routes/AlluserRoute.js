const express = require("express");
const AuthorizationMiddleware = require("../Middlewares/AuthorizationMiddleware");
const userModel = require("../Model/UserModel");

const AlluserRoute = express.Router();

AlluserRoute.get("/", AuthorizationMiddleware, async (req, res) => {
  let data = await userModel.find();
  res.json({ data: data });
});

module.exports = { AlluserRoute };
