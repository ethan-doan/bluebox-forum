import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPostById } from "../api/apiClient";
import { Form, Button } from "react-bootstrap";
import "../styles/Post.css";

function Post() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchPostById(id)
      .then((data) => setPost(data))
      .catch((error) => console.error(error));
  }, [id]);

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
          <li key={index} className="list-group-item">
            <div className="fw-bold">@{comment.author}</div>
            {comment.description}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h5>Add a Comment</h5>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Type your comment here..."
            rows={3}
            className="mb-3"
            required
          ></Form.Control>
        </Form.Group>
        <Button id="submitComment" type="button">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Post;
