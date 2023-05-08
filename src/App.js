
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Hero from './components/Hero';
import About from './components/About';
import { useEffect } from 'react';
import Clients from './components/Clients';

function App() {
  useEffect(() => {
    let circleCursor = document.querySelector(".circle-cursor");

    if (!circleCursor) {
      circleCursor = document.createElement("div");
      circleCursor.classList.add("circle-cursor");
      circleCursor.style.position = "fixed";
      circleCursor.style.top = "0";
      circleCursor.style.left = "0";
      circleCursor.style.width = "40px";
      circleCursor.style.height = "40px";
      circleCursor.style.borderRadius = "50%";
      circleCursor.style.backgroundColor = "transparent";
      circleCursor.style.border = "1.5px solid #62c157";
      circleCursor.style.pointerEvents = "none";
      circleCursor.style.transition = "transform 0.15s ease-out";

      if (window.innerHeight > 420) document.body.appendChild(circleCursor);
    }

    function handleMouseMove(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const windowX = window.innerWidth;
      const windowY = window.innerHeight;

      if (
        mouseX > 0 &&
        mouseX < windowX &&
        mouseY > 0 &&
        mouseY < windowY &&
        windowY > 420
      ) {
        const circleX = mouseX - 20; // calculate center of circle
        const circleY = mouseY - 20;
        circleCursor.style.transform = `translate(${circleX}px, ${circleY}px)`;
        circleCursor.style.opacity = "1";
      } else {
        circleCursor.style.opacity = "0";
      }
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="relative">
      <div className="absolute top-0 left-0">
        <Header/>
      </div>
      <Hero/>
      <About/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
