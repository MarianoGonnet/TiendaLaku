import React from 'react';
import '../Styles/Hero.css'; // Ruta corregida
import logo from '../assets/logo.png';
import heroImage from '../assets/hero-image.jpeg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={logo} alt="Indumentaria Laku Logo" className="hero-logo" />
        <h2>INDUMENTARIA LAKU</h2>
        <p>placeholder placeholder placeholder placeholder</p>
        <button 
  className="hero-button" 
  onClick={() => window.location.href = '/styles/galeria.html'}
>
  ACCEDE A TU ESTILO
</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Modelo" />
      </div>
    </section>
  );
};

export default Hero;
