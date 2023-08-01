// Library Imports
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Page Imports - Users
import Home from "./pages/user/Home";
import Services from "./pages/user/Services";
import ContactUs from "./pages/user/ContactUs";
import WhoWeAre from "./pages/user/WhoWeAre";
// Page Imports - Admin
import DashboardOverview from "./pages/admin/DashboardOverview";
import DashboardSubmittedForms from "./pages/admin/DashboardSubmittedForms";
import DashboardCompletedForms from "./pages/admin/DashboardCompletedForms";
import DashboardSubscriptions from "./pages/admin/DashboardSubscriptions";

// Component Imports - Users
import UserLogin from "./components/user/UserLogin";
import UserSignUp from "./components/user/UserSignUp";
import UserEditAccount from "./components/user/UserEditAccount";
import SubscriptionConfirmation from "./components/user/SubscriptionConfirmation";
// Component Imports - Admin
import AdminLogin from "./components/admin/AdminLogin";
import AdminSignUp from "./components/admin/AdminSignUp";
import AdminEditAccount from "./components/admin/AdminEditAccount";

// Others
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/ABC-Software-Solutions/UserLogin"
          element={<UserLogin />}
        />

        <Route
          path="/ABC-Software-Solutions/UserSignUp"
          element={<UserSignUp />}
        />

        <Route
          path="/ABC-Software-Solutions/UserEditAccount"
          element={<UserEditAccount />}
        />

        <Route path="/ABC-Software-Solutions/" element={<Home />} />

        <Route path="/ABC-Software-Solutions/Services" element={<Services />} />

        <Route
          path="/ABC-Software-Solutions/SubscriptionConfirmation"
          element={<SubscriptionConfirmation />}
        />

        <Route
          path="/ABC-Software-Solutions/ContactUs"
          element={<ContactUs />}
        />

        <Route path="/ABC-Software-Solutions/WhoWeAre" element={<WhoWeAre />} />

        <Route
          path="/ABC-Software-Solutions/AdminLogin"
          element={<AdminLogin />}
        />

        <Route
          path="/ABC-Software-Solutions/AdminSignUp"
          element={<AdminSignUp />}
        />

        <Route
          path="/ABC-Software-Solutions/AdminEditAccount"
          element={<AdminEditAccount />}
        />

        <Route
          path="/ABC-Software-Solutions/DashboardOverview"
          element={<DashboardOverview />}
        />

        <Route
          path="/ABC-Software-Solutions/DashboardSubmittedForms"
          element={<DashboardSubmittedForms />}
        />

        <Route
          path="/ABC-Software-Solutions/DashboardCompletedForms"
          element={<DashboardCompletedForms />}
        />

        <Route
          path="/ABC-Software-Solutions/DashboardSubscriptions"
          element={<DashboardSubscriptions />}
        />
      </Routes>
    </Router>
  );
}

export default App;
