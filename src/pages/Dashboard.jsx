import React from "react";
import SubmitContactUsForm from "../components/contact-us/SubmitContactUsForm";

const Dashboard = (props) => {
  const { currentAdminAccount } = props;

  console.log(currentAdminAccount);

  return (
    <div>
      <SubmitContactUsForm />
    </div>
  );
};

export default Dashboard;
