// Library Imports
import React from "react";
import { Carousel } from "react-bootstrap";

const GivingBack = ({ image1, image2, image3 }) => {
  return (
    <Carousel>
      <Carousel.Item
        interval={5000}
        className="p-0">
        <div
          id="imgGreenVille"
          className="imgGivingBack"
          style={{
            backgroundImage: image1,
          }}></div>

        <Carousel.Caption>
          <h1 className="titleGivingBack">ABC GreenVille</h1>

          <p className="txtGivingBack">
            Helping farmers all over the country and supporting LGUs'
            reforestation efforts
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item
        interval={5000}
        className="p-0">
        <div
          id="imgYOUth"
          className="imgGivingBack"
          style={{
            backgroundImage: image2,
          }}></div>

        <Carousel.Caption>
          <h1 className="titleGivingBack">YOUth Can Code</h1>

          <p className="txtGivingBack">
            Free coding bootcamps and tech scholarships for promising
            underprivileged youth.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item
        interval={5000}
        className="p-0">
        <div
          id="imgSustainable"
          className="imgGivingBack"
          style={{
            backgroundImage: image3,
          }}></div>

        <Carousel.Caption>
          <h1 className="titleGivingBack">
            Sustainable Living in as Easy as ABC
          </h1>

          <p className="txtGivingBack">
            <b>(A)</b>dopt renewable energy sources at home
            <br />
            <b>(B)</b>ring packed lunch when possible
            <br />
            <b>(C)</b>arpool with coworkers
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default GivingBack;
