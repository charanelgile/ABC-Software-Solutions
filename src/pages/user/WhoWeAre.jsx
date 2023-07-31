// Library Imports
import React from "react";

// Component Imports
import UserHeader from "../../components/user/UserHeader";
import BannerImage from "../../components/user/BannerImage";
import CompanyPerformance from "../../components/user/CompanyPerformance";
import FoundersProfiles from "../../components/user/FoundersProfiles";
import Footer from "../../components/user/Footer";

// Others
import { FoundersProfilesData } from "../../data/FoundersProfilesData";
import "../../styles/stylesWhoWeAre.css";

const WhoWeAre = () => {
  return (
    <div>
      <UserHeader />

      <BannerImage
        bannerPageTitle="Who We Are"
        bannerPageText="Get to know ABC Software Solutions more and find out
          what sets us apart from the rest."
        bannerImage='linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
          url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya21hdGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60")'
        bannerImageAlignment="35%"
      />

      <div
        id="divAboutTheCompany"
        className="divWhoWeAre bg-dark-midtone container-fluid">
        <h5 className="text-center my-3 px-5 opacity-50">
          About the Company
        </h5>

        <p>
          &nbsp;&nbsp;&nbsp;The idea behind the company goes way back in
          college where the founders first met. Although they came from
          different walks of life, they had more things in common than they
          realized &ndash; a passion for coding and developing stuff from
          nothing, an eagerness to contribute to the betterment and ease of
          life of Filipino communities, and a desire to be part of the
          driving force that pushes the boundaries of technological
          advancements in the Philippines.
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;So after graduating, they went straight to
          establishing what many consider today as one of the leading
          software companies in the country. With over 1,000 businesses
          (and growing) reaping the benefits of their tailored solutions,
          helping them accomplish more and reach even greater heights.
        </p>
      </div>

      <CompanyPerformance />

      <div
        id="divAboutTheFounders"
        className="divWhoWeAre bg-dark-midtone container-fluid">
        <h5 className="text-center my-3 px-5 opacity-50">
          About the Founders
        </h5>

        <p>
          &nbsp;&nbsp;&nbsp;Meet the{" "}
          <i className="text-secondary">A, B,</i> and{" "}
          <i className="text-secondary">C</i> of ABC Software Solutions
          &ndash; Anzarie, Bryan, and Charanel &ndash; the founding members
          of the company that started off as a small-scale web development
          studio, now turned multi-million peso corporation with partners
          like BPI, Grab, Coca-Cola, Ayala Land, and other big names in
          different industries in the country.
        </p>
      </div>

      <div
        id="foundersProfiles"
        className="bg-dark-midtone">
        {FoundersProfilesData.map((profile, index) => {
          return (
            <FoundersProfiles
              key={index + 1}
              profilePhoto={profile.profilePhoto}
              firstName={profile.firstName}
              lastName={profile.lastName}
              shortIntro={profile.shortIntro}
              email={profile.email}
              phone={profile.phone}
              linkedinURL={profile.linkedinURL}
              githubURL={profile.githubURL}
              facebookURL={profile.facebookURL}
              instagramURL={profile.instagramURL}
              portfolioURL={profile.portfolioURL}
            />
          );
        })}
      </div>

      <div className="bg-dark">&nbsp;</div>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
