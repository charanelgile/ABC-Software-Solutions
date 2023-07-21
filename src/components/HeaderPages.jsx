import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../styles/styles.css";
import "../styles/themes.css";
import "./HeaderPages.css";

function HeaderPages() {
  return (
    <div>
      <Navbar expand="lg" className="container-fluid p-0">
        <Container
          fluid
          id="navigation"
          className="w-100 fw-bold txtColorLightTheme">
          <Navbar.Brand href="/" className="txtColorLightTheme">
            ABC Software Solutions
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="w-100">
              <Nav className="flexRowEnd">
                {/* Use NavLink instead of Nav.Link */}
                <NavLink
                  exact
                  to="/"
                  className="nav-link"
                  activeClassName="active txtColorLightTheme">
                  Home
                </NavLink>
                <NavLink
                  to="/Services"
                  className="nav-link"
                  activeClassName="active txtColorLightTheme">
                  Services
                </NavLink>
                <NavLink
                  to="/WhoWeAre"
                  className="nav-link"
                  activeClassName="active txtColorLightTheme">
                  Who We Are
                </NavLink>
                <NavLink
                  to="/Contact"
                  className="nav-link"
                  activeClassName="active txtColorLightTheme">
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

export default HeaderPages;
