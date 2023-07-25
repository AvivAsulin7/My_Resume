import React from "react";
import "./Projects.css";
import { projects } from "../../assets/information";
import Reveal from "../Reveal";

const Projects = () => {
  return (
    <section id="projects">
      <Reveal>
        <div className="container pro">
          <h2>My Projects</h2>
          <h5 className="text-light">Some of my works ..</h5>
          <div className="projects">
            {projects.map((item, index) => {
              return (
                <div key={index} className="projects-content">
                  <div className="projects-img">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="projects-details">
                    <h3>{item.name}</h3>
                    <small className="text-light">{item.Languages}</small>
                    <div className="buttons details">
                      <a
                        href={item.githubCode}
                        className="btn"
                        id="btn1"
                        target="_blank"
                      >
                        GitHub
                      </a>
                      {item.link && (
                        <a
                          href={item.link}
                          className="btn1"
                          id="btn3"
                          target="_blank"
                        >
                          Link
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Projects;
