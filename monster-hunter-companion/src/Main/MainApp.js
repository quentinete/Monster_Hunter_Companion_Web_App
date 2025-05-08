import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../Style/App.css';
import Header from '../Components/Header';
import MainContent from '../Components/MainContent';
import Footer from '../Components/Footer';
import Home from '../Components/Home';
import About from '../Components/About';
import Monsters from '../Components/Monsters';
import NotFound from '../Components/NotFound';
import Users from '../Users/Users';
import API_R from '../Components/API_R';
import Armors from '../Components/Armors';
import Talismans from '../Components/Talismans';
import Weapons from '../Components/Weapons';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='Body'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Monsters" element={<Monsters />} />
            <Route path="/API_R" element={<API_R />} />
            <Route path="/Talismans" element={<Talismans />} />
            <Route path="/Weapons" element={<Weapons />} />
            <Route path="/Armors" element={<Armors />} />
            <Route path="/main" element={<MainContent />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Users" element={<Users />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


  
