// Library Imports
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  Linkedin,
  Github,
  Facebook,
  Instagram,
} from "react-bootstrap-icons";

const FoundersProfiles = ({
  profilePhoto,
  firstName,
  lastName,
  shortIntro,
  email,
  phone,
  linkedinURL,
  githubURL,
  facebookURL,
  instagramURL,
  portfolioURL,
}) => {
  return (
    <div>
      <Card className="foundersProfileCards bg-dark text-light">
        <div>
          <div className="text-end">
            <Link
              to={portfolioURL}
              className="btnJumpToPortfolio text-light">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </div>

          <div
            className="foundersPhotos"
            style={{
              backgroundImage: profilePhoto,
            }}></div>
        </div>

        <div>
          <Link
            to={portfolioURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-decoration-none">
            <h3 className="foundersFullName text-center">
              {firstName}
              <br />
              {lastName}
            </h3>
          </Link>
          <div className="foundersIconLinks flexRowEvenly w-100">
            <Link
              to={linkedinURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary">
              <p>
                <Linkedin />
              </p>
            </Link>

            <Link
              to={githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary">
              <p>
                <Github />
              </p>
            </Link>

            <Link
              to={facebookURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary">
              <p>
                <Facebook />
              </p>
            </Link>

            <Link
              to={instagramURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary">
              <p>
                <Instagram />
              </p>
            </Link>
          </div>

          <hr className="dividerLine w-75" />

          <p className="foundersDetails">
            {shortIntro}

            <br />
            <br />

            <span className="text-info">{email}</span>

            <br />

            <span className="text-info">{phone}</span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default FoundersProfiles;
