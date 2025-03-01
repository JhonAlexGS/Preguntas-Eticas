import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact ";
import Play from "./pages/Play";
import NotFound from "./pages/NotFound";
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        {/* Barra de navegación */}
        {/* <nav>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/about">Acerca de</a>
            </li>
            <li>
              <a href="/contact">Contacto</a>
            </li>
            <li>
              <a href="/play/:img/:name">Play</a>
            </li>
          </ul>
        </nav> */}

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/play/:img/:name/:round" element={<Play />} />
          <Route path="*" element={<Home />} /> {/* Para rutas no encontradas */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;