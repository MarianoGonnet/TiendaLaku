import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css'
import logo from '../assets/logo.png';
import heroImage from '../assets/hero-image.jpeg';
import spiritImage from '../assets/espiritu-image.jpeg'


const Hero = () => {
  return (
    <section>
     <div className="hero">
      <div className="hero-content">
        <img src={logo} alt="Indumentaria Laku Logo" className="hero-logo" />
        <h2 className='titulos-hero'>INDUMENTARIA LAKU</h2>
        <p>Conectamos las tendencias del país poniendo a disposición ropa de calidad a buen precio. Si querés disfrutar de la buena ropa sin sobreprecio, ampliá tu vestuario con nuestros productos.</p>
        <Link to="/galeria" className="hero-button">ACCEDE A TU ESTILO</Link>
      </div>
      
      <div className="hero-image">
        <img src={heroImage} alt="Modelo" />
      </div>
      </div>

    <div id='divisor'>
      <h1>CALIDAD, PRECIO Y ESTILO</h1>
    </div>
    <div id='seccion-espiritu'>
      <img id='imagen-espiritu' src={spiritImage}></img>
      <div id="texto-espiritu">
      <h2 className='titulos-hero'>ESPIRITU LIBRE</h2>
      <p>Tienda Laku somos un pequeño emprendimiento con base en la ciudad de Mar del Plata. Nos apasiona la vida urbana al aire libre, la moda y el movimiento. Queremos traer el estilo a nuestra ciudad y para ello contamos con proveedores de prendas de primera calidad. Creemos en el acceso a la moda a precios razonables para que nuestros clientes puedan expresar su espíritu libre y rebelde sin barreras. Nuestras prendas son para los hombres de cualquier edad que quieran expresar nuestra misma pasión por la vida.</p>
      <Link to="/galeria" className="hero-button">ACCEDE A TU ESTILO</Link>
      </div>
    </div>

    </section>
  );
};

export default Hero;
