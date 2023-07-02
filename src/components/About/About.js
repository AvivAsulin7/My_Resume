import React from "react";
import "./About.css";
import London_style2 from "../../assets/London_style2.webp";
import { GiCheckMark } from "react-icons/gi";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about">
        <div className="about-me">
          <div className="about-me-image">
            <img src={London_style2} alt="About Image" />
          </div>
        </div>

        <div className="about-content">
          <p>
            Hello everyone! <br /> My name is Aviv , and I would like to tell
            you about myself: <br />
            <GiCheckMark className="icon-check" />
            I'm enthusiastic and passionate full stack developer. <br />
            <GiCheckMark className="icon-check" />
            Currently I'm full Stack developer in Metgo as internship position.
            <br />
            <GiCheckMark className="icon-check" />
            B.Sc. in Computer Science with GPA 90. <br />
            <GiCheckMark className="icon-check" />
            Highly skilled in creating independent development projects. <br />
            <GiCheckMark className="icon-check" />I am looking for Full Stack
            Developer position.
          </p>

          <a href="#contact" className="btn" id="btn1">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
