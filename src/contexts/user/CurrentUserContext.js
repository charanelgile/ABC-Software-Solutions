import React, { useState, useEffect } from "react";

// Context Object for Accessing and Updating Current User Account
export const CurrentUserContext = React.createContext();

export const CurrentUserContextProvider = ({ children }) => {
  // State Variable
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : []
  );

  // Side Effect
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
