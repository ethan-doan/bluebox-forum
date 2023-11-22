import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Header.css";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <span className="fw-bold logo-1">Blue</span>
          <span className="logo-2">Box</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
