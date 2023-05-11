import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./components/Homepage";
import AboutDetails from "./components/pages/AboutDetails";
import Raw from "./components/pages/Raw";
import Packaging from './components/pages/Packaging';
import Machinery from './components/pages/Machinery';
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<AboutDetails/>} />
          <Route path="/packaging-material" element={<Packaging/>} />
          <Route path="/machinery" element={<Machinery/>} />
          <Route path="/raw-material" element={<Raw/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
export default App;