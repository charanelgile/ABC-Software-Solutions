import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/styles.css";
import "../styles/themes.css";

function Header() {
  return (
    <div>
      <Navbar
        expand="lg"
        className="container-fluid p-0">
        <Container
          fluid
          id="navigation"
          className="w-100">
          <Navbar.Brand
            href="/Home"
            className="txtColorDarkTheme fw-bold">
            ABC Software Solutions
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="w-100">
              <Nav className="flexRowEnd fw-bold">
                <Nav.Link
                  href="/Home"
                  className="txtColorDarkTheme">
                  Home
                </Nav.Link>

                <Nav.Link
                  href="/Services"
                  className="txtColorDarkTheme">
                  Services
                </Nav.Link>

                <Nav.Link
                  href="/WhoWeAre"
                  className="txtColorDarkTheme">
                  Who We Are
                </Nav.Link>

                <Nav.Link
                  href="/Contact"
                  className="txtColorDarkTheme">
                  Contact
                </Nav.Link>

                <Nav.Link
                  href="/Testimonials"
                  className="txtColorDarkTheme">
                  Testimonials
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
