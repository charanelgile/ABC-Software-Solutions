import React from "react";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import WhoWeAre from "./pages/WhoWeAre";
import Products from "./pages/Products";

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
          path="/Products"
          element={<Products />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
