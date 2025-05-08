import React from 'react';
import '../Style//Header.css';
import logo from '../Assets/logo_mhs.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>
        <img src={logo} alt="MONSTER HUNTER COMPANION" />
      </h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/news">NEWS</Link>
        <Link to="/Monsters"><span>Monsters</span></Link>
        <Link to="/API_R"><span>API_R</span></Link>

        <div className="lang-select">
          <form>
            <select name="langSel" defaultValue="/">
              <option value="blank">Select Language</option>
              <option value="/">English</option>
              <option value="/ja/">French</option>
            </select>
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Header;

