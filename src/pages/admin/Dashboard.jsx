import React, { useContext } from "react";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminLogin from "../../components/admin/AdminLogin";
import DisplaySubscriptions from "../../components/admin/DisplaySubscriptions";
import DisplayContactForms from "../../components/admin/DisplayContactForms";
import CompletedContactForms from "../../components/admin/CompletedContactForms";

import { CurrentAdminContext } from "../../contexts/admin/CurrentAdminContext";

const Dashboard = () => {
  const { currentAdmin } = useContext(CurrentAdminContext);

  return (
    <div>
      <h1>Dashboard</h1>

      {currentAdmin.length === 0 ? (
        <AdminLogin />
      ) : (
        <div>
          <AdminHeader />

          <DisplayContactForms />

          <CompletedContactForms />

          <DisplaySubscriptions />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
