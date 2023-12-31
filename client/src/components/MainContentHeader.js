import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { addPost } from "../api/apiClient";
import "../styles/MainContentHeader.css";

function MainContentHeader({ onAddPosts }) {
  const [open, setOpen] = useState(false);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const renderIcon = () => {
    if (open) {
      // SVG for the open state (e.g., a minus icon)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      );
    } else {
      // SVG for the closed state (e.g., a plus icon)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
          />
        </svg>
      );
    }
  };

  const submitPost = async () => {
    try {
      const postData = {
        author,
        title,
        description,
      };
      await addPost(postData);
      setAuthor("");
      setTitle("");
      setDescription("");
      setOpen(false);
      onAddPosts();
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-between align-items-center">
        <Col>
          <h2>Posts</h2>
        </Col>
        <Col md="auto">
          <Button
            id="createPostButton"
            type="button"
            onClick={() => setOpen(!open)}
            aria-controls="postDropdown"
            aria-expanded={open}
          >
            {renderIcon()}
          </Button>
        </Col>
      </Row>

      {/* Create New Post Dropdown */}
      <Collapse in={open}>
        <div id="postDropdown">
          <hr />
          <Form.Group className="mb-3">
            <Form.Label htmlFor="topicAuthor">Your Name</Form.Label>
            <Form.Control
              value={author}
              type="text"
              id="topicAuthor"
              onChange={handleAuthorChange}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="topicTitle">Title</Form.Label>
            <Form.Control
              value={title}
              type="text"
              id="topicTitle"
              onChange={handleTitleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="topicDescription">Description</Form.Label>
            <Form.Control
              value={description}
              as="textarea"
              id="topicDescription"
              rows={3}
              onChange={handleDescriptionChange}
              required
            />
          </Form.Group>
          <Button id="newTopicForm" type="button" onClick={submitPost}>
            Submit
          </Button>
        </div>
      </Collapse>
      <hr />
    </Container>
  );
}

export default MainContentHeader;
