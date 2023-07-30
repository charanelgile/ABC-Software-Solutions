import React, { useContext, useRef } from "react";
import AdminLogin from "./AdminLogin";
import { AllAdminsContext } from "../../contexts/admin/AllAdminsContext";
import { CurrentAdminContext } from "../../contexts/admin/CurrentAdminContext";

const AdminEditAccount = () => {
  const { allAdmins, setAllAdmins } = useContext(AllAdminsContext);
  const { currentAdmin, setCurrentAdmin } = useContext(
    CurrentAdminContext
  );

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
    const retainedAdmins = JSON.parse(
      localStorage.getItem("allAdmins")
    ).filter((admin) => {
      return admin.adminID !== currentAdmin[0].adminID;
    });

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

  return allAdmins.length === 0 && currentAdmin.length === 0 ? (
    <AdminLogin />
  ) : (
    <div>
      <h1>Admin Edit Account</h1>

      <form onSubmit={handleSaveEdits}>
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

        <p className="text-danger">
          For verification purposes, please enter your password.
        </p>

        <input
          id="adminPassword"
          name="adminPassword"
          type="password"
          required
          className="form-control"
          placeholder="Enter your password for verification"
          ref={adminPasswordRef}
        />

        <button
          id="btnSave"
          type="submit"
          className="btn btn-warning w-25">
          Save
        </button>
      </form>
    </div>
  );
};

export default AdminEditAccount;
