// Library Imports
import React from "react";

// Components ang Pages Imports
import HeaderPages from "../components/HeaderPages";
import BannerImage from "../components/BannerImage";
import Footer from "../components/Footer";

// Miscellaneous Imports
import "../styles/styles.css";
import "../styles/themes.css";

const WhoWeAre = () => {
  return (
    <div className="bgColorLightTheme txtColorLightTheme">
      <HeaderPages />

      <BannerImage
        imageYaxis="35%"
        imageURL='linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
          url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya21hdGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60")'
        pageTitle="Who We Are"
        pageText="Get to know ABC Software Solutions more and find out what sets us
        apart from the rest."
      />

      <Footer />
    </div>
  );
};

export default WhoWeAre;
