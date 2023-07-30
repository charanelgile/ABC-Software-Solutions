import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Technologies = () => {
  return (
    <div id="divTechnologies">
      <h5 className="text-light text-center mb-4 opacity-75">
        Technologies We Use
      </h5>

      <section>
        <div className="technologyLabels flexRowCenter opacity-50 mt-3">
          <p>
            <b>Front End</b>
          </p>

          <hr />
        </div>

        <Container fluid>
          <Row className="technologyLogos flexRowCenter">
            <Col className="text-center">
              <img
                src={require("../../images/technologies/html.png")}
                alt="HTML Logo"
                height={50}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/css.png")}
                alt="CSS Logo"
                height={50}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/javascript.png")}
                alt="JavaScript Logo"
                height={50}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/react.png")}
                alt="React Logo"
                height={40}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/angular.png")}
                alt="Angular Logo"
                height={42}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/vue.png")}
                alt="Vue Logo"
                height={35}
              />
            </Col>
          </Row>
        </Container>

        <div className="technologyLabels flexRowCenter opacity-50 mt-2">
          <p>
            <b>Back End</b>
          </p>

          <hr />
        </div>

        <Container fluid>
          <Row className="technologyLogos flexRowCenter">
            <Col className="text-center">
              <img
                src={require("../../images/technologies/php.png")}
                alt="PHP Logo"
                height={40}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/python.png")}
                alt="Python Logo"
                height={55}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/node.png")}
                alt="Node Logo"
                height={30}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/mysql.png")}
                alt="MySQL Logo"
                height={37}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/laravel.png")}
                alt="Laravel Logo"
                height={35}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/mongodb.png")}
                alt="MongoDB Logo"
                height={37}
              />
            </Col>
          </Row>
        </Container>

        <div className="technologyLabels flexRowCenter opacity-50 mt-2">
          <p>
            <b>Mobile</b>
          </p>

          <hr />
        </div>

        <Container fluid>
          <Row className="technologyLogos flexRowCenter">
            <Col className="text-center">
              <img
                src={require("../../images/technologies/java.png")}
                alt="Java Logo"
                height={60}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/c-sharp.png")}
                alt="C# Logo"
                height={55}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/c-plus-plus.png")}
                alt="C++ Logo"
                height={55}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/apple.png")}
                alt="Apple Logo"
                height={50}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/swift.png")}
                alt="Swift Logo"
                height={40}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/kotlin.png")}
                alt="Kotlin Logo"
                height={35}
              />
            </Col>
          </Row>
        </Container>

        <div className="technologyLabels flexRowCenter opacity-50 mt-2">
          <p>
            <b>Design</b>
          </p>

          <hr />
        </div>

        <Container fluid>
          <Row className="technologyLogos flexRowCenter">
            <Col className="text-center">
              <img
                src={require("../../images/technologies/adobe-creative-cloud.png")}
                alt="Adobe Creative Cloud Logo"
                height={47}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/adobe-photoshop.png")}
                alt="Adobe Photoshop Logo"
                height={55}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/adobe-illustrator.png")}
                alt="Adobe Illustrator Logo"
                height={55}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/adobe-xd.png")}
                alt="Adobe Xd Logo"
                height={55}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/figma.png")}
                alt="Figma Logo"
                height={45}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../../images/technologies/invision.png")}
                alt="InVision Logo"
                height={50}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Technologies;
