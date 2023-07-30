// Library Imports
import React from "react";
import { Link } from "react-router-dom";
import { Figure } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const FiveStepSolution = ({ data, bgColor, txtColor }) => {
  return (
    <div className={bgColor}>
      <div className="divFiveStepSolution">
        <div className="divFiveStepSolutionDetails">
          <p className="fssID m-0 p-0">Step {data.fssID}</p>

          <h3 className="fssTitle">{data.fssTitle}</h3>

          <p className="fssDescription">{data.fssDescription}</p>

          <Link
            to="/Services"
            className={txtColor}>
            Learn More&nbsp;&nbsp;
            <FontAwesomeIcon icon={faCircleArrowRight} />
          </Link>
        </div>

        <div className="divFiveStepSolutionImage">
          <Figure>
            <Figure.Image
              width={700}
              height={0}
              alt="ABC's 5-Step Software Solution"
              src={data.fssImage}
            />
          </Figure>
        </div>
      </div>
    </div>
  );
};

export default FiveStepSolution;
