const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  // postID: Number,
  author: String,
  description: String,
  date: { type: Date, default: Date.now },
  comments: [this],
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
