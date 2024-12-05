import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/galeria.css'
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
          </div>
        </div>
        <div className="gallery-item">
          <img src={col1img2} alt="Campera Negra"></img>
          <div className="details">
            <p>Campera Negra - Estilo moderno y versátil, perfecta para las noches frías.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={col1img3} alt="Gorra Negra"></img>
          <div className="details">
            <p>Gorra Negra - Look urbano y deportivo, ideal para combinar con cualquier estilo.</p>
          </div>
        </div>
        </div>

        <div className='columna-galeria'>
        <div className="gallery-item">
          <img src={col2img1} alt="Buzo Marrón"></img>
          <div className="details">
            <p>Buzo Marrón - Confort y calidez, diseñado para los días más frescos con un toque de estilo.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={col2img2} alt="Campera Marrón"></img>
          <div className="details">
            <p>Campera Marrón - Elegante y práctica, mantén el estilo sin sacrificar comodidad.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={col2img3} alt="Camisa de Cuadros"></img>
          <div className="details">
            <p>Camisa de Cuadros - Un clásico de todos los tiempos, con un toque moderno para cualquier ocasión.</p>
          </div>
        </div>
        </div>

        <div className='columna-galeria'>
        <div className="gallery-item">
          <img src={col3img1} alt="Babucha Puma"></img>
          <div className="details">
            <p>Babucha Puma - Cómoda y de calidad, ideal para el deporte o un día relajado en casa.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={col3img2} alt="Buzo Negro"></img>
          <div className="details">
            <p>Buzo Negro - Básico y elegante, un esencial en cualquier armario para un look casual.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={col3img3} alt="Buzo Adidas"></img>
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
