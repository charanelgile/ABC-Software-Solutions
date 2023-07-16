// Library Imports
import React from "react";

// Components ang Pages Imports
import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";

// Miscellaneous Imports
import "../styles/styles.css";
import "../styles/themes.css";

const WhoWeAre = () => {
  return (
    <div className="bgColorLightTheme txtColorLightTheme">
      <HeaderPages />

      <h1 className="text-center">About Page</h1>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
