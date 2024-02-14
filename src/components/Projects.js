import React from "react";
import chat from "../assets/projects/chat app.avif";
import job from "../assets/projects/job portal.png";
import ecommerce from "../assets/projects/e-commerce.png";

const Projects = () => {
  const projects = [
    {
      name: "E-Commerce App",
      image: ecommerce, // Add the correct image path
      description:
        "Developed an e-commerce app enabling account creation, cart management, and order placement. Implemented secure data storage in Firebase Database.",
      technology: "HTML, CSS, ReactJS, Redux, Firebase",
      github: "https://github.com/Amrender9798/e-commerce-app",
      liveLink: "https://e-commerce-app-zp14.onrender.com/",
    },
    {
      name: "Job Portal App",
      image: job, // Add the correct image path
      description:
        "Crafted a Job Portal streamlining communication between job seekers and recruiters. Users can effortlessly apply for roles, while recruiters manage postings with ease.",
      technology: "HTML, CSS, NodeJS, ExpressJS, EJS",
      github: "https://github.com/Amrender9798/Job-Portal/tree/master",
      liveLink: "https://job-portal-0vwf.onrender.com",
    },
    {
      name: "Chat App",
      image: chat, // Add the correct image path
      description:
        "An user-friendly and feature-rich messaging application designed to connect people seamlessly.",
      technology: "HTML, CSS, Javascript, NodeJS, ExpressJS, Socket.io",
      github: "https://github.com/Amrender9798/Chat",
      liveLink: "http://165.227.178.171:5000/",
    },
  ];

  return (
    <div className="py-16 w-full mx-auto max-w-screen-xl">
      <h1 className="text-white text-4xl text-center mb-6 font-bold">
        PROJECTS
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/3 lg:w-1/4 mx-2 bg-white p-4 rounded-md shadow-md block"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{project.name}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-sm text-gray-500 mb-2">{project.technology}</p>
            <div className="flex space-x-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
