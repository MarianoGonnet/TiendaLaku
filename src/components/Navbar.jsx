import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'; // Ruta corregida
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to='/'><img id='logo-nav' src={logo}></img></Link>
      <h1>ACCEDE A TU ESTILO</h1>
    </nav>
  );
};

export default Navbar;
