// Library Imports
import React from "react";

const ServiceTypes = ({
  serviceIcon,
  serviceIconColor,
  serviceCategory,
  serviceData,
}) => {
  return (
    <div className="serviceTypeCards flexRowEvenly">
      <div className={serviceIconColor}>
        <div className="serviceTypeIcons text-center rounded">
          <p>{serviceIcon}</p>
        </div>
      </div>

      <div className="serviceTypeLists">
        <p id="serviceTypeCategory">
          <b>{serviceCategory}</b>
        </p>

        {serviceData.map((data, index) => {
          return <p key={index + 1}>&bull; {data}</p>;
        })}
      </div>
    </div>
  );
};

export default ServiceTypes;
