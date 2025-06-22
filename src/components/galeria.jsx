import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../styles/galeria.css';
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

const Galeria = () => {
  return (
    <section>
<<<<<<< HEAD
      <Helmet>
        <title>Galería | Indumentaria Laku</title>
        <meta
          name="description"
          content="Descubrí nuestra colección de ropa urbana en Indumentaria Laku. Calidad, precio y estilo al alcance de todos."
        />
        <meta
          name="keywords"
          content="galería de ropa, tienda de ropa, indumentaria, moda urbana, catálogo, productos Laku"
        />
        <meta property="og:title" content="Galería | Indumentaria Laku" />
        <meta
          property="og:description"
          content="Conocé nuestras prendas destacadas en la galería de Indumentaria Laku. Tu estilo empieza acá."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="logo-container">
        <Link to="/"><img src={logo} alt="Logo de Laku" className="logo" /></Link>
      </div>

      <h1>GALERÍA</h1>

      <div className="gallery">
        <div className="columna-galeria">
          <div className="gallery-item">
            <img src={col1img1} alt="Remera Blanca" />
            <div className="details">
              <p>Remera Blanca - 100% algodón, suave y cómoda, ideal para el día a día.</p>
            </div>
=======
    <div class="logo-container">
      <Link to='/'><img src={logo} alt="Logo de Laku" class="logo"></img></Link>
    </div>
    <h2 id='h2-galeria'>GALERIA</h2>
    <div className="gallery">
        <div className='columna-galeria'>
        <div className="gallery-item">
          <img src={col1img1} alt="Remera Blanca"></img>
          <div className="details">
            <p>Remera Blanca - 100% algodón, suave y cómoda, ideal para el día a día.</p>
>>>>>>> 8a2147a9120f96c8929aea4ed23d62bbc3bed8dd
          </div>
          <div className="gallery-item">
            <img src={col1img2} alt="Campera Negra" />
            <div className="details">
              <p>Campera Negra - Estilo moderno y versátil, perfecta para las noches frías.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={col1img3} alt="Gorra Negra" />
            <div className="details">
              <p>Gorra Negra - Look urbano y deportivo, ideal para combinar con cualquier estilo.</p>
            </div>
          </div>
        </div>

        <div className="columna-galeria">
          <div className="gallery-item">
            <img src={col2img1} alt="Buzo Marrón" />
            <div className="details">
              <p>Buzo Marrón - Confort y calidez, diseñado para los días más frescos con un toque de estilo.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={col2img2} alt="Campera Marrón" />
            <div className="details">
              <p>Campera Marrón - Elegante y práctica, mantené el estilo sin sacrificar comodidad.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={col2img3} alt="Camisa de Cuadros" />
            <div className="details">
              <p>Camisa de Cuadros - Un clásico de todos los tiempos, con un toque moderno para cualquier ocasión.</p>
            </div>
          </div>
        </div>

        <div className="columna-galeria">
          <div className="gallery-item">
            <img src={col3img1} alt="Babucha Puma" />
            <div className="details">
              <p>Babucha Puma - Cómoda y de calidad, ideal para el deporte o un día relajado en casa.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={col3img2} alt="Buzo Negro" />
            <div className="details">
              <p>Buzo Negro - Básico y elegante, un esencial en cualquier armario para un look casual.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={col3img3} alt="Buzo Adidas" />
            <div className="details">
              <p>Buzo Adidas - Deportivo y cómodo, con el estilo único de una marca líder en ropa deportiva.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
