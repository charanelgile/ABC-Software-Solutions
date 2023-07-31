// Library Imports
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHammer,
  faPaperPlane,
  faGlobe,
  faMoon,
  faUser,
  faArrowRightFromBracket,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

// Context Imports
import { AllAdminsContext } from "../../contexts/admin/AllAdminsContext";
import { CurrentAdminContext } from "../../contexts/admin/CurrentAdminContext";

// Others
import "../../styles/stylesHeader.css";

const AdminHeader = () => {
  const { allAdmins } = useContext(AllAdminsContext);
  const { currentAdmin, setCurrentAdmin } = useContext(
    CurrentAdminContext
  );

  const handleAdminLogout = () => {
    setCurrentAdmin([]);

    window.location.reload();
  };

  return (
    <div id="divNavHeader">
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="navHeaders mb-3 fw-bold">
          <Container fluid>
            <Navbar.Brand
              id="logo"
              href="/DashboardOverview"
              className="text-light">
              ABC Software Solutions
            </Navbar.Brand>

            <Navbar.Toggle
              id="navBurger"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="shadow-none"
            />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className="bg-dark-midtone">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Navbar.Brand
                    href="/DashboardOverview"
                    id="logoOffCanvas"
                    className="text-light fw-bold">
                    ABC Software Solutions
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className="text-light">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    href="/"
                    className="text-light">
                    <div className="divNavMenu">
                      <FontAwesomeIcon icon={faHouse} />
                      <p>Home</p>
                    </div>
                  </Nav.Link>

                  <Nav.Link
                    href="/Services"
                    className="text-light">
                    <div className="divNavMenu">
                      <FontAwesomeIcon icon={faHammer} />
                      <p>Services</p>
                    </div>
                  </Nav.Link>

                  <Nav.Link
                    href="/ContactUs"
                    className="text-light">
                    <div className="divNavMenu">
                      <FontAwesomeIcon icon={faPaperPlane} />
                      <p>Contact Us</p>
                    </div>
                  </Nav.Link>

                  <Nav.Link
                    href="/WhoWeAre"
                    className="text-light">
                    <div className="divNavMenu">
                      <FontAwesomeIcon icon={faGlobe} />
                      <p>Who We Are</p>
                    </div>
                  </Nav.Link>

                  <hr />

                  {allAdmins.length > 0 && currentAdmin.length > 0 ? (
                    <div id="divNavButtonsLoggedIN">
                      <Link
                        id="navButtonThemeSwitch"
                        onClick={() => alert("Theme Switch")}
                        className="navButtons bg-secondary text-dark btn">
                        <FontAwesomeIcon icon={faMoon} />
                      </Link>

                      <Link
                        id="navButtonEditUser"
                        to="/AdminEditAccount"
                        className="navButtons bg-primary text-light btn">
                        <FontAwesomeIcon icon={faUser} />
                      </Link>

                      <Link
                        id="navButtonLogout"
                        onClick={handleAdminLogout}
                        className="navButtons bg-tertiary text-light btn">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                      </Link>
                    </div>
                  ) : (
                    <div id="divNavButtonsLoggedOUT">
                      <Link
                        id="navButtonThemeSwitch"
                        onClick={() => alert("Theme Switch")}
                        className="navButtons bg-secondary text-dark btn">
                        <FontAwesomeIcon icon={faMoon} />
                      </Link>

                      <Link
                        id="navButtonLogin"
                        to="/AdminLogin"
                        className="bg-primary text-light btn fw-bold">
                        Login&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                      </Link>
                    </div>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default AdminHeader;
