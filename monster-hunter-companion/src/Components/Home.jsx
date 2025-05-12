import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className='home-Text'>
        <h1 className="home-title">Welcome to Monster Hunter Companion</h1>
        <p className="home-subtitle">
          Explore the world of Monster Hunter World with our app.
        </p>

        <div className="home-buttons">
          <Link to="/Monsters" className="home-link">🧟Monsters</Link>
          <Link to="/Weapons" className="home-link">🗡️ Weapons</Link>
          <Link to="/Armors" className="home-link">🛡️ Armors</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;