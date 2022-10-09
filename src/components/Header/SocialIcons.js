import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="social">
      <a href="https://linkdein.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://facebook.com" target="_blank">
        <FaFacebookSquare />
      </a>
    </div>
  );
};

export default SocialIcons;
