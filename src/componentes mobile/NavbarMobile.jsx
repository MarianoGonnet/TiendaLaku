import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesMobile/NavbarMobile.css'
import logo from '../assets/Logo.png'

const NavbarMobile = () => {
  return (
    <nav className="navbar-mobile">
      <Link id='link-logo-nav-mobile' to='/'><h2>ACCEDE A TU ESTILO</h2></Link>
    </nav>
  );
};

export default NavbarMobile;
