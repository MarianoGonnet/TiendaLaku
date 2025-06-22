import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'
import '../stylesMobile/contactoMobile.css'
import modeloContacto from '../assets/galeria/ModeloContacto.jpg'

function ContactoMobile() {

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
        <div id="contacto-mobile">
        <img id='fondo-contacto-mobile' src={modeloContacto} alt="ModeloContacto"></img>
        <div className='degrade-mobile'></div>
    <div className="contact-form-container-mobile">

      <h2>CONTACTO</h2>

      <form onSubmit={handleSubmit} className="contact-form-mobile">
        <div>
          <input type="text" id="nombre-mobile" name="nombre" placeholder="Nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
        </div>
        <div>
          <input type="email" id="email-mobile" name="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div>
          <textarea id="mensaje-mobile" name="mensaje" rows="5" placeholder="Mensaje" required value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
        </div>
        <div>
          <button type="submit">CONTACTANOS</button>
        </div>
      </form>
    </div>
    </div>
        </>

    )
}

export default ContactoMobile;