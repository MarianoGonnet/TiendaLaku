import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/SocialLinks.css'; // Ruta corregida

const SocialLinks = () => {
  return (
    <div className="social-links">
      <Link to='/'>Inicio</Link>
      <Link to='/galeria'>Galeria</Link>
      <Link to='/contacto'>Contacto</Link>
      <p>Copyright Tienda Laku Indumentaria Masculina - 2024. Todos los derechos reservados.</p>
    </div>
  );
};

export default SocialLinks;
