// Library Imports
import React from "react";

// Components ang Pages Imports
import HeaderHome from "../components/HeaderHome";
import HowItWorks from "../components/HowItWorks";

// Miscellaneous Imports
import { HowItWorks as HowItWorksData } from "../data/HowItWorks";
import "../styles/styles.css";
import "../styles/themes.css";

const Home = () => {
  return (
    <div
      id="pageLandingHome"
      className="bgColorLightTheme txtColorLightTheme">
      <div
        id="homeBannerImage"
        className="bgFullWidthImage">
        <HeaderHome />

        <div id="homeBannerText">
          <h1 className="txtColorDarkTheme">
            Tailor-made software solutions for your growing business'
            needs.
          </h1>

          <p className="txtColorDarkTheme">
            Robust, powerful, and fully-customizable application for every
            department your company has, all in one place, available in
            mobile and web.
          </p>

          <hr className="text-white" />

          <div id="homeActionButtons">
            <a
              href="./Services"
              className="bgColorBrand txtColorDarkTheme btn">
              Get Started
            </a>

            <a
              href="./Home"
              className="bgColorBrand txtColorDarkTheme btn">
              Why Choose ABC?
            </a>

            <a
              href="./Pricing"
              className="txtColorDarkTheme btn border">
              View Pricing Plans
            </a>
          </div>
        </div>
      </div>

      {HowItWorksData.map((data) => {
        return (
          <HowItWorks
            key={data.howID}
            howDivArrangement={data.howDivArrangement}
            howID={data.howID}
            howTitle={data.howTitle}
            howText={data.howText}
            howLearnMore={data.howLearnMore}
            howImage={data.howImage}
            howImagePosition={data.howImagePosition}
          />
        );
      })}
    </div>
  );
};

export default Home;
