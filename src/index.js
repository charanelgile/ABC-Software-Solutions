import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Admin Contexts
import { AllAdminsContextProvider } from "./contexts/admin/AllAdminsContext";
import { CurrentAdminContextProvider } from "./contexts/admin/CurrentAdminContext";

// User Contexts
import { AllUsersContextProvider } from "./contexts/user/AllUsersContext";
import { CurrentUserContextProvider } from "./contexts/user/CurrentUserContext";

// Contact Form Contexts
import { ContactFormsSubmittedContextProvider } from "./contexts/admin/ContactFormsSubmittedContext";
import { ContactFormsCompletedContextProvider } from "./contexts/admin/ContactFormsCompletedContext";

// Subscriptions Context
import { SubscriptionsContextProvider } from "./contexts/user/SubscriptionsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AllAdminsContextProvider>
      <CurrentAdminContextProvider>
        <AllUsersContextProvider>
          <CurrentUserContextProvider>
            <ContactFormsSubmittedContextProvider>
              <ContactFormsCompletedContextProvider>
                <SubscriptionsContextProvider>
                  <App />
                </SubscriptionsContextProvider>
              </ContactFormsCompletedContextProvider>
            </ContactFormsSubmittedContextProvider>
          </CurrentUserContextProvider>
        </AllUsersContextProvider>
      </CurrentAdminContextProvider>
    </AllAdminsContextProvider>
  </React.StrictMode>
);
