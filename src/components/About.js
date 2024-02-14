import React from "react";
import image from "./images.png";

const About = () => {
  return (
    <section className="text-white flex items-center justify-center min-h-[87vh]">
      <div className="max-w-4xl p-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-4 flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4 text-yellow-400">
              Hi, I'm Amrender
            </h1>
            <p className="text-2xl mb-4 text-gray-300">
              Full stack developer with a passion for creating stunning and
              functional websites. Let's turn your ideas into reality with
              beautiful designs and seamless functionality.
            </p>

            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded w-36 transition duration-300 transform hover:scale-105 animate__animated animate__heartBeat">
              <a
                href="https://drive.google.com/file/d/19kYiCO_ADAb4IyfMtKhvKuzo_hUKQxMq/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </button>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img
              src={image}
              alt="Your Alt Text"
              className="w-full h-auto rounded-full animate__animated animate__fadeInRight"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
