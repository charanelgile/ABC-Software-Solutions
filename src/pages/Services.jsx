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

      <div className="w-50 text-start m-5">
        <h2>Hire Permanent and Remote Developers</h2>
        <p>
          From full-time remote engineering teams to hourly contractors, work
          with remote dev as needed
        </p>
      </div>
      <div className="container w-100">
        <div className="row my-3">
          <div className="d-flex col-6">
            <div className="me-3">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.JysQbvr5i6P_fu3nA_ozKgAAAA&pid=Api&P=0&h=180"
                alt="Logo"
                width={75}
              />
            </div>
            <div>
              <h4>Full-Stack Web App Development</h4>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              praesentium consequuntur nobis iusto! Similique magni incidunt
              consequuntur, natus corrupti modi?
            </div>
          </div>

          <div className="d-flex col-6">
            <div className="me-3">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.JysQbvr5i6P_fu3nA_ozKgAAAA&pid=Api&P=0&h=180"
                alt="Logo"
                width={75}
              />
            </div>
            <div>
              <h4>Front End Web App Development</h4>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              praesentium consequuntur nobis iusto! Similique magni incidunt
              consequuntur, natus corrupti modi? lorem10
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="d-flex col-6">
            <div className="me-3">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.JysQbvr5i6P_fu3nA_ozKgAAAA&pid=Api&P=0&h=180"
                alt="Logo"
                width={75}
              />
            </div>
            <div>
              <h4>Back End Web App Development</h4>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              praesentium consequuntur nobis iusto! Similique magni incidunt
              consequuntur, natus corrupti modi?
            </div>
          </div>

          <div className="d-flex col-6">
            <div className="me-3">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.JysQbvr5i6P_fu3nA_ozKgAAAA&pid=Api&P=0&h=180"
                alt="Logo"
                width={75}
              />
            </div>
            <div>
              <h4>Website Rebranding</h4>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              praesentium consequuntur nobis iusto! Similique magni incidunt
              consequuntur, natus corrupti modi?
            </div>
          </div>
        </div>
      </div>

      <Technologies />

      <Footer />
    </div>
  );
};

export default Services;
