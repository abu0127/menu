import React from 'react';
import { Link } from 'react-router-dom';
import './pages-style/Menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <Link to="/burgers" className="menu-box">Burgers</Link>
      <Link to="/pizzas" className="menu-box">Pizzas</Link>
      <Link to="/" className="menu-box">Home</Link>
    </div>
  );
};

export default Menu;