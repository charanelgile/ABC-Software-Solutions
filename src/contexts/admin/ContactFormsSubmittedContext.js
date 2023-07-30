import React, { useState, useEffect } from "react";

// Context Object for Submitted Contact Forms
export const ContactFormsSubmittedContext = React.createContext();

export const ContactFormsSubmittedContextProvider = ({ children }) => {
  // State Variable
  const [contactFormsSubmitted, setContactFormsSubmitted] = useState(
    localStorage.getItem("contactFormsSubmitted")
      ? JSON.parse(localStorage.getItem("contactFormsSubmitted"))
      : []
  );

  // Side Effect
  useEffect(() => {
    localStorage.setItem(
      "contactFormsSubmitted",
      JSON.stringify(contactFormsSubmitted)
    );
  }, [contactFormsSubmitted]);

  return (
    <ContactFormsSubmittedContext.Provider
      value={{ contactFormsSubmitted, setContactFormsSubmitted }}>
      {children}
    </ContactFormsSubmittedContext.Provider>
  );
};
