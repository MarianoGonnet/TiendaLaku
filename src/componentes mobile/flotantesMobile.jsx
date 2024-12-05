import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesMobile/flotantesMobile.css';
import email from '../assets/galeria/mail-blanco.png'
import instagram from '../assets/galeria/insta-blanco.png'
import whatsapp from '../assets/galeria/whatsapp-blanco.png'



const FlotantesMobile = () => {
return (
<>
<div id='flotantes'>
    <div id="email" className='flotante'>
        <Link to='/contacto'>
        <img src={email} alt="Email" />
        </Link>
    </div>
    <div id="instagram" className='flotante'>
        <a href="https://www.instagram.com/laku.indumentaria/" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" />
        </a>
    </div>
    <div id="whatsapp" className='flotante'>
        <a href="https://wa.me/5492235347158" target="_blank" rel="noopener noreferrer">
        <img src={whatsapp} alt="WhatsApp" />
        </a>
    </div>
</div>
</>
)
}

export default FlotantesMobile;