import React from 'react';
import '../Styles/Navbar.css'; // Ruta corregida

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Indumentaria Laku</h1>
      <ul>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="#galeria">Galería</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
