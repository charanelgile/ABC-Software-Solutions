import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Technologies = () => {
  return (
    <div id="divTechnologies">
      <h3 className="txtColorBrand text-center">Technologies We Use</h3>

      <section>
        <div className="technologyLabels">
          <h5>Front End</h5>
          <hr />
        </div>

        <Container fluid>
          <Row className="technologyLogos">
            <Col className="text-center">
              <img
                src={require("../images/technologies/html.png")}
                alt="HTML Logo"
                height={70}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/css.png")}
                alt="CSS Logo"
                height={70}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/javascript.png")}
                alt="JavaScript Logo"
                height={70}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/react.png")}
                alt="React Logo"
                height={60}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/angular.png")}
                alt="Angular Logo"
                height={77}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/vue.png")}
                alt="Vue Logo"
                height={55}
              />
            </Col>
          </Row>
        </Container>

        <div className="technologyLabels">
          <h5>Back End</h5>
          <hr />
        </div>

        <Container fluid>
          <Row className="technologyLogos">
            <Col className="text-center">
              <img
                src={require("../images/technologies/php.png")}
                alt="PHP Logo"
                height={50}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/python.png")}
                alt="Python Logo"
                height={75}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/node.png")}
                alt="Node Logo"
                height={40}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/laravel.png")}
                alt="Laravel Logo"
                height={50}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/mysql.png")}
                alt="MySQL Logo"
                height={55}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/mongodb.png")}
                alt="MongoDB Logo"
                height={45}
              />
            </Col>
          </Row>
        </Container>

        <div className="technologyLabels">
          <h5>Mobile</h5>
          <hr />
        </div>

        <Container fluid>
          <Row className="technologyLogos">
            <Col className="text-center">
              <img
                src={require("../images/technologies/java.png")}
                alt="Java Logo"
                height={70}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/c-sharp.png")}
                alt="C# Logo"
                height={70}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/c-plus-plus.png")}
                alt="C++ Logo"
                height={70}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/apple.png")}
                alt="Apple Logo"
                height={70}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/swift.png")}
                alt="Swift Logo"
                height={55}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/kotlin.png")}
                alt="Kotlin Logo"
                height={55}
              />
            </Col>
          </Row>
        </Container>

        <div className="technologyLabels">
          <h5>Design</h5>
          <hr />
        </div>

        <Container fluid>
          <Row className="technologyLogos">
            <Col className="text-center">
              <img
                src={require("../images/technologies/adobe-creative-cloud.png")}
                alt="Adobe Creative Cloud Logo"
                height={60}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/adobe-photoshop.png")}
                alt="Adobe Photoshop Logo"
                height={60}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/adobe-illustrator.png")}
                alt="Adobe Illustrator Logo"
                height={60}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/adobe-xd.png")}
                alt="Adobe Xd Logo"
                height={60}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/figma.png")}
                alt="Figma Logo"
                height={60}
              />
            </Col>

            <Col className="text-center">
              <img
                src={require("../images/technologies/invision.png")}
                alt="InVision Logo"
                height={65}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Technologies;
