import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import WhoWeAre from "./pages/WhoWeAre";
import PricingCardsContent from "./data/PricingCardsContent";

const App = () => {
  return (
    <Router>
      
      <Routes>
        {/* Your routes go here */}
        {/* Example routes: */}
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/WhoWeAre" element={<WhoWeAre />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pricing" element={<PricingCardsContent />} />
      </Routes>
    </Router>
  );
};

export default App;
