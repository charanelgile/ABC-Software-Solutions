import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/styles.css";

const GivingBack = (props) => {
  const { image1, image2, image3 } = props;

  return (
    <Carousel>
      <Carousel.Item
        interval={4000}
        className="p-0">
        <div
          id="imgGreenVille"
          className="divGivingBack"
          style={{
            backgroundImage: image1,
          }}></div>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h1>ABC GreenVille</h1>
          <p className="txtGivingBack">
            Helping farmers all over the country and supporting LGUs'
            reforestation efforts
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item
        interval={4000}
        className="p-0">
        <div
          id="imgYOUth"
          className="divGivingBack"
          style={{
            backgroundImage: image2,
          }}></div>
        <Carousel.Caption>
          <h1>YOUth Can Code</h1>
          <p className="txtGivingBack">
            Free coding bootcamps and tech scholarships for promising
            underprivileged youth.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item
        interval={4000}
        className="p-0">
        <div
          id="imgSustainable"
          className="divGivingBack"
          style={{
            backgroundImage: image3,
          }}></div>
        <Carousel.Caption>
          <h1>Sustainable Living in as Easy as ABC</h1>
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
