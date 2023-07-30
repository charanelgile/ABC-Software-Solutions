// Library Imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page Imports
import Home from "./pages/user/Home";
import Services from "./pages/user/Services";
import ContactUs from "./pages/user/ContactUs";

// Component Imports - Users
import UserLogin from "./components/user/UserLogin";
import UserSignUp from "./components/user/UserSignUp";
import UserEditAccount from "./components/user/UserEditAccount";
import SubscriptionConfirmation from "./components/user/SubscriptionConfirmation";
// Component Imports - Admin
import AdminLogin from "./components/admin/AdminLogin";
import AdminSignUp from "./components/admin/AdminSignUp";
import AdminEditAccount from "./components/admin/AdminEditAccount";
import Dashboard from "./pages/admin/Dashboard";

// Others
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/UserLogin"
          element={<UserLogin />}
        />

        <Route
          path="UserSignUp"
          element={<UserSignUp />}
        />

        <Route
          path="/UserEditAccount"
          element={<UserEditAccount />}
        />

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/Services"
          element={<Services />}
        />

        <Route
          path="/SubscriptionConfirmation"
          element={<SubscriptionConfirmation />}
        />

        <Route
          path="/ContactUs"
          element={<ContactUs />}
        />

        <Route
          path="/AdminLogin"
          element={<AdminLogin />}
        />

        <Route
          path="/AdminSignUp"
          element={<AdminSignUp />}
        />

        <Route
          path="/AdminEditAccount"
          element={<AdminEditAccount />}
        />

        <Route
          path="/Dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </Router>
  );
}

export default App;
