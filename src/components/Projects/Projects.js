import React from "react";
import "./Projects.css";
import { projects } from "../../assets/information";

const Projects = () => {
  return (
    <section id="projects">
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
                  <div className="buttons details">
                    <a
                      href={item.githubCode}
                      className="btn"
                      id="btn1"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    {item.link !== "" ? (
                      <a
                        href={item.link}
                        className="btn1"
                        id="btn3"
                        target="_blank"
                      >
                        Link
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
