import React, { useState, useEffect } from "react";

// Context Object for Accessing and Updating Subscriptions
export const SubscriptionsContext = React.createContext();

export const SubscriptionsContextProvider = ({ children }) => {
  // State Variable
  const [subscriptions, setSubscriptions] = useState(
    localStorage.getItem("subscriptions")
      ? JSON.parse(localStorage.getItem("subscriptions"))
      : []
  );

  // Side Effect
  useEffect(() => {
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
  }, [subscriptions]);

  return (
    <SubscriptionsContext.Provider
      value={{ subscriptions, setSubscriptions }}>
      {children}
    </SubscriptionsContext.Provider>
  );
};
