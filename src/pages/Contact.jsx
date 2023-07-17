// Library Imports
import React from "react";

// Components ang Pages Imports
import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";
import ContactUs from "../components/contact";
// Miscellaneous Imports
import "../styles/styles.css";
import "../styles/themes.css";

const Contact = () => {
  return (
  
    <div className="bgColorLightTheme txtColorLightTheme">
      <HeaderPages />

      <h1 className="text-center">This is the Contact Page</h1>
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default Contact;
