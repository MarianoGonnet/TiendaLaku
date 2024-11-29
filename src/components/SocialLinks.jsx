import React from 'react';
import '../Styles/SocialLinks.css'; // Ruta corregida

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href='../../index.html' rel="noopener noreferrer">Inicio</a>
      <a href="../src/styles/galeria.html" rel="noopener noreferrer">Galeria</a>
      <a href="../src/styles/contacto.html" rel="noopener noreferrer">Contacto</a>
      <p>Copyright Tienda Laku Indumentaria Masculina - 2024. Todos los derechos reservados.</p>
    </div>
  );
};

export default SocialLinks;
