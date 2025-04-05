import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Sahifa nomlarini aniqlaymiz
  const getPageTitle = (path) => {
    switch (path) {
      case '/':
        return 'Main Menu';
      case '/burgers':
        return 'Burgers';
      case '/pizzas':
        return 'Pizzas';
      default:
        return '';
    }
  };

  return (
    <header className="header">
      <div className="logo">MyFood</div>

      {location.pathname !== '/' && (
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back
        </button>
      )}

      <h1 className="page-title">{getPageTitle(location.pathname)}</h1>
    </header>
  );
};

export default Header;