import React from "react";
import CV from "../../assets/CV.pdf";

const Buttons = () => {
  return (
    <div className="buttons">
      <a href={CV} className="btn" id="btn1" target="_blank">
        Download CV
      </a>
      <a href="#contact" className="btn" id="btn2">
        Let's Talk
      </a>
    </div>
  );
};

export default Buttons;
