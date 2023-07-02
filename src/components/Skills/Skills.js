import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <h5 className="text-light">What skills I haves</h5>
      <div className="container skills">
        <div className="frontend">
          <h3>Frontend Skills</h3>
          <div className="skills-content">
            <article className="skill-details">
              <BsPatchCheckFill className="skill-details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-details-icon" />
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* ----------------------------------------------------------------- */}
        <div className="backend">
          <h3>Backend Skills</h3>
          <div className="skills-content">
            <article className="skill-details">
              <BsPatchCheckFill className="skill-details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-details-icon" />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-details-icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
