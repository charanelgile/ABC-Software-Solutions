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
        <Route path="/UserLogin" element={<UserLogin />} />

        <Route path="/UserSignUp" element={<UserSignUp />} />

        <Route path="/UserEditAccount" element={<UserEditAccount />} />

        <Route path="/" element={<Home />} />

        <Route path="/Services" element={<Services />} />

        <Route
          path="/SubscriptionConfirmation"
          element={<SubscriptionConfirmation />}
        />

        <Route path="/ContactUs" element={<ContactUs />} />

        <Route path="/WhoWeAre" element={<WhoWeAre />} />

        <Route path="/AdminLogin" element={<AdminLogin />} />

        <Route path="/AdminSignUp" element={<AdminSignUp />} />

        <Route path="/AdminEditAccount" element={<AdminEditAccount />} />

        <Route path="/DashboardOverview" element={<DashboardOverview />} />

        <Route
          path="/DashboardSubmittedForms"
          element={<DashboardSubmittedForms />}
        />

        <Route
          path="/DashboardCompletedForms"
          element={<DashboardCompletedForms />}
        />

        <Route
          path="/DashboardSubscriptions"
          element={<DashboardSubscriptions />}
        />
      </Routes>
    </Router>
  );
}

export default App;
