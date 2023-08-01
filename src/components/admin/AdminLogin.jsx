// Library Imports
import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";

// Component Imports
import DashboardOverview from "../../pages/admin/DashboardOverview";

// Context Imports
import { AllAdminsContext } from "../../contexts/admin/AllAdminsContext";
import { CurrentAdminContext } from "../../contexts/admin/CurrentAdminContext";

// Others
import "../../styles/stylesEditLoginSignUp.css";

const AdminLogin = () => {
  const adminEmailRef = useRef(null);
  const adminPasswordRef = useRef(null);

  const { allAdmins } = useContext(AllAdminsContext);
  const { currentAdmin, setCurrentAdmin } = useContext(CurrentAdminContext);

  let matchingAdminAccount = [];

  let isAdminExisting = false;
  let isPasswordCorrect = false;

  const handleAdminLogin = (event) => {
    event.preventDefault();

    const tempAdminAccount = {
      adminEmail: adminEmailRef.current.value,
      adminPassword: adminPasswordRef.current.value,
    };

    matchingAdminAccount = JSON.parse(localStorage.getItem("allAdmins")).filter(
      (admin) => {
        return admin.adminEmail === tempAdminAccount.adminEmail;
      }
    );

    matchingAdminAccount.forEach((admin) => {
      if (admin.adminEmail === tempAdminAccount.adminEmail) {
        isAdminExisting = true;
      } else {
        isAdminExisting = false;
      }

      if (admin.adminPassword === tempAdminAccount.adminPassword) {
        isPasswordCorrect = true;
      } else {
        isPasswordCorrect = false;
      }
    });

    console.log(matchingAdminAccount);
    console.log(isAdminExisting);
    console.log(isPasswordCorrect);

    if (!isAdminExisting) {
      alert("No admin account matches this email");
    } else {
      if (!isPasswordCorrect) {
        alert("Incorrect Password");
      } else {
        alert("Login successful");

        setCurrentAdmin(
          allAdmins.filter((admin) => {
            return admin.adminEmail === tempAdminAccount.adminEmail;
          })
        );

        window.location.reload();
      }
    }

    adminEmailRef.current.value = null;
    adminPasswordRef.current.value = null;

    isAdminExisting = false;
    isPasswordCorrect = false;
  };

  return allAdmins.length > 0 && currentAdmin.length > 0 ? (
    <DashboardOverview />
  ) : (
    <div id="divAdminLogin">
      <h5 className="text-light text-center mb-4 opacity-75">
        Sign in to your <span className="text-secondary">admin</span> account
      </h5>

      <form
        id="frmAdminLogin"
        className="bg-dark-midtone"
        onSubmit={handleAdminLogin}>
        <label htmlFor="adminEmail">Email:</label>
        <input
          id="adminEmail"
          name="adminEmail"
          type="email"
          required
          className="form-control shadow-none"
          ref={adminEmailRef}
        />

        <label htmlFor="adminPassword">Password:</label>
        <input
          id="adminPassword"
          name="adminPassword"
          type="password"
          required
          className="form-control shadow-none"
          ref={adminPasswordRef}
        />

        <button
          id="btnAdminLogin"
          type="submit"
          className="bg-primary text-light btn w-100">
          Login
        </button>
      </form>

      <div className="suggestLoginOrSignUp bg-dark-midtone flexRowCenter">
        <p className="opacity-50">Don't have an account yet?&nbsp;&nbsp;</p>

        <Link
          to="/ABC-Software-Solutions/AdminSignUp"
          className="btnSignUp text-secondary text-decoration-none opacity-75">
          Sign Up
        </Link>
      </div>

      <div className="extraLinks flexRowAround">
        <a href="#!" className="text-primary text-decoration-none">
          <small>Terms of Use</small>
        </a>

        <a href="#!" className="text-primary text-decoration-none">
          <small>Privacy Policy</small>
        </a>

        <a href="#!" className="text-light text-decoration-none opacity-50">
          <small>Contact Support</small>
        </a>
      </div>
    </div>
  );
};

export default AdminLogin;
