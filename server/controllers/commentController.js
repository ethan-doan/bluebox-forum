const Comment = require("../models/Comment.js");

exports.getAllCommentsByCreated = async (req, res) => {
  try {
    const sortField = req.query.sortField || "createdAt";
    const sortOrder = req.query.sortOrder || -1; // -1 for descending, 1 for ascending
    const comments = await Comment.find().sort({ [sortField]: sortOrder });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};
