import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './layout/Nav';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import Portfolio from './pages/Portfolio';
import FAQ from './pages/FAQ';
import Request from './pages/Request';
import Calculation from './pages/Calculation';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/request" element={<Request/>} />
          <Route path="/calculation" element={<Calculation/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
