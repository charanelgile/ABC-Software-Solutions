import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AllAdminsContext } from "../../contexts/admin/AllAdminsContext";
import { CurrentAdminContext } from "../../contexts/admin/CurrentAdminContext";

import AdminLogin from "./AdminLogin";

const AdminHeader = () => {
  const { allAdmins } = useContext(AllAdminsContext);
  const { currentAdmin, setCurrentAdmin } = useContext(
    CurrentAdminContext
  );

  const handleAdminLogout = () => {
    setCurrentAdmin([]);

    window.location.reload();
  };

  return (
    <div>
      <h5>Admin Header</h5>

      {allAdmins.length > 0 && currentAdmin.length > 0 ? (
        <div>
          <Link
            to="/AdminEditAccount"
            className="btn btn-info">
            Edit Account
          </Link>

          <button
            className="btn btn-danger"
            onClick={handleAdminLogout}>
            Logout
          </button>
        </div>
      ) : (
        <AdminLogin />
      )}
    </div>
  );
};

export default AdminHeader;
