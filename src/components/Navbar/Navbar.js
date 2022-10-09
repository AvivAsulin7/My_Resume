import React from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { SiSkillshare } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#skills">
        <SiSkillshare />
      </a>
      <a href="#projects">
        <MdWorkOutline />
      </a>
      <a href="#contact">
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Navbar;
