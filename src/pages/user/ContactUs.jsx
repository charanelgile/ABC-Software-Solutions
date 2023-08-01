// Library Imports
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// Component Imports
import UserHeader from "../../components/user/UserHeader";
import BannerImage from "../../components/user/BannerImage";
import SubmitContactForm from "../../components/user/SubmitContactForm";
import Footer from "../../components/user/Footer";

// Others
import "../../styles/stylesContactUs.css";

const ContactUs = () => {
  return (
    <div>
      <UserHeader />

      <BannerImage
        bannerPageTitle="Contact Us"
        bannerPageText="Feel free to reach out anytime you like. We're happy to help."
        bannerImage='linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.75)),
        url("https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60")'
        bannerImageAlignment="70%"
      />

      <div
        id="divSearchFAQs"
        className="bg-primary flexRowCenter">
        <button
          id="btnSearchFAQs"
          className="bg-white text-dark-midtone btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>

        <input
          type="text"
          placeholder="Search FAQs..."
          className="text-dark-midtone form-control shadow-none"
        />
      </div>

      <SubmitContactForm />

      <div className="bg-dark-midtone">&nbsp;</div>

      <Footer />
    </div>
  );
};

export default ContactUs;
