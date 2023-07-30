import React, { useState, useEffect } from "react";

// Context Object for Accessing and Updating All Admin Accounts
export const AllAdminsContext = React.createContext();

export const AllAdminsContextProvider = ({ children }) => {
  // State Variable
  const [allAdmins, setAllAdmins] = useState(
    localStorage.getItem("allAdmins")
      ? JSON.parse(localStorage.getItem("allAdmins"))
      : []
  );

  // Side Effect
  useEffect(() => {
    localStorage.setItem("allAdmins", JSON.stringify(allAdmins));
  }, [allAdmins]);

  return (
    <AllAdminsContext.Provider value={{ allAdmins, setAllAdmins }}>
      {children}
    </AllAdminsContext.Provider>
  );
};
