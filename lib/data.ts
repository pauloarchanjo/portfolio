import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaRegFileAlt } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import miniconsImg from "@/public/minicons.png";
import automatefilesImg from "@/public/automate-download-files.png";
import ampguitarImg from "@/public/amp-guitar-web.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Technician",
    location: "Campinas, BR",
    description:
      "I graduated after 2 years of studying. Throughout this course, i've learned web development, data science, artificial intelligence and more.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
  {
    title: "Mid Web Developer",
    location: "Campinas, BR",
    description:
      "I worked as a web developer for almost a year in a marketing agency. There, i've worked with HTML, CSS, JavaScript, PHP, SQL and tools like WordPress.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Business Analyst",
    location: "Hortolândia, BR",
    description:
      "I'm now a Business Analyst working in a project on IBM. My role is manage data contracts and optimize my process with development tools.",
    icon: React.createElement(FaRegFileAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Minicons",
    description:
      "Minicons is a repository dedicated to providing a collection of SVG logos curated and enhanced for various uses, particularly for integration in personal projects.",
    tags: ["Figma", "Photoshop", "Illustrator", "Git",],
    imageUrl: miniconsImg,
  },
  {
    title: "Automate Files",
    description:
      "A automation made with Python which all files that you include in downloads folder, is redirected to another folder designated for specific extensions.",
    tags: ["Python", "Git",],
    imageUrl: automatefilesImg,
  },
  {
    title: "Amp Guitar",
    description:
      "A guitar amp app made for web. This code was made in a study of certain JS libraries related to sound management.",
    tags: ["HTML", "CSS", "JavaScript", "Git",],
    imageUrl: ampguitarImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "WordPress",
  "Bootstrap",
  "Tailwind",
  "Node.js",
  "C++",
  "C#",
  "Git",
  "Python",
  "Django",
  "Pandas",
  "Matplotlib",
  "OpenCV",
  "Photoshop",
  "Figma",
  "Illustrator"
] as const;
