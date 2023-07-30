import React, { useRef, useContext } from "react";
import { ContactFormsSubmittedContext } from "../../contexts/admin/ContactFormsSubmittedContext";
import { DateTime } from "../../data/DateTime";

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

  const handleSubmitContactForm = (event) => {
    event.preventDefault();

    const submittedContactForm = {
      contactID: Date.now(),
      contactDateSubmitted: DateTime,
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
    <div>
      <form onSubmit={handleSubmitContactForm}>
        <label htmlFor="contactFirstName">First Name:</label>
        <input
          id="contactFirstName"
          name="contactFirstName"
          type="text"
          required
          className="form-control"
          ref={contactFirstNameRef}
        />

        <label htmlFor="contactLastName">Last Name:</label>
        <input
          id="contactLastName"
          name="contactLastName"
          type="text"
          required
          className="form-control"
          ref={contactLastNameRef}
        />

        <label htmlFor="contactBusinessName">Name of Business:</label>
        <input
          id="contactBusinessName"
          name="contactBusinessName"
          type="text"
          required
          className="form-control"
          ref={contactBusinessNameRef}
        />

        <label htmlFor="contactPhone">Phone Number:</label>
        <input
          id="contactPhone"
          name="contactPhone"
          type="tel"
          required
          className="form-control"
          ref={contactPhoneRef}
        />

        <label htmlFor="contactEmail">Email:</label>
        <input
          id="contactEmail"
          name="contactEmail"
          type="email"
          required
          className="form-control"
          ref={contactEmailRef}
        />

        <label htmlFor="contactServiceType">Type of Service:</label>
        <select
          id="contactServiceType"
          name="contactServiceType"
          className="form-select"
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
        <textarea
          id="contactMessage"
          name="contactMessage"
          className="form-control"
          placeholder="Share with us what you are specifically looking for"
          ref={contactMessageRef}></textarea>

        <button
          id="contactSubmit"
          type="submit"
          className="btn btn-primary w-25">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitContactForm;
