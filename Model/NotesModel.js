const mongoose = require("mongoose");

const NotesSchema = mongoose.Schema({
  title: String,
  body: String,
  date: String,
  userID: String,
});

const NotesModel = mongoose.model("notes", NotesSchema);

module.exports = { NotesModel };
