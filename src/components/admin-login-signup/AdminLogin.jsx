import React, { useRef } from "react";
import { Link } from "react-router-dom";

import Dashboard from "../../pages/Dashboard";

const AdminLogin = () => {
  const adminEmailRef = useRef(null);
  const adminPasswordRef = useRef(null);

  const allAdminAccounts = localStorage.getItem("allAdminAccounts")
    ? JSON.parse(localStorage.getItem("allAdminAccounts"))
    : [];

  let currentAdminAccount = localStorage.getItem("currentAdminAccount")
    ? JSON.parse(localStorage.getItem("currentAdminAccount"))
    : {};

  let matchingAdminAccount = [];

  let isAdminExisting = false;
  let isPasswordCorrect = false;

  const handleAdminLogin = (event) => {
    event.preventDefault();

    const tempAdminAccount = {
      adminEmail: adminEmailRef.current.value,
      adminPassword: adminPasswordRef.current.value,
    };

    matchingAdminAccount = allAdminAccounts.filter((admin) => {
      return admin.adminEmail === tempAdminAccount.adminEmail;
    });

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

        currentAdminAccount = allAdminAccounts.filter((admin) => {
          return admin.adminEmail === tempAdminAccount.adminEmail;
        });

        localStorage.setItem(
          "currentAdminAccount",
          JSON.stringify(currentAdminAccount)
        );

        window.location.reload();
      }
    }

    adminEmailRef.current.value = null;
    adminPasswordRef.current.value = null;

    isAdminExisting = false;
    isPasswordCorrect = false;
  };

  return localStorage.getItem("currentAdminAccount") ? (
    <Dashboard currentAdminAccount={currentAdminAccount} />
  ) : (
    <div>
      <form onSubmit={handleAdminLogin}>
        <label htmlFor="adminEmail">Email:</label>
        <input
          id="adminEmail"
          name="adminEmail"
          type="email"
          required
          className="form-control"
          ref={adminEmailRef}
        />

        <label htmlFor="adminPassword">Password:</label>
        <input
          id="adminPassword"
          name="adminPassword"
          type="password"
          required
          className="form-control"
          ref={adminPasswordRef}
        />

        <button
          id="adminLogin"
          type="submit"
          className="btn btn-warning w-25">
          Login
        </button>
      </form>

      <p className="m-0">Don't have an account yet?</p>

      <Link
        to="/AdminSignUp"
        className="btn btn-info w-25">
        Sign Up
      </Link>
    </div>
  );
};

export default AdminLogin;
