// Library Imports
import React from "react";
import { Figure } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

// Components ang Pages Imports

// Miscellaneous Imports
import "../styles/styles.css";
import "../styles/themes.css";

const HowItWorks = (props) => {
  return (
    <div
      id={props.howDivArrangement}
      className="divHowItWorks flexRowBetween w-100">
      <div className="divHowItWorksDetails">
        <p className="howSteps m-0 p-0">Step {props.howID}</p>
        <h2 className="howTitle">{props.howTitle}</h2>
        <p className="howText">{props.howText}</p>

        <a
          className={props.howLearnMore}
          href="/Services">
          Learn More&nbsp;&nbsp;
          <ArrowRight />
        </a>
      </div>

      <div className="divHowItWorksImage">
        <Figure>
          <Figure.Image
            width={2000}
            height={0}
            className={props.howImagePosition}
            alt="ABC's 5-Step Software Solution"
            src={props.howImage}
          />
        </Figure>
      </div>
    </div>
  );
};

export default HowItWorks;
