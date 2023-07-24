import React from "react";
import { LifeAtABCData } from "../data/LifeAtABCData";
import { ArrowRight } from "react-bootstrap-icons";

const LifeAtABC = () => {
  return (
    <div>
      {LifeAtABCData.map((story, index) => {
        return (
          <div
            key={index + 1}
            className="divEmployeeStory rounded"
            style={{
              flexDirection: story.layout,
            }}>
            <div
              className="divEmployeeImage"
              style={{
                backgroundImage: story.employeeImage,
              }}></div>

            <div className="divEmployeeDetails">
              <h4
                className="mt-2 mb-0 fw-bold"
                style={{
                  textAlign: story.align,
                }}>
                {story.employeeName}
              </h4>

              <p
                className="txtColorBrand fw-bold mb-2"
                style={{
                  textAlign: story.align,
                }}>
                {story.employeeRole}
              </p>

              <p className="pEmployeeStory mb-2">
                &nbsp;&nbsp;&nbsp;"{story.employeeStory}"
                <a
                  href="#!"
                  className="txtColorBrand aReadMore">
                  &nbsp;&nbsp;&nbsp;Read More <ArrowRight />
                </a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LifeAtABC;
