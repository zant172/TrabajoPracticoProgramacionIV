import React from 'react';
import logo from '../img/logoempresa.png';

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="InfinityTech Logo" className="logo" />
      <h1>InfinityTech</h1>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
}

export default Navbar;
