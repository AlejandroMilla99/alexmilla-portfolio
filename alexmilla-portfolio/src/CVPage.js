import React, { useEffect, useState, useRef } from "react";
import images from "./resources/images";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
            <span className="bar-text">{t('cvPage.native')}</span>
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
            <span className="bar-text">{t('cvPage.professional')}</span>
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
            <span className="bar-text">{t('cvPage.basic')}</span>
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
  const { t } = useTranslation();

  return (
    <div>
      <section className="card" id="cv">
        <h2>{t('header.cv')}</h2>
        <p>
          {t('cvPage.description')}
        </p>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a
            href={process.env.PUBLIC_URL + '/resources/cv.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            {t('cvPage.get')}
          </a>
        </div>
      </section>

      <section className="card cv-detail" id="cv2">
        <h3>{t('cvPage.workTitle')}</h3>
        <p>
        {t('cvPage.workIntro')}
        </p>
        <span className="spanCV"><h4>2023 | LiveMed Iberia</h4><img src={images.livemed} alt="LiveMed Iberia" className="icon"/></span>
        <p>
        {t('cvPage.workLivemedDescription')}
        </p>
        <span className="spanCV"><h4>{t('cvPage.workDeloitteTitle')}</h4><img src={images.deloitte} alt="Deloitte" className="icon"/></span>
        <p>
        {t('cvPage.workDeloitteDescription')}
        </p>
      </section>

      <section className="card project-detail" id="cv3">
        <h3>{t('cvPage.techTitle')}</h3>
        <p>
        {t('cvPage.techIntro')}        </p>
        <h4>{t('cvPage.techProfessionalTitle')}</h4>
        <p>
        {t('cvPage.techProfessionalDescription')}
        </p>

        <h4>{t('cvPage.techCasualTitle')}</h4>  
        <p>
        {t('cvPage.techCasualDescription')}  
        </p>
        {/* Componente de la pecera */}
        <Fishbowl />
      </section>

      <section className="card project-detail" id="cv4">
        <h3>{t('cvPage.certificates')}</h3>
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
            <a href="https://academy.cognigy.com/certificates/eaaw3q9bts" target="_blank" rel="noopener noreferrer"> Certified Specialist in Cognigy.AI conversational artificial intelligence</a>
          </li>
          <li>
            <a href="https://androidatc.com/_transcript.php?action=public&u=kc7X0N7Q28WfmaOV267I19vYzaakll7G4Q%3D%3D" target="_blank" rel="noopener noreferrer">Flutter Certified Application Developer</a>
          </li>
        </ul>
      </section>

      <section className="card project-detail" id="cv5">
        <h3>{t('cvPage.languagesTitle')}</h3>
        <p>{t('cvPage.languagesDescription')}</p>
        <LanguagesChart />
      </section>
    </div>
  );
}

export default CVPage;
