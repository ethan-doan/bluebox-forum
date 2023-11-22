import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <span className="fw-bold">Blue</span>
          <span>Box</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
