import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-name">
        Aviv Asulin
      </a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Works</a>
        </li>
        <li>
          <a href="#technologies">Technologies</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a href="https://www.facebook.com/aviv.asulin.9" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/avivasulin7/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/AvivAsulin7" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div>
        <small>&copy; Aviv Asulin</small>
      </div>
    </footer>
  );
};

export default Footer;
