const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController.js");

// Get all posts in reverse chronological order
router.get("/", postController.getAllPostsByCreated);

// Get a specific post by ID
router.get("/:id", postController.getPostById);

// Create a new post
router.post("/", postController.createPost);

// Create a new comment
router.post("/:postId/comments", postController.createComment);

// // Update a post by ID
// router.put("/:id", postController.updatePost);

// // Delete a post by ID
// router.delete("/:id", postController.deletePost);

module.exports = router;
