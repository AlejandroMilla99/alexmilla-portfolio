import React from "react";
import images from "./resources/images";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="card" id="inicio">
        <h2>{t('homepage.title')}</h2>
        <img src={images.home} alt="Mi Logo" className="iconMe" />
        <p>{t('homepage.description')}</p>
      </section>
      <section>
        <div className="rowRainbow">
          <div className="cardRainbow">
            <h3>{t('header.projects')}</h3>
            <img src={images.rocket} alt="Project" className="iconHome" />
            <p>
            {t('homepage.projectsDescription')}
            </p>
            <Link to="/projects" className="hover-btn">{t('homepage.know')}</Link>
            <span className="spanRainbow top"></span>
            <span className="spanRainbow right"></span>
            <span className="spanRainbow bottom"></span>
            <span className="spanRainbow left"></span>
          </div>
          <div className="cardRainbow">
            <h3>{t('header.cv')}</h3>
            <img src={images.cv} alt="CV" className="iconHome" />
            <p>
            {t('homepage.cvDescription')}
            </p>
            <Link to="/cv" className="hover-btn">{t('homepage.know')}</Link>
            <span className="spanRainbow top"></span>
            <span className="spanRainbow right"></span>
            <span className="spanRainbow bottom"></span>
            <span className="spanRainbow left"></span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
