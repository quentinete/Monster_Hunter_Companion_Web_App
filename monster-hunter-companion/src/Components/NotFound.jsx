import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>La page que vous cherchez n'existe pas.</p>
      <Link to="/" className="back-home">
        Retourner à la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;
