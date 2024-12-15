import React from "react";
import "./App.css";
import images from "./resources/images";

function ProjectsPage() {
  return (
    <div className="App">
      {/* Contenido de la página de proyectos */}
      <section className="card">
        <h2>Projects</h2>
        <p>Apart from this website using React, this section compiles some of the projects that I have been working on during these years in which I have been developing my interest in programming and learning new technologies.
        </p>
      </section>
      <section className="card project-detail">
        <h3>Machine Learning risk calculator for cancer patients</h3>
        <p>Final project made for Computer Engineering. With a MySQL database that compiles characteristics of up to 300 patients, it incorporates a machine learning model that predict survival from the disease they suffered from. It is a website based on Python, PHP, JavaScript and HTML.</p>
        <div className="icon-collector">
          <img src={images.python} alt="Python" className="icon" /><img src={images.php} alt="PHP" className="icon" /><img src={images.mysql} alt="MySQL" className="icon" /><img src={images.js} alt="JavaScript" className="icon" />
        </div>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8NQ4BtDhhCA?si=VcPaTIs042DBhIzm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
      <section className="card project-detail">
        <h3>NBA Sorare Data Machine</h3>
        <p>It is a website that has a connection endpoint with the Sorare NBA API from which all the players in the database are collected. Using webscrapping, other characteristics of these players are obtained. This website includes functionalities such as a table that allows filtering by characteristics of the different players, a team builder and a recommender of optimal lineups according to the expected points for the current matchday. It was developed using Python and JavaScript as main technologies. </p>
        <div className="icon-collector">
          <img src={images.python} alt="Python" className="icon" /><img src={images.js} alt="JavaScript" className="icon" />
        </div>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/THd2ts2KMZQ?si=sw9n2qOZxckqVmvr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
      <section className="card project-detail">
        <h3>LaLiga Fantasy Data Machine</h3>
        <p>This website that has a connection endpoint with LaLiga Fantasy API from which every player in the database is collected. It is a template of the previous project, gathering the structure and some basic functionalities. It was developed using Python and JavaScript as main technologies. </p>
        <div className="icon-collector">
          <img src={images.python} alt="Python" className="icon" /><img src={images.js} alt="JavaScript" className="icon" />
        </div>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/02mTI5rtYxg?si=6BB0YulqhfgTZPjK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
      <section className="card project-detail">
        <h3>HeatMill Dating App</h3>
        <p>
        Dating app that implements a relationship algorithm based on physical and personality questions to the user. It uses a Firebase database that handles chats between users, modifiable profile and future authentication. It is based on Flutter technology.</p>
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
