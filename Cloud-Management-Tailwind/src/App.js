import React from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Support from './components/Support';
import AllinOne from './components/AllinOne';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllinOne />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
