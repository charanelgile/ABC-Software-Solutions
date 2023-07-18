// Library Imports
import React from "react";

// Components ang Pages Imports
import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";

// Miscellaneous Imports
import "../styles/styles.css";
import "../styles/themes.css";
import RatingsCard from "../data/RatingsCard";

const Testimonials = () => {
  return (
    <div className="bgColorLightTheme txtColorLightTheme">
      <HeaderPages />

      <h1 className="text-center">Testimonials Page</h1>


      <RatingsCard />

      <Footer />
    </div>
  );
};

export default Testimonials;
