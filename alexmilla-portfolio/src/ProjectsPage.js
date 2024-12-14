import React from "react";
import "./App.css";

function ProjectsPage() {
  return (
    <div className="App">
      {/* Contenido de la página de proyectos */}
      <section className="card">
        <h2>Proyectos</h2>
        <p>Algunos de los proyectos en los que he trabajado incluyen: Una app móvil para gestión de tareas utilizando Swift, un sistema web para análisis de datos en Python, Interfaces modernas y responsivas con React.
        </p>
      </section>
      <section className="card project-detail">
        <h3>Calculadora de riesgo para pacientes oncológicos</h3>
        <p>Descripción del proyecto: brevemente explica los detalles, tecnologías utilizadas, y el propósito.</p>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8NQ4BtDhhCA?si=VcPaTIs042DBhIzm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
      <section className="card project-detail">
        <h3>NBA Sorare Data Machine</h3>
        <p>Descripción del proyecto: brevemente explica los detalles, tecnologías utilizadas, y el propósito.</p>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/THd2ts2KMZQ?si=sw9n2qOZxckqVmvr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
      <section className="card project-detail">
        <h3>LaLiga Fantasy Data Machine</h3>
        <p>Descripción del proyecto: brevemente explica los detalles, tecnologías utilizadas, y el propósito.</p>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/02mTI5rtYxg?si=6BB0YulqhfgTZPjK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
      <section className="card project-detail">
        <h3>HeatMill Dating App</h3>
        <p>Descripción del proyecto: brevemente explica los detalles, tecnologías utilizadas, y el propósito.</p>
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/kQ2MIm49lJA?si=e2VV96kOXjABfGNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
