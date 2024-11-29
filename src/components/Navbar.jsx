import React from 'react';
import '../Styles/Navbar.css'; // Ruta corregida
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href='../../index.html'><img id='logo-nav' src={logo}></img></a>
      <h1>ACCEDE A TU ESTILO</h1>
    </nav>
  );
};

export default Navbar;
