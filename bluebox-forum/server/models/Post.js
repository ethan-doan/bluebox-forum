const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    author: String,
    likes: Number,
    views: Number,
    featuredImage: String,
    commentCounter: Number,
    date: { type: Date, default: Date.now },
    comments: [
      {
        author: String,
        description: String,
        date: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
