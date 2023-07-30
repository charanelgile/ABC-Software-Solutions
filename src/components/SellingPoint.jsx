import React from "react";
import {
  SellingPointDataA,
  SellingPointDataB,
} from "../data/SellingPointData";

function SellingPoint() {
  return (
    <>
      <div className="divSellingPoints">
        {SellingPointDataA.map((sellingpoint) => {
          return (
            <div className="rounded">
              <h3 className="titleSellingPoint txtColorBrand">
                {sellingpoint.title}
              </h3>

              <p className="textSellingPoint">{sellingpoint.text}</p>
            </div>
          );
        })}
      </div>

      <div className="divSellingPoints">
        {SellingPointDataB.map((sellingpoint) => {
          return (
            <div className="rounded">
              <h3 className="titleSellingPoint txtColorBrand">
                {sellingpoint.title}
              </h3>

              <p className="textSellingPoint txtColorLightTheme">
                {sellingpoint.text}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SellingPoint;
