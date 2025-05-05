import React from 'react';
import '../Style/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section contact">
          <h4>Contact</h4>
          <p><a href="mailto:qlesprit@mail.com">qlesprit@mail.com</a></p>
          <p><a href="tel:+33783435868">+33 7 83 43 58 68</a></p>
        </div>

        <div id="footer-leg" className="footer-section links">
          <h4>Liens utiles</h4>
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/politique-confidentialite">Politique de confidentialité</a>
        </div>

        <div id="footer-leg" className="footer-section socials">
          <h4>Suivez-moi</h4>
          <a href="https://github.com/quentinete" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://github.com/quentinete2" target="_blank" rel="noreferrer">GitHub_edu</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Mon Site. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;


