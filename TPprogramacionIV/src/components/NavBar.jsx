import React from 'react';
import logo from '../img/logoempresa.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="InfinityTech Logo" className="logo" />
        <span className="brand-name">InfinityTech</span>
      </div>
      <ul className="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
