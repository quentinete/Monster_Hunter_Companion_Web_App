import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../Style/App.css';
import Header from '../Components/Header';
import MainContent from '../Components/MainContent';
import Footer from '../Components/Footer';
import Home from '../Components/Home';
import About from '../Components/About';
import NotFound from '../Components/NotFound';
import Users from '../Users/Users';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


  
