import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className = "navbar">
      <nav className = "navbar-container">
      <img src = "https://download.logo.wine/logo/Costco/Costco-Logo.wine.png" className = "navbar-logo" />
        <ul className = "navbar-links">
          <li><a href = "/home" className = "navbar-link"> Home </a></li>
          <li><a href = "/orders" className = "navbar-link"> Orders </a></li>
          <li><a href = "/cart" className = "navbar-link"> Cart </a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;