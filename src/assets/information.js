import react from "../assets/react.webp";
import nodejs from "../assets/nodejs.webp";
import github from "../assets/github.webp";
import java from "../assets/java.webp";
import django from "../assets/django.png";
import render from "../assets/render.webp";
import games from "../assets/games.webp";
import gym from "../assets/gym.webp";
import memories from "../assets/memories.webp";
import travels from "../assets/travels.png";
import reactnative from "../assets/reactnative.png";
import events from "../assets/events.png";
import resume from "../assets/resume.webp";
import movies from "../assets/movies.jpg";

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
    name: "React Native",
    description:
      "I discovered mobile development as part of my internship at Metago, I really like developing in React Native.",
    img: reactnative,
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
    name: "Django",
    description:
      "I used this framework as backend side to my project final. I'ts was wondetful to learn new technology.",
    img: django,
  },

  {
    name: "Render",
    description:
      "I discovered Render, which allows me to deploy my works . For me - the best way to do this. ",
    img: render,
  },
];

//============================================================================//

export const projects = [
  {
    name: "King Of Tickets",
    Languages: "React | Django | MySQL | MUI | Google Maps API",
    img: events,
    githubCode: "https://github.com/AvivAsulin7/KingOfTickets",
  },
  {
    name: "Travel Sharing App",
    Languages: "React | Express.js | MongoDB | MUI | Google Maps API | JWT",
    img: travels,
    githubCode: "https://github.com/AvivAsulin7/Travel-Sharing-App",
    link: "https://travel-app-ww2y.onrender.com/",
  },
  {
    name: "Movies Mobile App",
    Languages: "React Native | TypeScript | API ",
    img: movies,
    githubCode: "https://github.com/AvivAsulin7/Video-Games-Consoles-Shop",
    link: "",
  },
  {
    name: "Memories",
    Languages: "React | Express.js | MongoDB | Redux",
    img: memories,
    githubCode: "https://github.com/AvivAsulin7/Memories",
    link: "https://memories-original.onrender.com/",
  },
  {
    name: "Gym Exercises App",
    Languages: "React | MUI | Rapid API",
    img: gym,
    githubCode: "https://github.com/AvivAsulin7/Gym-Exercises-App",
    link: "https://gym-exercises-app-5cf0d.firebaseapp.com/",
  },
  {
    name: "My Resume",
    Languages: "React",
    img: resume,
    githubCode: "https://github.com/AvivAsulin7/My_Resume",
    link: "",
  },
  {
    name: "Console Games Store",
    Languages: "React | MUI",
    img: games,
    githubCode: "https://github.com/AvivAsulin7/Video-Games-Consoles-Shop",
    link: "https://github.com/AvivAsulin7/Video-Games-Consoles-Shop",
  },
];

//============================================================================//

export const frontend = [
  { skill: "React", level: "Advanced" },
  { skill: "React Native", level: "Intermediate" },
  { skill: "JavaScript", level: "Advanced" },
  { skill: "TypeScript", level: "Intermediate" },
  { skill: "HTML", level: "Advanced" },
  { skill: "CSS", level: "Advanced" },
  { skill: "Material UI", level: "Advanced" },
];

export const backend = [
  { skill: "Java", level: "Advanced" },
  { skill: "Python", level: "Intermediate" },
  { skill: "Node.js", level: "Advanced" },
  { skill: "Django", level: "Intermediate" },
  { skill: "MongoDB", level: "Advanced" },
  { skill: "MySQL", level: "Intermediate" },
];
