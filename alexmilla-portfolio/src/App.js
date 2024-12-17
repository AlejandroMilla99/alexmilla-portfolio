import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import CVPage from "./CVPage";
import images from "./resources/images";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import './i18n';
import ScrollToTop from './ScrollToTop';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("es"); // Estado para idioma seleccionado
  const { t, i18n } = useTranslation(); // Hook para traducción

  // Cambiar idioma
  const changeLanguage = (lang) => {
    setSelectedLang(lang); // Actualiza el idioma seleccionado
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        {/* Header visible en todas las páginas */}
        <header className="App-header">
        <span className="spanLang">
          <div className="header-logo">
            <img src={images.logo} alt="Mi Logo" className="logo" />
          </div>
              {/* Bandera de España */}
              <img
                src={images.spain}
                alt="Español"
                className={`flagLang ${selectedLang === "es" ? "activeFlag" : "inactiveFlag"}`}
                onClick={() => changeLanguage("es")}
              />
              {/* Bandera de UK */}
              <img
                src={images.uk}
                alt="English"
                className={`flagLang ${selectedLang === "en" ? "activeFlag" : "inactiveFlag"}`}
                onClick={() => changeLanguage("en")}
              />

              <button
                className="menu-toggle"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                ☰
              </button>
        </span>
          
        <div className={`header-nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-item" onClick={() => setMenuOpen(false)}>
            <span className="spanLang">{t('header.home')}<img className="menuImg" width="30px" height="30px" src={images.home} alt="home"/></span>
          </Link>
          <Link
              to="/projects"
              className="nav-item"
              onClick={() => setMenuOpen(false)}
            >
            <span className="spanLang">{t('header.projects')}<img  className="menuImg" width="30px" height="30px" src={images.rocket} alt="rocket"/></span>

          </Link>
          <Link to="/cv" className="nav-item" onClick={() => setMenuOpen(false)}>
            <span className="spanLang">{t('header.cv')}<img className="menuImg" width="30px" height="30px" src={images.cv} alt="cv"/></span>
          </Link>
        </div>
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
          <p>{t('footer.poweredBy')}</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
