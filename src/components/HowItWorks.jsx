// Library Imports
import React from "react";
import { Figure } from "react-bootstrap";

// Components ang Pages Imports

// Miscellaneous Imports
import "../styles/styles.css";
import "../styles/themes.css";

const HowItWorks = (props) => {
  return (
    <div>
      <p>{props.howID}</p>
      <h2>{props.howTitle}</h2>
      <p>{props.howText}</p>

      <a href="/Services">Learn More</a>

      <Figure>
        <Figure.Image
          width={1000}
          height={0}
          alt="700x500"
          src={props.howImage}
        />
      </Figure>
    </div>
  );
};

export default HowItWorks;
