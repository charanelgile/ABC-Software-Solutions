// Library Imports
import React from "react";

// Components ang Pages Imports
import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";
import PricingCardsContent from "../data/PricingCardsContent";
// Miscellaneous Imports
import "../styles/styles.css";
import "../styles/themes.css";

const Services = () => {
  return (
    <div className="bgColorLightTheme txtColorLightTheme">
      <HeaderPages />

      <h1 className="text-center">This is the Services Page</h1>
        <PricingCardsContent />
      <Footer />
    </div>
  );
};

export default Services;
