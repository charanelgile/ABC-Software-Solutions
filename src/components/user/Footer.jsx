// Library Imports
import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

// Others
import "../../styles/stylesFooter.css";

const Footer = () => {
  return (
    <MDBFooter
      id="footer"
      className="bg-dark text-lg-start">
      <section className="ftrSocialLinks bg-primary d-flex justify-content-center justify-content-lg-between border-bottom">
        <div className="text-light d-none d-lg-block">
          <span>Connect with us on social media:</span>
        </div>

        <div className="text-light">
          <a
            href="https://linkedin.com/"
            className="text-reset">
            <LinkedInIcon />
          </a>

          <a
            href="https://facebook.com/"
            className="ms-4 text-reset">
            <FacebookIcon />
          </a>

          <a
            href="https://instagram.com/"
            className="ms-4 text-reset">
            <InstagramIcon />
          </a>

          <a
            href="https://twitter.com/"
            className="ms-4 text-reset">
            <TwitterIcon />
          </a>
        </div>
      </section>

      <section>
        <MDBContainer
          fluid
          className="text-light text-center text-md-start">
          <MDBRow className="ftrColumnLinks">
            <MDBCol
              md="4"
              lg="3"
              xl="4"
              id="ftrColumn1">
              <h6 className="text-primary text-uppercase fw-bold my-3">
                ABC Software Solutions &copy; 2023
              </h6>
              <p>
                Robust and fully-customizable powerful seamless application
                for every department that your company has, all combined in
                one intuitive space and available in mobile and web.
              </p>
            </MDBCol>

            <MDBCol
              md="2"
              lg="2"
              xl="2"
              id="ftrColumn2">
              <h6 className="text-primary text-uppercase fw-bold my-3">
                Tech Stack
              </h6>
              <p>
                <a
                  href="#!"
                  className="text-reset">
                  ReactJS
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset">
                  NodeJS
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset">
                  PHP
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="2"
              lg="2"
              xl="2"
              id="ftrColumn3">
              <h6 className="text-primary text-uppercase fw-bold my-3">
                Useful links
              </h6>
              <p>
                <a
                  href="#!"
                  className="text-reset">
                  Blog
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset">
                  Services
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset">
                  Help Center
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="4"
              id="ftrColumn4">
              <h6 className="text-primary text-uppercase fw-bold my-3">
                Contact
              </h6>

              <p>
                <FmdGoodIcon />
                &nbsp; 24F Magsaysay Bldg., IT Park, Cebu City, PH
              </p>

              <p>
                <EmailIcon />
                &nbsp; support@abc.com.ph
              </p>

              <p>
                <PhoneIcon />
                &nbsp; (02) 3709 5162
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
};

export default Footer;
