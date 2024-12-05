import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import HeroMobile from './components/HeroMobile'
import Contacto from './components/contacto'
import ContactoMobile from './components/contactoMobile'
import Galeria from './components/galeria'
import GaleriaMobile from './components/galeriaMobile'
import Flotantes from './components/flotantes'
import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'
import SocialLinks from './components/SocialLinks'
import './styles/fuentes.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import useTamañoVentana from './hooks/useTamañoVentana'

function App() {
  const [count, setCount] = useState(0)
  const esMobile = useTamañoVentana();

  return (

    <Router>
    {esMobile ? (
      <NavbarMobile />
    ) : (
      <Navbar />
    )}

<Routes>
  <Route path='/' element={ esMobile ? <HeroMobile/> : <Hero /> } />    
  <Route path='/contacto' element={esMobile ? <ContactoMobile/> : <Contacto />} />
  <Route path='/galeria' element={esMobile ? <GaleriaMobile/> : <Galeria />} />
</Routes>


<SocialLinks />
<Flotantes/>

  </Router>
  )
}

export default App
