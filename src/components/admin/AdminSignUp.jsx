import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { AllAdminsContext } from "../../contexts/admin/AllAdminsContext";
import { CurrentAdminContext } from "../../contexts/admin/CurrentAdminContext";

import Dashboard from "../../pages/admin/Dashboard";

const AdminSignUp = () => {
  const adminFirstNameRef = useRef(null);
  const adminLastNameRef = useRef(null);
  const adminEmailRef = useRef(null);
  const adminPasswordRef = useRef(null);
  const adminConfirmPasswordRef = useRef(null);

  const { allAdmins, setAllAdmins } = useContext(AllAdminsContext);
  const { currentAdmin, setCurrentAdmin } = useContext(
    CurrentAdminContext
  );

  console.log(allAdmins);

  console.log(currentAdmin);

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
        adminID: Date.now(),
        adminFirstName: adminFirstNameRef.current.value,
        adminLastName: adminLastNameRef.current.value,
        adminEmail: adminEmailRef.current.value,
        adminPassword: adminPasswordRef.current.value,
        adminConfirmPassword: adminConfirmPasswordRef.current.value,
      };

      console.log(`Is Admin Existing?`, isAdminExisting);

      console.log(`Temp Admin Account:\n`, tempAdminAccount);

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
      });

      console.log(`Is Admin Existing?`, isAdminExisting);

      if (isAdminExisting) {
        alert("This email has already been used");
      } else {
        alert("Admin Account successfully created");

        setAllAdmins([...allAdmins, tempAdminAccount]);

        setCurrentAdmin(Array(tempAdminAccount));

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
    console.log(`Current Admin Account:\n`, currentAdmin);
  };

  return allAdmins.length > 0 && currentAdmin.length > 0 ? (
    <Dashboard />
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
