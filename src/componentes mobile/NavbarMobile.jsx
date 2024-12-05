import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesMobile/NavbarMobile.css'
import logo from '../assets/Logo.png'

const NavbarMobile = () => {
  return (
    <nav className="navbar-mobile">
      <Link id='link-logo-nav-mobile' to='/'><img id='logo-nav-mobile' src={logo}></img></Link>
    </nav>
  );
};

export default NavbarMobile;
