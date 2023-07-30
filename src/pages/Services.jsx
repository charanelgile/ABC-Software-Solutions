// Library Imports
import React from "react";

// Components ang Pages Imports
import HeaderPages from "../components/HeaderPages";
import BannerImage from "../components/BannerImage";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";
// Miscellaneous Imports
import "../styles/styles.css";
import "../styles/themes.css";
import ServiceContent from "../components/ServiceContent";

const Services = () => {
  return (
    <div className="bgColorLightTheme txtColorLightTheme">
      <HeaderPages />

      <BannerImage
        imageYaxis="50%"
        imageURL='linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.65)),
          url("https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cXVhbGl0eSUyMHNlcnZpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60")'
        pageTitle="Services"
        pageText="5 steps is all it takes to experience quality software that drives growth and efficiency all-throughout your business"
      />


   <ServiceContent />
 
      
      <Technologies />

      <Footer />
    </div>
  );
};

export default Services;
