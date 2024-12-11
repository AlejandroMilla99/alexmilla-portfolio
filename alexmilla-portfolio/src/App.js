import React from "react";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import images from "./resources/images";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola, soy Alejandro Milla</h1>
        <p>Desarrollador especializado en Swift, Python y JavaScript.</p>
        <a href="#contacto" className="btn">Contáctame</a>
      </header>

      <section className="card">
        <h2>Sobre mí</h2>
        <p>
          Soy un desarrollador apasionado por crear soluciones innovadoras y 
          eficientes. Con experiencia en el desarrollo de aplicaciones móviles 
          y web, me especializo en construir interfaces intuitivas y funcionales 
          utilizando tecnologías modernas como React, Swift y Python.
        </p>
        <p>
          Me encanta aprender nuevas tecnologías y enfrentar desafíos que 
          me permitan crecer tanto personal como profesionalmente.
        </p>
      </section>

      <section className="card">
        <h2>Proyectos</h2>
        <p>Algunos de los proyectos en los que he trabajado incluyen:</p>
          <ul>
            <li>Una app móvil para gestión de tareas utilizando Swift.</li>
            <li>Un sistema web para análisis de datos en Python.</li>
            <li>Interfaces modernas y responsivas con React.</li>
          </ul>
      </section>
      <section className="card">
        <h2>Proyectos</h2>
        <p>Algunos de los proyectos en los que he trabajado incluyen:</p>
          <ul>
            <li>Una app móvil para gestión de tareas utilizando Swift.</li>
            <li>Un sistema web para análisis de datos en Python.</li>
            <li>Interfaces modernas y responsivas con React.</li>
          </ul>
      </section>
      <footer className="App-footer">
        <div className="social-icons">
          <a href="mailto:alejandromilla99@gmail.com" target="_blank" rel="noopener noreferrer">
            <img width="50px" height="50px" src={images.mail} alt="Correo" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/alejandro-milla-3ba742209/" target="_blank" rel="noopener noreferrer">
            <img width="50px" height="50px" src={images.linkedin} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/AlejandroMilla99" target="_blank" rel="noopener noreferrer">
            <img width="50px" height="50px" src={images.git} alt="GitHub" className="social-icon" />
          </a>
        </div>
        <p>Powered by Alejandro Milla</p>
      </footer>
    </div>
  );
}

export default App;