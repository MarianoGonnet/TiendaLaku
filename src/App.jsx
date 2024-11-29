import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Contacto from './components/contacto'
import Galeria from './components/galeria'
import Flotantes from './components/flotantes'
import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks'
import './styles/fuentes.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
            <Navbar />
      {/* Rutas de la aplicación */}
      <Routes>
        <Route path='/' element={<Hero />} />    
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/galeria' element={<Galeria />} />
      </Routes>


      <SocialLinks />
      <Flotantes/>

      {/* Enlaces de navegación */}
      <div>
        <Link to='/'><button>Tienda Laku</button></Link>
        <Link to='/galeria'><button>Galería</button></Link>
        <Link to='/contacto'><button>Contacto</button></Link>
      </div>
    </Router>
  )
}

export default App
