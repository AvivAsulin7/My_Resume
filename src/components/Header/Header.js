import React from "react";
import "./Header.css";
import Buttons from "./Buttons";
import SocialIcons from "./SocialIcons";

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
        <div>
          <Buttons />
          <SocialIcons />
        </div>
      </div>
    </header>
  );
};

export default Header;
