import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt="Librería El trébol"
            src="../assets/images/Eltrebol.png"
            width="10%"
            height="10%"
            className="d-inline-block align-middle"
          />
          <h5 className="d-inline-block align-middle">Librería El trébol</h5>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1.1">El Cole</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">La Ofi</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">El Arte</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/1.4">Ofertas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Que buscas?"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Nav>
          <Nav className="mr-auto ">
            <Nav.Link>
              <CartWidget></CartWidget>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
        <img
          alt="Librería El trébol"
          src="../assets/images/Eltrebol.png"
          width="12%"
          height="12%"
          className="d-inline-block align-middle"
        />
      </Nav>
    </Container>
  
    </Navbar>
  );
};

export default NavBar;
