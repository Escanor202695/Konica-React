
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Hero from './Hero';
import About from './About';
import { useEffect } from 'react';
import Clients from './Clients';
import Services from './Services';
import Products from './Products';

function Homepage() {

  return (
    <div className="relative">
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Products/>
      <Clients/>
      <Contact/>
      <Footer home={true}/>
    </div>
  );
}

export default Homepage;
