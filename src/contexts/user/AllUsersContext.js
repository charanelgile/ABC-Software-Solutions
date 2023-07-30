import React, { useState, useEffect } from "react";

// Context Object for Accessing and Updating All User Accounts
export const AllUsersContext = React.createContext();

export const AllUsersContextProvider = ({ children }) => {
  // State Variable
  const [allUsers, setAllUsers] = useState(
    localStorage.getItem("allUsers")
      ? JSON.parse(localStorage.getItem("allUsers"))
      : []
  );

  // Side Effect
  useEffect(() => {
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  }, [allUsers]);

  return (
    <AllUsersContext.Provider value={{ allUsers, setAllUsers }}>
      {children}
    </AllUsersContext.Provider>
  );
};
