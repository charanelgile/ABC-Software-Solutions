import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../styles/styles.css";
import "../styles/themes.css";

function HeaderHome() {
  return (
    <div>
      <Navbar expand="lg" className="container-fluid p-0">
        <Container
          fluid
          id="navigation"
          className="w-100 fw-bold txtColorLightTheme">
          <Navbar.Brand href="/" className="txtColorDarkTheme">
            ABC Software Solutions
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="w-100">
              <Nav className="flexRowEnd">
                <NavLink
                  exact
                  to="/"
                  id="navHome"
                  className="txtColorDarkTheme nav-link">
                  Home
                </NavLink>

                <NavLink
                  to="/Services"
                  className="txtColorDarkTheme nav-link"
                  activeClassName="active">
                  Services
                </NavLink>

                <NavLink
                  to="/WhoWeAre"
                  className="txtColorDarkTheme nav-link"
                  activeClassName="active">
                  Who We Are
                </NavLink>

                <NavLink
                  to="/Contact"
                  className="txtColorDarkTheme nav-link"
                  activeClassName="active">
                  Contact
                </NavLink>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderHome;
