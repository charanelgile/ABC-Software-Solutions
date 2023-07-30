import React, { useState, useRef, useEffect } from "react";
import { DateTime } from "../../data/DateTime";
import DisplayContactUsForms from "./DisplayContactUsForms";

const SubmitContactUsForm = () => {
  const contactFirstNameRef = useRef(null);
  const contactLastNameRef = useRef(null);
  const contactBusinessNameRef = useRef(null);
  const contactPhoneRef = useRef(null);
  const contactEmailRef = useRef(null);
  const contactServiceTypeRef = useRef(null);
  const contactMessageRef = useRef(null);

  const [allContactUsForms, setAllContactUsForms] = useState(
    localStorage.getItem("allContactUsForms")
      ? JSON.parse(localStorage.getItem("allContactUsForms"))
      : []
  );

  const handleSubmitContactUsForm = (event) => {
    event.preventDefault();

    const submittedContactUsForm = {
      contactID: Date.now(),
      contactDateSubmitted: DateTime,
      contactFirstName: contactFirstNameRef.current.value,
      contactLastName: contactLastNameRef.current.value,
      contactBusinessName: contactBusinessNameRef.current.value,
      contactPhone: contactPhoneRef.current.value,
      contactEmail: contactEmailRef.current.value,
      contactServiceType: contactServiceTypeRef.current.value,
      contactMessage: contactMessageRef.current.value,
    };

    setAllContactUsForms([...allContactUsForms, submittedContactUsForm]);

    console.log(submittedContactUsForm);

    contactFirstNameRef.current.value = null;
    contactLastNameRef.current.value = null;
    contactBusinessNameRef.current.value = null;
    contactPhoneRef.current.value = null;
    contactEmailRef.current.value = null;
    contactServiceTypeRef.current.value =
      "Select the type of service you need";
    contactMessageRef.current.value = null;
  };

  useEffect(() => {
    localStorage.setItem(
      "allContactUsForms",
      JSON.stringify(allContactUsForms)
    );
  }, [allContactUsForms]);

  return (
    <div>
      <form onSubmit={handleSubmitContactUsForm}>
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

      <div>
        <DisplayContactUsForms
          allContactUsForms={allContactUsForms}
          setAllContactUsForms={setAllContactUsForms}
        />
      </div>
    </div>
  );
};

export default SubmitContactUsForm;
