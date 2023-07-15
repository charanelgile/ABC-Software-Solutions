import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import WhoWeAre from './pages/WhoWeAre';

const App = () => {
  return (
    <Router>
          <Header />
        <Routes>
            <Route path='/Home' element={<Home />}>
             </Route>
             <Route path='/Contact' element={<Contact />}>
             </Route>
             <Route path='/Services' element={<Services />}>
             </Route>
             <Route path='/Testimonials' element={<Testimonials />}>
             </Route>
             <Route path='/WhoWeAre' element={<WhoWeAre />}>
             </Route>

        </Routes>
        <Footer />
    </Router>
  )
}

export default App;