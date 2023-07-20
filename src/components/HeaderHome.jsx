import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/styles.css";
import "../styles/themes.css";

function HeaderHome() {
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
            className="txtColorDarkTheme">
            ABC Software Solutions
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="w-100">
              <Nav className="flexRowEnd">
                <Nav.Link
                  href="/"
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
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderHome;
