import React from "react";
import "./App.css";

function ProjectsPage() {
  return (
    <div className="App">
      {/* Contenido de la página de proyectos */}
      <section className="card">
        <h2>Proyectos</h2>
        <p>Algunos de los proyectos en los que he trabajado incluyen:</p>
            Una app móvil para gestión de tareas utilizando Swift, un sistema web para análisis de datos en Python, Interfaces modernas y responsivas con React.
      </section>
      <section className="card project-detail">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción del proyecto: brevemente explica los detalles, tecnologías utilizadas, y el propósito.</p>
        <div className="video-container">
          {/* Puedes incrustar un video aquí */}
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/tus_video"
            title="Video del Proyecto" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
