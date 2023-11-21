import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function MainContentHeader() {
  const [open, setOpen] = useState(false);

  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-between align-items-center">
        <Col>
          <h2>Posts</h2>
        </Col>
        <Col md="auto">
          <Button
            id="createPostButton"
            variant="primary"
            type="button"
            onClick={() => setOpen(!open)}
            aria-controls="postDropdown"
            aria-expanded={open}
          >
            Create New Post
          </Button>
        </Col>
      </Row>

      {/* Create New Post Dropdown */}
      <Collapse in={open}>
        <div id="postDropdown">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="topicTitle">Topic Title</Form.Label>
            <Form.Control type="text" id="topicTitle" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="topicDescription">Description</Form.Label>
            <Form.Control
              as="textarea"
              id="topicDescription"
              rows={3}
              required
            />
          </Form.Group>
          <Button id="newTopicForm" type="button" variant="primary">
            Submit
          </Button>
        </div>
      </Collapse>
      <hr />
    </Container>
  );
}

export default MainContentHeader;
