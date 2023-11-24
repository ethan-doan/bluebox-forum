import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPostById, addComment } from "../api/apiClient";
import { Form, Button } from "react-bootstrap";
import "../styles/Post.css";

function Post() {
  const [post, setPost] = useState({ comments: [] });
  const [commentText, setCommentText] = useState("");
  const [author, setAuthor] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetchPostById(id)
      .then((data) => setPost(data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleCommentSubmit = async () => {
    if (!commentText.trim()) {
      // Optional: Add error handling for empty comment
      return;
    }

    try {
      const newComment = {
        author: author, // Replace with dynamic username if available
        description: commentText,
      };
      const updatedPost = await addComment(id, newComment);
      setPost(updatedPost); // Update the post with the new comment
      setAuthor(""); // Clear the author text area
      setCommentText(""); // Clear the comment text area
    } catch (error) {
      console.error("Error adding comment:", error);
      // Optional: Display error message to user
    }
  };

  if (!post) {
    return <div>Loading post...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="my-5">
        <Link to="/" className="btn btn-secondary">
          Back To Topics
        </Link>
      </div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <hr />
      <h4>Comments</h4>
      <ul className="list-group mt-3">
        {post.comments.map((comment, index) => (
          <li key={comment._id} className="list-group-item">
            <div className="fw-bold">@{comment.author}</div>
            {comment.description}
          </li>
        ))}
      </ul>
      <Form.Group className="my-3">
        <Form.Label>Author</Form.Label>
        <Form.Control
          value={author}
          placeholder="Type your name here..."
          onChange={(e) => setAuthor(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label>Add a Comment</Form.Label>
        <Form.Control
          value={commentText}
          as="textarea"
          placeholder="Type your comment here..."
          rows={3}
          onChange={(e) => setCommentText(e.target.value)}
          required
        ></Form.Control>
      </Form.Group>
      <Button id="submitComment" type="button" onClick={handleCommentSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default Post;
