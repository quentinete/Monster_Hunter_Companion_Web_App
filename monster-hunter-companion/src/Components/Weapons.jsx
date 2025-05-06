import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Weapons.css';

function Weapons() {
  return (
      <nav>
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

export default Weapons;