import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./components/Homepage";
import AboutDetails from "./components/pages/AboutDetails";
import Raw from "./components/pages/Raw";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<AboutDetails/>} />
          <Route path="/raw" element={<Raw/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;