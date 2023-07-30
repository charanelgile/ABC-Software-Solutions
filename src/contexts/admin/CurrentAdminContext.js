import React, { useState, useEffect } from "react";

// Context Object for Accessing and Updating Current Admin Account
export const CurrentAdminContext = React.createContext();

export const CurrentAdminContextProvider = ({ children }) => {
  // State Variable
  const [currentAdmin, setCurrentAdmin] = useState(
    localStorage.getItem("currentAdmin")
      ? JSON.parse(localStorage.getItem("currentAdmin"))
      : []
  );

  // Side Effect
  useEffect(() => {
    localStorage.setItem("currentAdmin", JSON.stringify(currentAdmin));
  }, [currentAdmin]);

  return (
    <CurrentAdminContext.Provider
      value={{ currentAdmin, setCurrentAdmin }}>
      {children}
    </CurrentAdminContext.Provider>
  );
};
