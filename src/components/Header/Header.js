import React from "react";
import "./Header.css";
import Buttons from "./Buttons";
import SocialIcons from "./SocialIcons";
import Londonremove from "../../assets/Londonremove.png";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="start">
        <h1>
          <a href="#about" className="name">
            I'm Aviv Asulin.
          </a>
        </h1>
        <h2>Fullstack Developer</h2>
        <Buttons />
        <SocialIcons />
      </div>
    </header>
  );
};

export default Header;
