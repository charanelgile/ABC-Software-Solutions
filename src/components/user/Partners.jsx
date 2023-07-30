// Library Imports
import React from "react";
import { Container, Col } from "react-bootstrap";

// Others
import { PartnersData1, PartnersData2 } from "../../data/PartnersData";

const Partners = () => {
  return (
    <div className="bg-dark container-fluid m-0 p-0 pt-4">
      <h5 className="text-light text-center mb-4 px-5 opacity-50">
        Trusted by our Long-term Partner Businesses:
      </h5>

      <section>
        <Container
          fluid
          className="m-0 p-0">
          <div className="divPartners">
            <Col
              className="text-center"
              sm="auto"
              md="auto"
              lg="auto">
              {PartnersData1.map((company, index) => {
                return (
                  <img
                    key={index + 1}
                    src={company.partnerLogo}
                    alt="Partner Business Logo"
                    height={company.partnerHeight}
                  />
                );
              })}
            </Col>
          </div>

          <div className="divPartners mb-5">
            <Col
              className="text-center"
              sm="auto"
              md="auto"
              lg="auto">
              {PartnersData2.map((company, index) => {
                return (
                  <img
                    key={index + 1}
                    src={company.partnerLogo}
                    alt="Partner Business Logo"
                    height={company.partnerHeight}
                  />
                );
              })}
            </Col>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Partners;
