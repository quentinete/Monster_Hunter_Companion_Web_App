import React from 'react';

function Header() {
  return (
    <header>
      <h1>Bienvenue sur mon site</h1>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À propos</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
