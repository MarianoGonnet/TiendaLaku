import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavbarMobile.css'; 
import logo from '../assets/Logo.png'

const NavbarMobile = () => {
  return (
    <nav className="navbar">
      <Link id='link-logo-nav' to='/'><img id='logo-nav' src={logo}></img></Link>
    </nav>
  );
};

export default NavbarMobile;
