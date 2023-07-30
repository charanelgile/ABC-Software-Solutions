// Library Imports
import React, { useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

// Context Imports
import { ContactFormsSubmittedContext } from "../../contexts/admin/ContactFormsSubmittedContext";

// Others
import {
  year,
  month,
  date,
  hrs,
  mins,
  eitherAMorPM,
} from "../../data/DateTimeData";

const SubmitContactForm = () => {
  const contactFirstNameRef = useRef(null);
  const contactLastNameRef = useRef(null);
  const contactBusinessNameRef = useRef(null);
  const contactEmailRef = useRef(null);
  const contactPhoneRef = useRef(null);
  const contactServiceTypeRef = useRef(null);
  const contactMessageRef = useRef(null);

  const { contactFormsSubmitted, setContactFormsSubmitted } = useContext(
    ContactFormsSubmittedContext
  );

  const regexPhoneNumber =
    /(\+?\d{2}?\s?\d{3}\s?\d{3}\s?\d{4})|([0]\d{3}\s?\d{3}\s?\d{4})/g;

  const handleSubmitContactForm = (event) => {
    event.preventDefault();

    const submittedContactForm = {
      contactID: Date.now(),
      contactDateSubmitted: `${month}-${date}-${year}, ${hrs}:${mins} ${eitherAMorPM}`,
      contactFirstName: contactFirstNameRef.current.value,
      contactLastName: contactLastNameRef.current.value,
      contactBusinessName: contactBusinessNameRef.current.value,
      contactEmail: contactEmailRef.current.value,
      contactPhone: contactPhoneRef.current.value,
      contactServiceType: contactServiceTypeRef.current.value,
      contactMessage: contactMessageRef.current.value,
    };

    setContactFormsSubmitted([
      ...contactFormsSubmitted,
      submittedContactForm,
    ]);

    console.log(submittedContactForm);

    contactFirstNameRef.current.value = null;
    contactLastNameRef.current.value = null;
    contactBusinessNameRef.current.value = null;
    contactEmailRef.current.value = null;
    contactPhoneRef.current.value = null;
    contactServiceTypeRef.current.value =
      "Select the type of service you need";
    contactMessageRef.current.value = null;
  };

  return (
    <div id="divContactForm">
      <form
        id="emailUs"
        onSubmit={handleSubmitContactForm}>
        <h5 className="text-light text-center mb-4 px-5 opacity-50">
          Tell us what you need
        </h5>

        <label htmlFor="contactFirstName">First Name:</label>

        <br />

        <small className="text-tertiary"></small>

        <input
          id="contactFirstName"
          name="contactFirstName"
          type="text"
          required
          placeholder="Enter your First Name"
          className="form-control shadow-none"
          ref={contactFirstNameRef}
        />

        <label htmlFor="contactLastName">Last Name:</label>

        <br />

        <small className="text-tertiary"></small>

        <input
          id="contactLastName"
          name="contactLastName"
          type="text"
          required
          placeholder="Enter your Last Name"
          className="form-control shadow-none"
          ref={contactLastNameRef}
        />

        <label htmlFor="contactBusinessName">Name of Business:</label>

        <br />

        <small className="text-tertiary"></small>

        <input
          id="contactBusinessName"
          name="contactBusinessName"
          type="text"
          required
          placeholder="Enter the Name of your Business / Company"
          className="form-control shadow-none"
          ref={contactBusinessNameRef}
        />

        <label htmlFor="contactPhone">Phone Number:</label>

        <br />

        <small className="text-tertiary"></small>

        <input
          id="contactPhone"
          name="contactPhone"
          type="tel"
          required
          placeholder="Enter your Phone Number"
          className="form-control shadow-none"
          ref={contactPhoneRef}
        />

        <label htmlFor="contactEmail">Email:</label>

        <br />

        <small className="text-tertiary"></small>

        <input
          id="contactEmail"
          name="contactEmail"
          type="email"
          required
          placeholder="Enter your Email Address"
          className="form-control shadow-none"
          ref={contactEmailRef}
        />

        <label htmlFor="contactServiceType">Type of Service:</label>

        <br />

        <small className="text-tertiary"></small>

        <select
          id="contactServiceType"
          name="contactServiceType"
          className="form-select shadow-none"
          ref={contactServiceTypeRef}>
          <option defaultValue>Select the type of service you need</option>

          <option value="Software Development">
            Software Development
          </option>

          <option value="Outsourcing">Outsourcing</option>

          <option value="Design">Design</option>

          <option value="Strategy">Strategy</option>
        </select>

        <label htmlFor="contactMessage">Message:</label>

        <br />

        <small className="text-tertiary"></small>

        <textarea
          id="contactMessage"
          name="contactMessage"
          className="form-control shadow-none"
          placeholder="Share with us what you are specifically looking for"
          ref={contactMessageRef}></textarea>

        <button
          id="contactSubmit"
          type="submit"
          className="bg-primary text-light btn">
          Submit
        </button>
      </form>

      <div
        id="visitUs"
        className="bg-dark-midtone">
        <h5 className="text-light text-center mb-4 px-5 opacity-50">
          Visit us in our Cebu Office
        </h5>

        <iframe
          id="iframeMap"
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.63181920161!2d123.89314209999998!3d10.291220300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99bfbb9f4145b%3A0x81c93384dae66161!2s24%20R.%20Magsaysay%20St%2C%20Cebu%20City%2C%206000%20Cebu!5e0!3m2!1sen!2sph!4v1689875229084!5m2!1sen!2sph"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div
          id="companyContactDetails"
          className="flexRowEnd me-2">
          <div className="flexColEnd me-3">
            <p>24F Magsaysay Bldg., IT Park, Cebu City</p>

            <p>support@abc.com.ph</p>

            <p>(02) 3709 5162</p>
          </div>

          <div className="flexColCenter">
            <p>
              <FontAwesomeIcon icon={faLocationDot} />
            </p>

            <p>
              <FontAwesomeIcon icon={faEnvelope} />
            </p>

            <p>
              <FontAwesomeIcon icon={faPhone} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitContactForm;
