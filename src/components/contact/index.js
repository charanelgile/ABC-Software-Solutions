import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
// import { contactConfig } from "./content_option";
export default function ContactUs() {
  

  return (
      <Container>
     
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"><b>Contact Us</b></h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email: ABCSoftwareCompany@gmail.RAWR</strong>
              
              <br />
              <br />
              <p>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
            </address>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter Your First Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control "
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Your Last Name"
                    type="text" 
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control "
                    id="companyname"
                    name="companyname"
                    placeholder="Enter Your Company Name"
                    type="text" 
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control "
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    type="email" 
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control "
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="Enter Your Contact Number#:"
                    type="text" 
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control "
                    id="subjectOfConcern"
                    name="subjectOfConcern"
                    placeholder="Subject Of Concern"
                    type="text" 
                    required 
                  />
                </Col>
              </Row>
              <textarea
                className="form-control "
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button  class="btn btn-info" type="submit" color="warning"> 
                  <b>Submit</b>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
  );
}