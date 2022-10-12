import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="social">
      <a href="https://www.linkedin.com/in/avivasulin7/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/AvivAsulin7" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/aviv.asulin.9" target="_blank">
        <FaFacebookSquare />
      </a>
    </div>
  );
};

export default SocialIcons;
