// Library Imports
import React from "react";

// Others
import {
  CompanyPerformanceData1,
  CompanyPerformanceData2,
} from "../../data/CompanyPerformanceData";

const CompanyPerformance = () => {
  return (
    <div
      id="divCompanyPerformance"
      className="bg-dark">
      <h5 className="text-center my-2 px-5 opacity-50">
        Company Performance
      </h5>

      <div className="divCompanyPerformanceCardGroup">
        {CompanyPerformanceData1.map((performance, index) => {
          return (
            <div
              key={index + 1}
              className="companyPerformanceCard bg-dark-midtone rounded">
              <h3 className="companyPerformanceTitle text-primary fw-bold m-0">
                {performance.title}
              </h3>

              <p className="companyPerformanceText text-light">
                {performance.text}
              </p>
            </div>
          );
        })}
      </div>

      <div className="divCompanyPerformanceCardGroup">
        {CompanyPerformanceData2.map((performance, index) => {
          return (
            <div
              key={index + 1}
              className="companyPerformanceCard bg-dark-midtone rounded">
              <h3 className="companyPerformanceTitle text-primary fw-bold m-0">
                {performance.title}
              </h3>

              <p className="companyPerformanceText text-light">
                {performance.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyPerformance;
