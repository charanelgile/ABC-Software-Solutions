// Library Imports
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

// Component Imports
import AdminHeader from "./AdminHeader";
import AdminLogin from "./AdminLogin";
import AdminSignUp from "./AdminSignUp";

// Context Imports
import { AllAdminsContext } from "../../contexts/admin/AllAdminsContext";
import { CurrentAdminContext } from "../../contexts/admin/CurrentAdminContext";

// Others
import "../../styles/stylesEditLoginSignUp.css";

const AdminEditAccount = () => {
  const { allAdmins, setAllAdmins } = useContext(AllAdminsContext);
  const { currentAdmin, setCurrentAdmin } = useContext(CurrentAdminContext);

  const adminFirstNameRef = useRef(null);
  const adminLastNameRef = useRef(null);
  const adminEmailRef = useRef(null);
  const adminPasswordRef = useRef(null);

  let adminAccountEdits = {};

  // Save Edits
  const handleSaveEdits = (event) => {
    event.preventDefault();

    adminAccountEdits = {
      adminID: "",
      adminFirstName: adminFirstNameRef.current.value,
      adminLastName: adminLastNameRef.current.value,
      adminEmail: adminEmailRef.current.value,
      adminPassword: adminPasswordRef.current.value,
    };

    const matchingAdminAccount = currentAdmin.map((admin) => {
      if (admin.adminPassword === adminAccountEdits.adminPassword) {
        alert("Admin account successfully updated");
        return {
          ...admin,
          adminFirstName: adminAccountEdits.adminFirstName,
          adminLastName: adminAccountEdits.adminLastName,
          adminEmail: adminAccountEdits.adminEmail,
        };
      } else {
        alert("Incorrect password");
      }

      return admin;
    });

    // Remove the old details of the Current Admin from the List of All Admins
    const retainedAdmins = JSON.parse(localStorage.getItem("allAdmins")).filter(
      (admin) => {
        return admin.adminID !== currentAdmin[0].adminID;
      }
    );

    setAllAdmins(retainedAdmins);

    // Update the stored Admin User with their new details
    setCurrentAdmin([...matchingAdminAccount]);

    // Update the stored List of All Admins, adding the new details of the Current Admin
    setAllAdmins([...retainedAdmins, matchingAdminAccount[0]]);

    adminFirstNameRef.current.value = null;
    adminLastNameRef.current.value = null;
    adminEmailRef.current.value = null;
    adminPasswordRef.current.value = null;
  };

  return allAdmins.length === 0 ? (
    <AdminSignUp />
  ) : currentAdmin.length === 0 ? (
    <AdminLogin />
  ) : (
    <div>
      <AdminHeader />

      <form id="frmAdminEditAccount" onSubmit={handleSaveEdits}>
        <h5 className="text-light text-center mb-4 px-5 opacity-50">
          Edit <span className="text-secondary">admin</span> account details
        </h5>

        <label htmlFor="adminFirstName">First Name:</label>
        <input
          id="adminFirstName"
          name="adminFirstName"
          type="text"
          required
          placeholder="Enter updated First Name"
          className="form-control shadow-none"
          ref={adminFirstNameRef}
        />

        <label htmlFor="adminLastName">Last Name:</label>
        <input
          id="adminLastName"
          name="adminLastName"
          type="text"
          required
          placeholder="Enter updated Last Name"
          className="form-control shadow-none"
          ref={adminLastNameRef}
        />

        <label htmlFor="adminEmail">Email:</label>
        <input
          id="adminEmail"
          name="adminEmail"
          type="email"
          required
          placeholder="Enter updated Email Address"
          className="form-control shadow-none"
          ref={adminEmailRef}
        />

        <label htmlFor="adminPassword" className="text-secondary">
          For verification purposes, please enter your password below.
        </label>

        <input
          id="adminPassword"
          name="adminPassword"
          type="password"
          required
          className="form-control shadow-none"
          placeholder="Enter your password for verification"
          ref={adminPasswordRef}
        />

        <div className="flexRowBetween">
          <button
            id="btnSave"
            type="submit"
            className="bg-primary text-light btn py-2">
            <FontAwesomeIcon icon={faCheck} />
            &nbsp;&nbsp;Save
          </button>

          <Link
            to="/ABC-Software-Solutions/DashboardOverview"
            className="bg-tertiary text-light btn py-2">
            <FontAwesomeIcon icon={faXmark} />
            &nbsp;&nbsp;Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AdminEditAccount;
