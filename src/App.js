import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./components/Homepage";
import AboutDetails from "./components/pages/AboutDetails";
import Raw from "./components/pages/Raw";
import Packaging from './components/pages/Packaging';
import Machinery from './components/pages/Machinery';
function App() {
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
    </>
  );
}
export default App;