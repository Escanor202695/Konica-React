
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Hero from './components/Hero';
import About from './components/About';
import { useEffect } from 'react';
import Clients from './components/Clients';
import Services from './components/Services';
import Products from './components/Products';

function App() {

  return (
    <div className="relative">
        <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Products/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
