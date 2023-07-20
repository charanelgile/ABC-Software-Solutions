// Library Imports
import React from "react";

// Components ang Pages Imports
import HeaderPages from "../components/HeaderPages";
import BannerImage from "../components/BannerImage";
import Footer from "../components/Footer";
import ContactUs from "../components/contact";
import Map from "../components/contact/Map";
// Miscellaneous Imports
import "../styles/styles.css";
import "../styles/themes.css";

const Contact = () => {
  return (
    <div className="bgColorLightTheme txtColorLightTheme">
      <HeaderPages />

      <BannerImage
        imageYaxis="70%"
        imageURL='linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.75)),
          url("https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60")'
        pageTitle="Contact Us"
        pageText="Feel free to reach out anytime you like. We're happy to help."
      />
      <Map/>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Contact;
