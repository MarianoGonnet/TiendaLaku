import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/contacto.css'
import logo from '../assets/logo.png';
import modeloContacto from '../assets/galeria/ModeloContacto.jpg'

function Contacto() {
    return(
        <>
        <div id="contacto">

    <div className="contact-form-container">
      <img src={logo} alt="Logo de Laku" className="logo"></img>

      <h2>CONTACTO</h2>

      <form action="mailto:alexiskeesbahl@gmail.com" method="POST" enctype="text/plain" className="contact-form">
        <div>
          <input type="text" id="nombre" name="nombre" placeholder="Nombre" required></input>
        </div>
        <div>
          <input type="email" id="email" name="email" placeholder="Email" required></input>
        </div>
        <div>
          <textarea id="mensaje" name="mensaje" rows="5" placeholder="Mensaje" required></textarea>
        </div>
        <div>
          <button type="submit">CONTACTANOS</button>
        </div>
      </form>
    </div>


    <div className="image-container">
      <img src={modeloContacto} alt="ModeloContacto"></img>
    </div>
    </div>
        </>

    )
}

export default Contacto;