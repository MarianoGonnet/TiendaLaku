import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import './styles/contacto.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SocialLinks />
    </div>
  );
};

export default App;
