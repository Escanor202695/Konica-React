import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Hero from './components/Hero';

function App() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0">
        <Header/>
      </div>
      <Hero/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
