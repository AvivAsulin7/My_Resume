import React from "react";
import "./About.css";
import London_style2 from "../../assets/London_style2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={London_style2} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos
            voluptatem eius dolorem maiores nihil ducimus at rem ullam
            reprehenderit quidem quia deserunt, molestiae, eligendi amet
            repellat molestias quos totam.
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
