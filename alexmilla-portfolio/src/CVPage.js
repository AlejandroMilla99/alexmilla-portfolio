import React, { useEffect, useState, useRef } from "react";
import images from "./resources/images";

const icons = [images.android, images.azure, images.cplus, images.eclipse, images.flutter, images.git, images.java, images.js, images.mysql, images.php, images.python, images.react, images.swagger, images.swift, images.firebase, images.node]; // Iconos disponibles
const ICON_SIZE = 10; // Tamaño aproximado del ícono en porcentaje

function Fishbowl() {
  const [positions, setPositions] = useState([]);

  // Inicializamos las posiciones solo al montar el componente
  useEffect(() => {
    const initialPositions = icons.map(() => ({
      x: Math.random() * 90,
      y: Math.random() * 90,
      dx: (Math.random() - 0.5) * 1, // Velocidad horizontal más lenta
      dy: (Math.random() - 0.5) * 1, // Velocidad vertical más lenta
    }));
    setPositions(initialPositions);
  }, []);

  // Animamos los íconos
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prevPositions) =>
        prevPositions.map((pos) => {
          let newX = pos.x + pos.dx;
          let newY = pos.y + pos.dy;

          // Detectar colisión con los bordes del contenedor
          if (newX < 0 || newX + ICON_SIZE > 100) {
            pos.dx *= -1;
            newX = Math.min(100 - ICON_SIZE, Math.max(0, newX));
          }
          if (newY < 0 || newY + ICON_SIZE > 100) {
            pos.dy *= -1;
            newY = Math.min(100 - ICON_SIZE, Math.max(0, newY));
          }

          return {
            ...pos,
            x: newX,
            y: newY,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="fishbowl">
      {positions.map((pos, index) => (
        <img
          key={index}
          src={icons[index % icons.length]}
          alt={`icon-${index}`}
          className="fishbowl-icon"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transition: "transform 0.05s linear", // Suaviza el movimiento
          }}
        />
      ))}
    </div>
  );
}

function LanguagesChart() {
  const [barsVisible, setBarsVisible] = useState(false); // Controla si las barras se muestran
  const chartRef = useRef(null); // Referencia al contenedor del gráfico

  useEffect(() => {
    const element = chartRef.current; // Capturamos la referencia actual

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsVisible(true); // Activamos la animación cuando el elemento es visible
        }
      },
      { threshold: 0.5 } // Se activa cuando al menos el 50% de la sección está visible
    );

    if (element) {
      observer.observe(element); // Observamos el elemento
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Limpiamos la observación al desmontar
      }
    };
  }, []);

  return (
    <div className="languages-chart" ref={chartRef}>
      <div className="chart">
        {/* Barra 1 - Español */}
        <div className="bar">
          <div
            className={`bar-fill ${barsVisible ? "native" : ""}`}
            style={{
              height: barsVisible ? "100%" : "0%",
              transition: "height 1s ease-in-out",
            }}
          >
            <span className="bar-text">Native</span>
          </div>
        </div>

        {/* Barra 2 - Inglés */}
        <div className="bar">
          <div
            className={`bar-fill ${barsVisible ? "professional" : ""}`}
            style={{
              height: barsVisible ? "75%" : "0%",
              transition: "height 1s ease-in-out",
            }}
          >
            <span className="bar-text">Professional</span>
          </div>
        </div>

        {/* Barra 3 - Alemán */}
        <div className="bar">
          <div
            className={`bar-fill ${barsVisible ? "basic" : ""}`}
            style={{
              height: barsVisible ? "30%" : "0%",
              transition: "height 1s ease-in-out",
            }}
          >
            <span className="bar-text">Basic</span>
          </div>
        </div>
      </div>
      <div className="flagDiv">
        <div className="flagSpace">
          <img src={images.spain} alt="Spanish" className="flag" />
        </div>
        <div className="flagSpace">
          <img src={images.uk} alt="English" className="flag" />
        </div>
        <div className="flagSpace">
          <img src={images.germany} alt="German" className="flag" />
        </div>
      </div>
    </div>
  );
}





function CVPage() {
  return (
    <div>
      <section className="card" id="cv">
        <h2>Curriculum Vitae</h2>
        <p>
        Here you can find my up-to-date Curriculum Vitae as a developer, feel free to download it to learn more about my skills, experience, and projects.
        </p>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a
            href={process.env.PUBLIC_URL + '/resources/cv.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Get my CV
          </a>
        </div>
      </section>

      <section className="card cv-detail" id="cv2">
        <h3>Working Experience</h3>
        <p>
        This section highlights my professional journey as a developer. Explore the roles I’ve held, the projects I’ve contributed to, and the impact I’ve made across various organizations.
        </p>
        <span className="spanCV"><h4>2023 | LiveMed Iberia</h4><img src={images.livemed} alt="LiveMed Iberia" className="icon"/></span>
        <p>
          In my extracurricular practice for university I worked for half a year as a full-stack developer for this company. I dealed with huge databases in their Odoo CRM connecting this data with LiveMed website built using Python, JavaScript and Django framework. I also added new functionalities such as advertisement through Amazon affiliation programme, cookies collection and so on. Finally I worked with Android Studio and Eclipse in order to update LiveMedd app to API 30.
        </p>
        <span className="spanCV"><h4>2023 - Now | Deloitte</h4><img src={images.deloitte} alt="Deloitte" className="icon"/></span>
        <p>
          I have been working full time for Deloitte in several programming projects, focusing in IOS and in Swift apps development. This role made me improve in development of new views, functionalities and correction of incidents in various apps using Swift, SwiftUI and UIKit. I created numerous endpoints in the apps to connect with APIs using technologies such as Swagger. I also got used to dealing with clients daily under organizational issues and in a consulting capacity. Finally I improved my knowledge in version control with SourceTree and Azure, frequent use of pipelines.
        </p>
      </section>

      <section className="card project-detail" id="cv3">
        <h3>Technologies</h3>
        <p>
        This is an overview of the technologies and tools I’ve mastered throughout my career as a developer. From programming languages to frameworks, libraries, and development environments.
        </p>
        <h4>Professional experience</h4>
        <p>
          Some of the technologies that I have been focusing on: Swift, SwiftUI, UIKit, Python, JavaScript, MySQL, HTML, CSS, Git, Azure DevOps, Firebase.
        </p>

        <h4>Casual learning</h4>  
        <p>
        I have also learned other technologies that have been of interest to me for personal projects: Flutter, node.js, React, Java, PHP, C++, Swagger.  
        </p>
        {/* Componente de la pecera */}
        <Fishbowl />
      </section>

      <section className="card project-detail" id="cv4">
        <h3>Certificates</h3>
        <ul>
          <li>
            <a href={process.env.PUBLIC_URL + '/resources/C1.pdf'} target="_blank" rel="noopener noreferrer">Certificate in advanced English CAE (C1)</a>
          </li>
          <li>
            Incomedia Website X5 Certificate
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/resources/AGAcert.pdf'} target="_blank" rel="noopener noreferrer">Advanced Google Analytics</a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/resources/FDMcert.pdf'} target="_blank" rel="noopener noreferrer">Digital Marketing Google certificate</a>
          </li>
          <li>
            Flutter Certified Application Developer (in process...)
          </li>
        </ul>
      </section>

      <section className="card project-detail" id="cv5">
        <h3>Languages</h3>
        <p>Below you can see my proficiency levels for different languages:</p>
        <LanguagesChart />
      </section>
    </div>
  );
}

export default CVPage;
