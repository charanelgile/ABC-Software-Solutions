import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import Dashboard from "../../pages/Dashboard";

const AdminSignUp = () => {
  const adminFirstNameRef = useRef(null);
  const adminLastNameRef = useRef(null);
  const adminEmailRef = useRef(null);
  const adminPasswordRef = useRef(null);
  const adminConfirmPasswordRef = useRef(null);

  const [allAdminAccounts, setAllAdminAccounts] = useState(
    localStorage.getItem("allAdminAccounts")
      ? JSON.parse(localStorage.getItem("allAdminAccounts"))
      : []
  );

  let currentAdminAccount = localStorage.getItem("currentAdminAccount")
    ? JSON.parse(localStorage.getItem("currentAdminAccount"))
    : {};

  let matchingAdminAccount = [];

  let isAdminExisting = false;

  const handleAdminSignUp = (event) => {
    event.preventDefault();

    if (
      adminConfirmPasswordRef.current.value !==
      adminPasswordRef.current.value
    ) {
      alert("Password and Confirm Password should match");
    } else {
      const tempAdminAccount = {
        adminID: adminEmailRef.current.value,
        adminFirstName: adminFirstNameRef.current.value,
        adminLastName: adminLastNameRef.current.value,
        adminEmail: adminEmailRef.current.value,
        adminPassword: adminPasswordRef.current.value,
        adminConfirmPassword: adminConfirmPasswordRef.current.value,
      };

      console.log(`Is Admin Existing?`, isAdminExisting);

      console.log(`Temp Admin Account:\n`, tempAdminAccount);

      matchingAdminAccount = allAdminAccounts.filter((admin) => {
        return admin.adminEmail === tempAdminAccount.adminEmail;
      });

      matchingAdminAccount.forEach((admin) => {
        if (admin.adminEmail === tempAdminAccount.adminEmail) {
          isAdminExisting = true;
        } else {
          isAdminExisting = false;
        }
      });

      console.log(`Is Admin Existing?`, isAdminExisting);

      if (isAdminExisting) {
        alert("This email has already been used");
      } else {
        alert("Admin Account successfully created");

        setAllAdminAccounts([...allAdminAccounts, tempAdminAccount]);

        currentAdminAccount = tempAdminAccount;

        localStorage.setItem(
          "currentAdminAccount",
          JSON.stringify(Array(currentAdminAccount))
        );

        window.location.reload();
      }

      adminFirstNameRef.current.value = null;
      adminLastNameRef.current.value = null;
      adminEmailRef.current.value = null;
      adminPasswordRef.current.value = null;
      adminConfirmPasswordRef.current.value = null;

      isAdminExisting = false;
    }

    console.log(`Is Admin Existing?`, isAdminExisting);
    console.log(`Current Admin Account:\n`, currentAdminAccount);
  };

  useEffect(() => {
    localStorage.setItem(
      "allAdminAccounts",
      JSON.stringify(allAdminAccounts)
    );
  }, [allAdminAccounts]);

  return localStorage.getItem("currentAdminAccount") ? (
    <Dashboard currentAdminAccount={currentAdminAccount} />
  ) : (
    <div>
      <form onSubmit={handleAdminSignUp}>
        <label htmlFor="adminFirstName">First Name:</label>
        <input
          id="adminFirstName"
          name="adminFirstName"
          type="text"
          required
          className="form-control"
          ref={adminFirstNameRef}
        />

        <label htmlFor="adminLastName">Last Name:</label>
        <input
          id="adminLastName"
          name="adminLastName"
          type="text"
          required
          className="form-control"
          ref={adminLastNameRef}
        />

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

        <label htmlFor="adminConfirmPassword">Confirm Password:</label>
        <input
          id="adminConfirmPassword"
          name="adminConfirmPassword"
          type="password"
          required
          className="form-control"
          ref={adminConfirmPasswordRef}
        />

        <button
          id="adminSignUp"
          type="submit"
          className="btn btn-info w-25">
          Sign Up
        </button>
      </form>

      <p className="m-0">Already have an account?</p>

      <Link
        to="/AdminLogin"
        className="btn btn-warning w-25">
        Login
      </Link>
    </div>
  );
};

export default AdminSignUp;
