import React from "react";
import "./About.css";
import London_style2 from "../../assets/London_style2.png";
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
            I'm 3rd Year Computer Science Student with 2 semesters left at Sapir
            Academic College. <br />
            <GiCheckMark className="icon-check" />
            As a student, I divide my time between Collage tasks and
            self-learning projects.
            <br />
            Apart from my bachelor's degree studies, I am learning new languages
            ​​and different technologies myself in order to improve my
            programming skills.
            <br />
            <GiCheckMark className="icon-check" />
            Current GPA 90. <br />
            <GiCheckMark className="icon-check" />
            Currently I'm looking for a part-time student position/internship.
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
