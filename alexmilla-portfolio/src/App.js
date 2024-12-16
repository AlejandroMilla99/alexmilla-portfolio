import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import CVPage from "./CVPage";
import images from "./resources/images";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import './i18n';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Hook para traducción

  // Cambiar idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <Router>
        {/* Header visible en todas las páginas */}
        <header className="App-header">
        <span className="spanLang">
          <div className="header-logo">
            <img src={images.logo} alt="Mi Logo" className="logo" />
          </div>
              <img src={images.spain} alt="English" className="flagLang" onClick={() => changeLanguage("es")} />
              <img src={images.uk} alt="English" className="flagLang" onClick={() => changeLanguage("en")}/>

              <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
        </span>
          
          <div className={`header-nav ${menuOpen ? "open" : ""}`}>
            <a href="#/" className="nav-item" onClick={() => setMenuOpen(false)}>
              {t('header.home')}
            </a>
            <a
              href="#/projects"
              className="nav-item"
              onClick={() => setMenuOpen(false)}
            >
              {t('header.projects')}
            </a>
            <a href="#/cv" className="nav-item" onClick={() => setMenuOpen(false)}>
              {t('header.cv')}
            </a>
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
          <p>{t('footer.poweredBy')}</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
