import React from "react";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import mongodb from "../assets/skills/mongodb.png";
import java from "../assets/skills/Java.webp";
import springboot from "../assets/skills/springboot.png";
import mysql from "../assets/skills/mysql.png";
import javascript from "../assets/skills/javascript.png";
import express from "../assets/skills/express.png";

const skillsData = [
  { name: "Java", logo: java },
  { name: "JavaScript", logo: javascript },
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "React", logo: react },
  { name: "Spring Boot", logo: springboot },
  { name: "Node.js", logo: node },
  { name: "Express.js", logo: express },
  { name: "MySQL", logo: mysql },
  { name: "MongoDB", logo: mongodb },
];

const Skills = () => {
  return (
    <div className="my-10 w-full mx-auto max-w-screen-xl">
      <h1 className="text-white text-4xl mb-6 text-center font-bold">SKILLS</h1>
      <div className="grid grid-cols-5 gap-4 md:grid-cols-4 md:gap-6 lg:grid-cols-5 lg:gap-8 bg-white text-white py-6 px-4 md:px-6 lg:px-8">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={skill.logo}
              alt={`Skill ${index + 1}`}
              className="h-20 md:h-24 lg:h-32 mx-4 my-4 object-contain"
            />
            <span className="text-gray-700 text-sm mt-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
