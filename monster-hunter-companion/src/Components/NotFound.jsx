import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="back-home">
        Return to the home page
      </Link>
    </div>
  );
}

export default NotFound;
