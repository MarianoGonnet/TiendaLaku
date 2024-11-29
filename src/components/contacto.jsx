import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'
import '../styles/contacto.css'
import logo from '../assets/logo.png';
import modeloContacto from '../assets/galeria/ModeloContacto.jpg'

function Contacto() {

    const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      nombre,
      email,
      mensaje,
    };

    emailjs
      .send('service_iviq0sr', 'template_8h280q7', templateParams, 'ofW7HXE-ywlr4g2Uq')
      .then(
        (result) => {
          alert('¡Correo enviado correctamente!');
          setTimeout(() => {
            navigate('/'); 
          }, 1000); 
        },
        (error) => {
          console.log(error.text);
          alert('Hubo un problema al enviar el correo');
        }
      );
  };




    return(
        <>
        <div id="contacto">

    <div className="contact-form-container">
      <img src={logo} alt="Logo de Laku" className="logo"></img>

      <h2>CONTACTO</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <input type="text" id="nombre" name="nombre" placeholder="Nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
        </div>
        <div>
          <input type="email" id="email" name="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div>
          <textarea id="mensaje" name="mensaje" rows="5" placeholder="Mensaje" required value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
        </div>
        <div>
          <button type="submit">CONTACTANOS</button>
        </div>
      </form>
    </div>

    service_iviq0sr


    <div className="image-container">
      <img src={modeloContacto} alt="ModeloContacto"></img>
    </div>
    </div>
        </>

    )
}

export default Contacto;