import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PastSeasons from './components/pages/PastSeasons';
import Gallery from './components/pages/Gallery';
import Team from './components/pages/Team';
import Speakers from './components/pages/Speakers';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer';


const App = () => {
  return (
    
      
    <Router>
      <div >
       
        <Navbar/>
        
        
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="#" element={<PastSeasons />} />
      </Routes>

      <Footer/>
      </div>
    </Router>
    
  );
};

export default App;
