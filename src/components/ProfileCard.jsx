// Library Imports
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Link,
} from "@mui/material";
import {
  Linkedin,
  Github,
  Facebook,
  Instagram,
} from "react-bootstrap-icons";

// Miscellaneous Imports
import "../styles/styles.css";
import "../styles/themes.css";

const ProfileCard = (props) => {
  const {
    profilePhoto,
    fullName,
    shortIntro,
    email,
    phone,
    linkedinURL,
    githubURL,
    facebookURL,
    instagramURL,
  } = props;

  return (
    <Card
      sx={{ maxWidth: 330 }}
      className="rounded rounded-3">
      <CardMedia
        component="img"
        alt="Member Profile Photo"
        height="300"
        image={profilePhoto}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="txtColorLightTheme">
          {fullName}
        </Typography>
        <Typography
          variant="body2"
          className="txtColorLightTheme">
          <p>
            {shortIntro}
            <br />
            <br />

            <b>Email: </b>
            {email}
            <br />

            <b>Phone: </b>
            {phone}
          </p>
          <hr className="mb-0" />
        </Typography>
      </CardContent>
      <CardActions className="flexRowEven mb-3 p-0">
        <a
          href={linkedinURL}
          color="inherit"
          className="profileSocialLinks txtColorBrand">
          <Linkedin />
        </a>

        <a
          href={githubURL}
          color="inherit"
          className="profileSocialLinks txtColorBrand">
          <Github />
        </a>

        <a
          href={facebookURL}
          color="inherit"
          className="profileSocialLinks txtColorBrand">
          <Facebook />
        </a>

        <a
          href={instagramURL}
          color="inherit"
          className="profileSocialLinks txtColorBrand">
          <Instagram />
        </a>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
