import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/styles.css";
import "../styles/themes.css";

function HeaderPages() {
  return (
    <div>
      <Navbar
        expand="lg"
        className="container-fluid p-0">
        <Container
          fluid
          id="navigation"
          className="w-100 fw-bold txtColorLightTheme">
          <Navbar.Brand
            href="/"
            className="txtColorLightTheme">
            ABC Software Solutions
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="w-100">
              <Nav className="flexRowEnd">
                <Nav.Link
                  href="/"
                  className="txtColorLightTheme">
                  Home
                </Nav.Link>

                <Nav.Link
                  href="/Services"
                  className="txtColorLightTheme">
                  Services
                </Nav.Link>

                <Nav.Link
                  href="/WhoWeAre"
                  className="txtColorLightTheme">
                  Who We Are
                </Nav.Link>

                <Nav.Link
                  href="/Testimonials"
                  className="txtColorLightTheme">
                  Testimonials
                </Nav.Link>

                <Nav.Link
                  href="/Contact"
                  className="txtColorLightTheme">
                  Contact
                </Nav.Link>

                
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderPages;
