const express = require("express");
const {
  AddNotes,
  DeleteNotes,
  UpdateNotes,
  GetNotes,
  GetSingleNotes,
} = require("../Controller/NotesController");
const AuthorizationMiddleware = require("../Middlewares/AuthorizationMiddleware");

const NotesRoute = express.Router();

NotesRoute.use(AuthorizationMiddleware);
NotesRoute.post("/add", AddNotes);
NotesRoute.delete("/delete/:id", DeleteNotes);
NotesRoute.patch("/update/:id", UpdateNotes);
NotesRoute.get("/", GetNotes);
NotesRoute.get("/:id", GetSingleNotes);

module.exports = { NotesRoute };
