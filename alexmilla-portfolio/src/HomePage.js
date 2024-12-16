import React from "react";
import images from "./resources/images";

function HomePage() {
  return (
    <div>
      <section className="card" id="inicio">
        <h2>Sobre mí</h2>
        <img src={images.home} alt="Mi Logo" className="iconMe" />
        <p>
        I am Alejandro Milla Ramírez, I was born in Málaga and since I was little I have been interested in the world of computers and the Internet, making them part of my hobbies. That is why, later, I decided to study a double degree in Computer Engineering and Business Management at Universidad Complutense in Madrid. During my degree I realized that programming aroused great interest in me, leading me to research new technologies to create attractive and efficient solutions. With experience in mobile and web application development, I specialize in building intuitive and functional interfaces using modern technologies such as React, Swift and Python, with which I currently develop my work life.
        </p>
      </section>
      <section>
        <div className="rowRainbow">
          <div className="cardRainbow">
            <h3>My projects</h3>
            <img src={images.rocket} alt="Project" className="iconHome" />
            <p>
              I have developed some personal projects that have made me learn about new programming languages ​​and frameworks, know about some of them here.
            </p>
            <a href="#/projects" className="hover-btn">Know More</a>
            <span className="spanRainbow top"></span>
            <span className="spanRainbow right"></span>
            <span className="spanRainbow bottom"></span>
            <span className="spanRainbow left"></span>
          </div>
          <div className="cardRainbow">
            <h3>Curriculum Vitae</h3>
            <img src={images.cv} alt="CV" className="iconHome" />
            <p>
              If you are interested in knowing more about the technologies I use, my work experience or my certificates, this is your section.
            </p>
            <a href="#/cv" className="hover-btn">Know More</a>
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
