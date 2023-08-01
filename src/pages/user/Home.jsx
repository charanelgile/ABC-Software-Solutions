// Library Imports
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

// Component Imports
import UserHeader from "../../components/user/UserHeader";
import FiveStepSolution from "../../components/user/FiveStepSolution";
import Partners from "../../components/user/Partners";
import TestimonialsService from "../../components/user/TestimonialsService";
import Footer from "../../components/user/Footer";

// Context Imports
import { CurrentUserContext } from "../../contexts/user/CurrentUserContext";

// Others
import {
  FiveStepSolutionDataOdd,
  FiveStepSolutionDataEven,
} from "../../data/FiveStepSolutionData";
import { TestimonialsServiceData } from "../../data/TestimonialsServiceData";
import "../../styles/stylesHome.css";

const Home = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div>
      <div id="homeBannerImage" className="bgSizeCover">
        <UserHeader />

        <div id="homeBannerText">
          <h1 className="text-light fw-bold">
            Tailor-made software solutions for your growing business' needs.
          </h1>

          <p className="text-light">
            Robust and fully-customizable powerful seamless application for
            every department that your company has, all combined in one
            intuitive space and available in mobile and web.
          </p>

          <Link
            to={
              currentUser.length > 0
                ? "/ABC-Software-Solutions/Services"
                : "/ABC-Software-Solutions/UserLogin"
            }
            className="text-light bg-transparent fw-bold btn border border-1">
            Get Started
          </Link>
        </div>
      </div>

      <div id="div5EasySteps" className="bg-primary text-center">
        <p>
          Experience high-quality service and cross-platform system in 5 easy
          steps
        </p>
        <FontAwesomeIcon
          className="doubleArrowDown"
          icon={faAnglesDown}
          size="2x"
        />
      </div>

      <FiveStepSolution
        data={FiveStepSolutionDataOdd[0]}
        bgColor="bg-dark-midtone"
        txtColor="text-secondary"
      />

      <FiveStepSolution
        data={FiveStepSolutionDataEven[0]}
        txtColor="text-primary"
      />

      <FiveStepSolution
        data={FiveStepSolutionDataOdd[1]}
        bgColor="bg-dark-midtone"
        txtColor="text-secondary"
      />

      <FiveStepSolution
        data={FiveStepSolutionDataEven[1]}
        txtColor="text-primary"
      />

      <FiveStepSolution
        data={FiveStepSolutionDataOdd[2]}
        bgColor="bg-dark-midtone"
        txtColor="text-secondary"
      />

      <Partners />

      <div className="bg-dark-midtone">
        <h5
          id="testimonialsHeading"
          className="text-light text-center m-0 px-5 opacity-50">
          What People Say About Our Service:
        </h5>
      </div>

      {TestimonialsServiceData.map((testimonial, index) => {
        return (
          <TestimonialsService
            key={index + 1}
            tsdAuthorName={testimonial.tsdAuthorName}
            tsdAuthorDescription={testimonial.tsdAuthorDescription}
            tsdRating={testimonial.tsdRating}
            tsdComments={testimonial.tsdComments}
            tsdImage={testimonial.tsdImage}
          />
        );
      })}

      <div className="bg-dark-midtone">
        &nbsp;
        <br />
        &nbsp;
      </div>

      <Footer />
    </div>
  );
};

export default Home;
