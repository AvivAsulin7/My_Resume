import react from "../assets/react.png";
import mongo from "../assets/mongo.png";
import nodejs from "../assets/nodejs.png";
import github from "../assets/github.png";
import java from "../assets/java.png";
import games from "../assets/games.jpg";
import gym from "../assets/gym.jpg";
import memories from "../assets/memories.jpg";
import todolist from "../assets/todolist.jpg";
import notes from "../assets/notes.jpg";
import resume from "../assets/resume.jpg";
import firebase from "../assets/firebase.png";
import render from "../assets/render.jpg";

export const technologies = [
  {
    name: "GitHub",
    description:
      "I use GitHub for all my projects. I use it to backup my work. It let me work on my projects from different computers.",
    img: github,
  },
  {
    name: "React",
    description:
      "My favorite language, I learned by myself I am very interested in learning web development and design.",
    img: react,
  },
  {
    name: "Java",
    description:
      "Java is the first language I learned, and I feel comfortable working with it. During my studies I mostly used Java.",
    img: java,
  },
  {
    name: "Node.js",
    description:
      "NodeJS is among the languages ​​I learned by myself. I have already used this in my projects with client side.",
    img: nodejs,
  },
  {
    name: "MongoDB",
    description:
      "MongoDB is the database I am most comfortable working with in my projects. It is very convenient to use.",
    img: mongo,
  },
  {
    name: "Firebase",
    description:
      "With Firebase I deploy some of my projects. I found Firebase to be really simple and convenient for this purpose.",
    img: firebase,
  },
  {
    name: "Render",
    description:
      "Like Firebase, I discovered Render, which allows me to deploy my works . For me - the best way to do this. ",
    img: render,
  },
];

//============================================================================//

export const projects = [
  {
    name: "Memories",
    Languages: "",
    img: memories,
    githubCode: "https://github.com/AvivAsulin7/Memories",
    link: "https://memories-original.onrender.com/",
  },
  {
    name: "Console Games Store",
    Languages: "",
    img: games,
    githubCode: "https://github.com/AvivAsulin7/Video-Games-Consoles-Shop",
    link: "https://github.com/AvivAsulin7/Video-Games-Consoles-Shop",
  },
  {
    name: "To Do List",
    Languages: "",
    img: todolist,
    githubCode: "https://github.com/AvivAsulin7/To_Do_List",
    link: "https://to-do-list-frontend.onrender.com/",
  },
  {
    name: "Gym Exercises App",
    Languages: "https://gym-exercises-app-47289.web.app/",
    img: gym,
    githubCode: "https://github.com/AvivAsulin7/Gym-Exercises-App",
    link: "https://gym-exercises-app-5cf0d.firebaseapp.com/",
  },
  {
    name: "My Resume",
    Languages: "",
    img: resume,
    githubCode: "https://github.com/AvivAsulin7/My_Resume",
    link: "",
  },
  {
    name: "Notes App",
    Languages: "",
    img: notes,
    githubCode: "https://github.com/AvivAsulin7/Notes",
    link: "https://avivasulin7.github.io/Notes/",
  },
];
