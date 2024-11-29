import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import Flotantes from './components/flotantes';
import './styles/contacto.css';
import './styles/fuentes.css';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SocialLinks />
      <Flotantes/>
    </div>
  );
};

export default App;
