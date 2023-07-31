// Library Imports
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

// Others
import { LifeAtABCData } from "../../data/LifeAtABCData";

const LifeAtABC = () => {
  return (
    <div>
      {LifeAtABCData.map((story, index) => {
        return (
          <div key={index + 1}>
            <section
              id="employeeDetails"
              className="flexRowStart bg-dark-midtone">
              <div
                className="employeeImages"
                style={{
                  backgroundImage: story.employeeImage,
                }}></div>

              <div className="employeeNamesRoles">
                <h5 className="mt-2 mb-0 fw-bold">{story.employeeName}</h5>

                <p className="fw-bold">{story.employeeRole}</p>

                <small className="text-info">{story.employeeFocus}</small>
              </div>
            </section>

            <section id="employeeStory">
              <p className="employeeStories">
                &nbsp;&nbsp;&nbsp;"{story.employeeStory}"&nbsp;&nbsp;&nbsp;
                <a
                  href="#!"
                  className="text-secondary text-decoration-none">
                  Read More&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faCaretRight} />
                </a>
              </p>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default LifeAtABC;
