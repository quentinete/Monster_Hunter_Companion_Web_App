import React from 'react';
import { Link } from 'react-router-dom';
import '../Style//Equipment.css';

function Equipment() {
  return (
      <nav>
        <Link to="/Weapons">Weapons</Link>
        <Link to="/Armor">Armor</Link>
        <Link to="/Talisman">Talisman</Link>
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
  );
}

export default Equipment;
