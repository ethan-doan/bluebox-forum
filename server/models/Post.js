const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    author: String,
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    featuredImage: { type: String, default: "" },
    commentCounter: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
    comments: {
      type: [
        {
          author: String,
          description: String,
          date: { type: Date, default: Date.now },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
