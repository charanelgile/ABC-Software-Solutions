// Library Imports
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faUsers,
  faPenNib,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

// Component Imports
import UserHeader from "../../components/user/UserHeader";
import BannerImage from "../../components/user/BannerImage";
import ServiceTypes from "../../components/user/ServiceTypes";
import Technologies from "../../components/user/Technologies";
import SubscriptionPlans from "../../components/user/SubscriptionPlans";
import Footer from "../../components/user/Footer";

// Others
import { ServiceTypesData } from "../../data/ServiceTypesData";
import "../../styles/styleServices.css";

const Services = () => {
  return (
    <div>
      <UserHeader />

      <BannerImage
        bannerPageTitle="Services"
        bannerPageText="5 steps is all it takes to experience quality software that drives growth and efficiency all-throughout your business"
        bannerImage='linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.65)),
          url("https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cXVhbGl0eSUyMHNlcnZpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60")'
        bannerImageAlignment="50%"
      />

      <div
        id="serviceTypes"
        className="py-3">
        <ServiceTypes
          serviceIcon={<FontAwesomeIcon icon={faCode} />}
          serviceIconColor="bg-primary rounded"
          serviceCategory="Development"
          serviceData={ServiceTypesData[0]}
        />

        <ServiceTypes
          serviceIcon={<FontAwesomeIcon icon={faUsers} />}
          serviceIconColor="bg-secondary text-dark rounded"
          serviceCategory="Outsourcing"
          serviceData={ServiceTypesData[1]}
        />

        <ServiceTypes
          serviceIcon={<FontAwesomeIcon icon={faPenNib} />}
          serviceIconColor="bg-tertiary rounded"
          serviceCategory="Design"
          serviceData={ServiceTypesData[2]}
        />

        <ServiceTypes
          serviceIcon={<FontAwesomeIcon icon={faChartLine} />}
          serviceIconColor="bg-info text-dark rounded"
          serviceCategory="Strategy"
          serviceData={ServiceTypesData[3]}
        />
      </div>

      <SubscriptionPlans />

      <Technologies />

      <div className="bg-dark">&nbsp;</div>

      <Footer />
    </div>
  );
};

export default Services;
