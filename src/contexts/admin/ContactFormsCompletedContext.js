import React, { useState, useEffect } from "react";

// Context Object for Completed Contact Forms
export const ContactFormsCompletedContext = React.createContext();

export const ContactFormsCompletedContextProvider = ({ children }) => {
  // State Variable
  const [contactFormsCompleted, setContactFormsCompleted] = useState(
    localStorage.getItem("contactFormsCompleted")
      ? JSON.parse(localStorage.getItem("contactFormsCompleted"))
      : []
  );

  // Side Effect
  useEffect(() => {
    localStorage.setItem(
      "contactFormsCompleted",
      JSON.stringify(contactFormsCompleted)
    );
  }, [contactFormsCompleted]);

  return (
    <ContactFormsCompletedContext.Provider
      value={{ contactFormsCompleted, setContactFormsCompleted }}>
      {children}
    </ContactFormsCompletedContext.Provider>
  );
};
