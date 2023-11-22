import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import "../styles/Header.css";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <span className="fs-3 fw-bold logo-1">Blue</span>
          <span className="fs-3 logo-2">Box</span>
        </Navbar.Brand>
        <Form.Control size="md" type="text" placeholder="Search" />
      </Container>
    </Navbar>
  );
}

export default Header;
