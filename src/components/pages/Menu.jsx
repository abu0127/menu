import React from 'react';
import { NavLink } from 'react-router-dom';
import './pages-style/Menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <NavLink to="/burgers" className="menu-box">Burgers</NavLink>
      <NavLink to="/pizzas" className="menu-box">Pizzas</NavLink>
      <NavLink to="/drinks" className="menu-box">Drinks</NavLink>
    </div>
  );
};

export default Menu;