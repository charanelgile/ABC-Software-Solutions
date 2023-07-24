// Library Imports
import React from "react";

// Components ang Pages Imports
import HeaderPages from "../components/HeaderPages";
import BannerImage from "../components/BannerImage";
import SellingPoint from "../components/SellingPoint";
import ProfileCard from "../components/ProfileCard";
import GivingBack from "../components/GivingBack";
import LifeAtABC from "../components/LifeAtABC";
import Footer from "../components/Footer";

// Miscellaneous Imports
import { ProfileCardsData } from "../data/ProfileCardsData";
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

      <div
        id="divAboutTheCompany"
        className="divWhoWeAre container-fluid">
        <h3>About the Company</h3>

        <hr />

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

      <SellingPoint />

      <div
        id="divAboutTheFounders"
        className="divWhoWeAre container-fluid">
        <h3>About the Founders</h3>

        <hr />

        <p>
          &nbsp;&nbsp;&nbsp;Meet the <i>A, B,</i> and <i>C</i> of ABC
          Software Solutions &ndash; Anzarie, Bryan, and Charanel &ndash;
          the founding members of the company that started off as a
          small-scale web development studio, now turned multi-million peso
          corporation with partners like BPI, GCash, IBM, Shell, and other
          big names in different industries in the country.
        </p>
      </div>

      <div
        id="divProfileCards"
        className="flexRowEven">
        {ProfileCardsData.map((profile, index) => {
          return (
            <ProfileCard
              key={index + 1}
              profilePhoto={profile.profilePhoto}
              fullName={profile.fullName}
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

      <div
        id="divGivingBack"
        className="divWhoWeAre container-fluid">
        <h3>Giving Back to the Community</h3>

        <hr />

        <GivingBack
          image1='linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)),
          url("https://images.unsplash.com/photo-1556762163-542910c8765d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA3fHxmYXJtZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60")'
          image2='linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
          url("https://images.unsplash.com/photo-1573894998033-c0cef4ed722b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxraWRzJTIwY29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60")'
          image3='linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
          url("https://images.unsplash.com/photo-1628191011227-522c7c3f0af9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHBhY2tlZCUyMGx1bmNofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60")'
        />
      </div>

      <div
        id="divLifeAtABC"
        className="divWhoWeAre container-fluid">
        <h3>#LifeAtABC</h3>

        <hr />

        <p>
          &nbsp;&nbsp;&nbsp;Hear our employees' stories about how the
          company has helped them achieve their goals and succeed in life
          all while being a part of our diverse, talented, and passionate
          team so you can see for yourself what makes #LifeAtABC amazing
          and rewarding, at the same time.
        </p>

        <LifeAtABC />
      </div>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
