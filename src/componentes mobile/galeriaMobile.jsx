import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesMobile/galeriaMobile.css';
import logo from '../assets/logo.png';
import col1img1 from '../assets/galeria/remeraBlanca.jpg';
import col1img2 from '../assets/galeria/camperaNegra.jpg';
import col1img3 from '../assets/galeria/gorraNegra.jpg';
import col2img1 from '../assets/galeria/buzoMarron.jpg';
import col2img2 from '../assets/galeria/camperaMarron.jpg';
import col2img3 from '../assets/galeria/camisaCuadros.jpg';
import col3img1 from '../assets/galeria/babuchaPuma.jpg';
import col3img2 from '../assets/galeria/buzoNegro.jpg';
import col3img3 from '../assets/galeria/buzoAdidas.jpg';

const GaleriaMobile = () => {
  const [zoom, setZoom] = useState([false, false, false, false, false, false, false, false, false]);

  const handleZoom = (index) => {
    const newZoomState = [...zoom];
    newZoomState[index] = !newZoomState[index];
    setZoom(newZoomState);
  };

  const images = [
    { src: col1img1, alt: "Remera Blanca", texto:'Remera Blanca - 100% algodón, suave y cómoda, ideal para el día a día.' },
    { src: col1img2, alt: "Campera Negra", texto:'Campera Negra - Estilo moderno y versátil, perfecta para las noches frías.' },
    { src: col1img3, alt: "Gorra Negra", texto:'Gorra Negra - Look urbano y deportivo, ideal para combinar con cualquier estilo.' },
    { src: col2img1, alt: "Buzo Marrón", texto:'Buzo Marrón - Confort y calidez, diseñado para los días más frescos con un toque de estilo.' },
    { src: col2img2, alt: "Campera Marrón", texto:'Campera Marrón - Elegante y práctica, mantén el estilo sin sacrificar comodidad.' },
    { src: col2img3, alt: "Camisa de Cuadros", texto:'Camisa de Cuadros - Un clásico de todos los tiempos, con un toque moderno para cualquier ocasión.' },
    { src: col3img1, alt: "Babucha Puma", texto:'Babucha Puma - Cómoda y de calidad, ideal para el deporte o un día relajado en casa.' },
    { src: col3img2, alt: "Buzo Negro", texto:'Buzo Negro - Básico y elegante, un esencial en cualquier armario para un look casual.' },
    { src: col3img3, alt: "Buzo Adidas", texto:'Buzo Adidas - Deportivo y cómodo, con el estilo único de una marca líder en ropa deportiva.' }
  ];

  return (
    <section id='seccion-galeria-mobile'>
      <Link to='/'><img src={logo} alt="Logo de Laku" class="logo-mobile"></img></Link>
      <div className="gallery-mobile">
        <div className="columna-galeria-mobile">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item-mobile ${zoom[index] ? "conZoom" : "sinZoom"}`}
              onTouchStart={() => handleZoom(index)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="details">
                <p>{image.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriaMobile;
