import React from "react";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import WhoWeAre from "./pages/WhoWeAre";
import Testimonials from "./pages/Testimonials";
import PricingCardsContent from "./data/PricingCardsContent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}></Route>

        <Route
          path="/Services"
          element={<Services />}></Route>

        <Route
          path="/WhoWeAre"
          element={<WhoWeAre />}></Route>

        <Route
          path="/Contact"
          element={<Contact />}></Route>

        <Route
          path="/Pricing"
          element={<PricingCardsContent />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
