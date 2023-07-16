// Library Imports
import React from "react";

// Components ang Pages Imports
import Header from "../components/Header";

// Miscellaneous Imports
import "../styles/styles.css";
import "../styles/themes.css";

const Home = () => {
  return (
    <div
      id="pageLandingHome"
      className="bgColorLightTheme">
      <div
        id="homeBannerImage"
        className="bgFullWidthImage">
        <Header />

        <div
          id="homeBannerText"
          className="txtColorDarkTheme">
          <h1>
            Tailor-made software solutions for your growing business'
            needs.
          </h1>

          <p>
            Robust, powerful, and fully-customizable application for every
            department your company has, all in one place, available in
            mobile and web.
            <hr />
          </p>

          <div id="homeActionButtons">
            <button className="bgColorBrand txtColorDarkTheme btn">
              Get Started
            </button>
            <button className="bgColorBrand txtColorDarkTheme btn">
              How It Works
            </button>
            <button className="txtColorDarkTheme btn border">
              View Pricing Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
