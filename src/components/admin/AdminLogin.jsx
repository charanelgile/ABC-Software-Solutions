import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { AllAdminsContext } from "../../contexts/admin/AllAdminsContext";
import { CurrentAdminContext } from "../../contexts/admin/CurrentAdminContext";

import Dashboard from "../../pages/admin/Dashboard";

const AdminLogin = () => {
  const adminEmailRef = useRef(null);
  const adminPasswordRef = useRef(null);

  const { allAdmins } = useContext(AllAdminsContext);
  const { currentAdmin, setCurrentAdmin } = useContext(
    CurrentAdminContext
  );

  let matchingAdminAccount = [];

  let isAdminExisting = false;
  let isPasswordCorrect = false;

  const handleAdminLogin = (event) => {
    event.preventDefault();

    const tempAdminAccount = {
      adminEmail: adminEmailRef.current.value,
      adminPassword: adminPasswordRef.current.value,
    };

    matchingAdminAccount = JSON.parse(
      localStorage.getItem("allAdmins")
    ).filter((admin) => {
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
    <Dashboard />
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
