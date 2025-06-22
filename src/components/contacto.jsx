import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../styles/contacto.css';
import logo from '../assets/logo.png';
import modeloContacto from '../assets/galeria/ModeloContacto.jpg';

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
        () => {
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

  return (
    <>
      <Helmet>
        <title>Contacto | Indumentaria Laku</title>
        <meta
          name="description"
          content="Contactanos para consultas, pedidos o cualquier información. En Indumentaria Laku estamos para ayudarte."
        />
        <meta
          name="keywords"
          content="contacto, tienda de ropa, indumentaria, consultas, email, formulario"
        />
        <meta property="og:title" content="Contacto | Indumentaria Laku" />
        <meta
          property="og:description"
          content="¿Tenés dudas? Escribinos. En Indumentaria Laku estamos para brindarte la mejor atención."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div id="contacto">
        <div className="contact-form-container">
          <img src={logo} alt="Logo de Laku" className="logo" />

          <h2>CONTACTO</h2>

          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                placeholder="Mensaje"
                required
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              ></textarea>
            </div>
            <div>
              <button type="submit">CONTACTANOS</button>
            </div>
          </form>
        </div>

        <div className="image-container">
          <img src={modeloContacto} alt="Modelo en contacto" />
        </div>
      </div>
    </>
  );
}

export default Contacto;
