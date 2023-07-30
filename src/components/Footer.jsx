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

// Components ang Pages Imports

// Miscellaneous Imports
import "../styles/styles.css";
import "../styles/themes.css";

export default function Footer() {
  return (
    <MDBFooter className="bgColorDarkTheme text-lg-start">
      <section className="ftrSocialLinks d-flex justify-content-center justify-content-lg-between border-bottom">
        <div className="txtColorDarkTheme d-none d-lg-block">
          <span>Connect with us on social media:</span>
        </div>

        <div className="txtColorBrand">
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
          className="txtColorDarkTheme text-center text-md-start">
          <MDBRow className="ftrColumnLinks">
            <MDBCol
              md="4"
              lg="3"
              xl="4"
              id="ftrColumn1">
              <h6 className="txtColorBrand text-uppercase fw-bold mb-3">
                ABC Software Solutions &copy; 2023
              </h6>
              <p>
                Robust, powerful, and fully-customizable application for
                every department your company has, all in one place,
                available in mobile and web.
              </p>
            </MDBCol>

            <MDBCol
              md="2"
              lg="2"
              xl="2"
              id="ftrColumn2">
              <h6 className="txtColorBrand text-uppercase fw-bold mb-3">
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
              <h6 className="txtColorBrand text-uppercase fw-bold mb-3">
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
              <h6 className="txtColorBrand text-uppercase fw-bold mb-3">
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

      {/* <div className="txtColorDarkTheme text-center p-4">
        © 2023 Copyright: &nbsp;
        <a
          className="text-reset fw-bold"
          href="https://mdbootstrap.com/">
          ABCTechSolutions.com
        </a>
      </div> */}
    </MDBFooter>
  );
}
