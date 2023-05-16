import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigation() {
  const linkStyles = {
    textDecoration: "none", // Remove underline
    color: "inherit", // Inherit color from parent
    marginRight: "10px",
    fontWeight: "500" // Add margin between links
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React Interview</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" style={linkStyles}>
              Home
            </Link>
            <Link to="/counter" style={linkStyles}>
              Counter
            </Link>
            <Link to="/dropdown" style={linkStyles}>
              Dropdown
            </Link>
            <Link to="/todolist" style={linkStyles}>
              TodoList
            </Link>
            <Link to="/peoples" style={linkStyles}>
              Peoples
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
