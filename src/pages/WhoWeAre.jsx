// Library Imports
import React from "react";

// Components ang Pages Imports
import Header from "../components/Header";

// Miscellaneous Imports
import "../styles/styles.css";
import "../styles/themes.css";

const WhoWeAre = () => {
  return (
    <div className="bgColorLightTheme ">
      <Header />
      <p className="txtColorLightTheme">This is the About Page</p>
    </div>
  );
};

export default WhoWeAre;
