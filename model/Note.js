const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    maxlength: [40, "Title cannot be more than 40 characters"]
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, "Description cannot be more than 200 characters"]
  },
  subtitle: {
    type: String,
    required: true,
    maxlength: [200, "Subtitle cannot be more than 200 characters"]
  },
  price: {
    type: String,
    required: true,
    maxlength: [4, "price cannot be more than 200 characters"]
  },
  learn: {
    type: String,
    required: true,
    maxlength: [200, "learn cannot be more than 200 characters"]
  },
  vimeo: {
    type: String,
    required: true
  },
  userid: {
    type: String
  }
});

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
