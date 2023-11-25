const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController.js");

// Get all comments in post in reverse chronological order
router.get("/:id", commentController.getAllCommentsByCreated);
