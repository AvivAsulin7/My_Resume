import React from "react";
import Reveal from "../Reveal";
import "./About.css";
import London_style2 from "../../assets/London_style2.webp";
import { GiCheckMark } from "react-icons/gi";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const About = () => {
  return (
    <section id="about">
      <Reveal>
        <h2>About Me</h2>
      </Reveal>
      <div className="container about">
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="splash" style={{ background: "#B0DAFF" }} />
          <motion.div variants={cardVariants}>
            <div>
              <div className="about-me-image">
                <img src={London_style2} alt="About Img" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <Reveal>
          <div className="about-content">
            <p>
              Hello everyone! <br /> My name is Aviv , and I would like to tell
              you about myself: <br />
              <GiCheckMark className="icon-check" />
              I'm enthusiastic and passionate full stack developer. <br />
              <GiCheckMark className="icon-check" />
              Currently I'm full Stack developer in MetGo as internship
              position.
              <br />
              <GiCheckMark className="icon-check" />
              B.Sc. in Computer Science with GPA 90. <br />
              <GiCheckMark className="icon-check" />
              Highly skilled in creating independent development projects.{" "}
              <br />
              <GiCheckMark className="icon-check" />I am looking for Full Stack
              Developer position.
            </p>

            <a href="#contact" className="btn" id="btn1">
              Let's Talk
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
