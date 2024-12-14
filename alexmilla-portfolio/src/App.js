import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import CVPage from "./CVPage";
import images from "./resources/images";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        {/* Header visible en todas las páginas */}
        <header className="App-header">
          <div className="header-logo">
            <img src={images.logo} alt="Mi Logo" className="logo" />
          </div>
          <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
            <a href="#/" className="nav-item" onClick={() => setMenuOpen(false)}>
              Inicio
            </a>
            <a
              href="#/projects"
              className="nav-item"
              onClick={() => setMenuOpen(false)}
            >
              Proyectos
            </a>
            <a href="#/cv" className="nav-item" onClick={() => setMenuOpen(false)}>
              Currículum Vitae
            </a>
          </nav>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
        </header>

        {/* Rutas dinámicas */}
        <Routes>
          <Route path="/alexmilla-portfolio" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>

        {/* Footer visible en todas las páginas */}
        <footer className="App-footer">
          <div className="social-icons">
            <a
              href="mailto:alejandromilla99@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="50px"
                height="50px"
                src={images.mail}
                alt="Correo"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-milla-3ba742209/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="50px"
                height="50px"
                src={images.linkedin}
                alt="LinkedIn"
                className="social-icon"
              />
            </a>
            <a
              href="https://github.com/AlejandroMilla99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="50px"
                height="50px"
                src={images.git}
                alt="GitHub"
                className="social-icon"
              />
            </a>
          </div>
          <p>Powered by Alejandro Milla</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
