import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { backend, frontend } from "../../assets/information";

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <h5 className="text-light">What skills I haves</h5>
      <div className="container skills">
        <div className="frontend">
          <h3>Frontend Skills</h3>
          <div className="skills-content">
            {frontend.map((item, index) => (
              <article key={index} className="skill-details">
                <BsPatchCheckFill className="skill-details-icon" />
                <div>
                  <h4>{item.skill}</h4>
                  <small className="text-light">{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ----------------------------------------------------------------- */}
        <div className="backend">
          <h3>Backend Skills</h3>
          <div className="skills-content">
            {backend.map((item, index) => (
              <article key={index} className="skill-details">
                <BsPatchCheckFill className="skill-details-icon" />
                <div>
                  <h4>{item.skill}</h4>
                  <small className="text-light">{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
