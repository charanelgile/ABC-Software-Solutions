import React from "react";
import { Container, Col } from "react-bootstrap";
import { PartnersData1, PartnersData2 } from "../data/PartnersData";

const Partners = () => {
  return (
    <div className="container-fluid bg-light m-0 p-0 pt-3">
      <h5 className="txtColorLightTheme text-center mb-4">
        Trusted by our Long-term Partner Businesses:
      </h5>

      <section>
        <Container
          fluid
          className="m-0 p-0">
          <div className="divPartners">
            {PartnersData1.map((company, index) => {
              return (
                <Col
                  key={index + 1}
                  className="text-center"
                  sm="auto"
                  md="auto"
                  lg="auto">
                  <img
                    src={company.partnerLogo}
                    alt="Accenture Logo"
                    height={company.partnerHeight}
                  />
                </Col>
              );
            })}
          </div>

          <div className="divPartners mb-5">
            {PartnersData2.map((company, index) => {
              return (
                <Col
                  key={index + 1}
                  className="text-center"
                  sm="auto"
                  md="auto"
                  lg="auto">
                  <img
                    src={company.partnerLogo}
                    alt="Accenture Logo"
                    height={company.partnerHeight}
                  />
                </Col>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Partners;
