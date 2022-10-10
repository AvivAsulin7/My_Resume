import React from "react";
import "./Technologies.css";
import { technologies } from "../../assets/information";
import { projects } from "../../assets/information";

const Technologies = () => {
  return (
    <section id="skills">
      <div className="container techno">
        <h2>Technologies</h2>
        <h4 className="text-light">
          As a programmer, I find that learning about new technologies help my
          development, and gives me new tools to improve my apps.
        </h4>
        <div className="technologies">
          {projects.map((item, index) => {
            return (
              <div key={index} className="techno-content">
                <div className="techno-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="techno-details">
                  <h3>{item.name}</h3>
                  <div className="portfolio__item-cta">
                    <a href="" className="btn" id="btn2" target="_blank">
                      GitHub
                    </a>
                    <a href="" className="btn" id="btn2" target="_blank">
                      Link
                    </a>
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

export default Technologies;
