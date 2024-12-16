import React from "react";
import "./App.css";
import images from "./resources/images";
import { useTranslation } from "react-i18next";

function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <div className="App">
      {/* Contenido de la página de proyectos */}
      <section className="card">
        <h2>{t('projectsPage.title')}</h2>
      <p>{t('projectsPage.description')}</p>
      </section>
      <section className="card project-detail">
        <h3>{t('projectsPage.calculatorTitle')}</h3>
        <p>{t('projectsPage.calculatorDescription')}</p>
        <div className="icon-collector">
          <img src={images.python} alt="Python" className="icon" /><img src={images.php} alt="PHP" className="icon" /><img src={images.mysql} alt="MySQL" className="icon" /><img src={images.js} alt="JavaScript" className="icon" />
        </div>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8NQ4BtDhhCA?si=VcPaTIs042DBhIzm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
      <section className="card project-detail">
        <h3>{t('projectsPage.sorareTitle')}</h3>
        <p>{t('projectsPage.sorareDescription')}</p>
        <div className="icon-collector">
          <img src={images.python} alt="Python" className="icon" /><img src={images.js} alt="JavaScript" className="icon" />
        </div>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/THd2ts2KMZQ?si=sw9n2qOZxckqVmvr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
      <section className="card project-detail">
        <h3>{t('projectsPage.fantasyTitle')}</h3>
        <p>{t('projectsPage.fantasyDescription')}</p>
        <div className="icon-collector">
          <img src={images.python} alt="Python" className="icon" /><img src={images.js} alt="JavaScript" className="icon" />
        </div>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/02mTI5rtYxg?si=6BB0YulqhfgTZPjK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
      <section className="card project-detail">
        <h3>{t('projectsPage.datingTitle')}</h3>
        <p>{t('projectsPage.datingDescription')}</p>
        <div className="icon-collector">
          <img src={images.flutter} alt="Flutter" className="icon" /><img src={images.firebase} alt="Firebase" className="icon" />
        </div>
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/kQ2MIm49lJA?si=e2VV96kOXjABfGNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
