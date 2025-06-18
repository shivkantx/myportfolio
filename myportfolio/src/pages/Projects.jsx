import React from "react";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { RiShareForwardFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="p-4 flex flex-wrap w-full bg-blue-950 justify-center items-start gap-3 rounded-2xl backdrop-blur-2xl">
      <div className="w-full flex flex-col items-center mb-6">
        <h1 className="text-4xl text-center font-medium text-white mb-4" data-aos="fade-up">
          Projects
        </h1>
        <div className="py-1 px-[45px] bg-purple-950 rounded-md"></div>
      </div>

      <div className="w-full flex flex-wrap justify-center items-start gap-4">
        {/* Project Cards */}
        {[
          {
            title: "E-commerce",
            description:
              "A full-stack e-commerce web app that lets users browse products, manage their cart, and place orders. Admins can control products, users, and orders. Built to showcase skills in modern web development with secure authentication and payment integration.",
            tech: ["JavaScript", "React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
          },
          {
            title: "Razorpay UI Clone",
            description:
              "This project is a responsive Razorpay website clone built using Tailwind CSS. It replicates the original site's layout and styling to showcase UI design skills and Tailwind proficiency.",
            tech: ["Html", "Css", "Tailwind CSS"],
          },
          {
            title: "Todos using React",
            description:
              "A full-stack e-commerce web app that lets users browse products, manage their cart, and place orders. Admins can control products, users, and orders. Built to showcase skills in modern web development with secure authentication and payment integration.",
            tech: ["JavaScript", "React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
          },
          {
            title: "Ayurvedic Medicine System",
            description:
              "A recommendation platform for Ayurvedic medicines based on symptoms and user input. Implements database management, dynamic suggestion logic, and basic CRUD operations with PHP and MySQL.",
            tech: ["Html", "Css", "Bootstrap", "JavaScript", "Php", "Mysql"],
          },
        ].map((project, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-[22%] lg:h-[460px] bg-gray-800 rounded-md p-3"
            data-aos="zoom-in"
          >
            <div className="flex flex-col items-start h-full">
              <div className="h-[170px] w-full rounded-md bg-blue-950" data-aos="fade-up"></div>
              <div className="w-full mt-2 text-left flex-1">
                <h1 className="text-xl font-bold text-white" data-aos="fade-right">
                  {project.title}
                </h1>
                <p className="text-xs text-gray-300" data-aos="fade-left">
                  {project.description}
                </p>

                <div
                  data-aos="fade-up"
                  className="flex flex-wrap justify-start gap-2 mt-3"
                >
                  {project.tech.map((tech) => (
                    <button
                      key={tech}
                      className="text-xs px-2 py-1 text-white bg-gray-500/50 p-3 border border-purple-500 rounded-xl transition-all duration-200 hover:bg-white/10 hover:scale-110"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              <div
                className="w-full mt-3 flex pt-4 text-xs px-2 justify-between items-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link
                  to=""
                  data-aos="zoom-in-right"
                  data-aos-delay="400"
                  className="p-2 flex items-center justify-center bg-gray-600/40 rounded-md hover:bg-blue transition-all hover:scale-105 hover:bg-gray-600/30"
                >
                  <p>Live Demo</p> &nbsp;<FaRegShareFromSquare />
                </Link>
                <Link
                  to=""
                  data-aos="zoom-in-left"
                  data-aos-delay="500"
                  className="p-2 flex items-center justify-center bg-gray-600/40 rounded-md hover:bg-blue transition-all hover:scale-105 hover:bg-gray-600/30"
                >
                  <p>View details</p>&nbsp;<RiShareForwardFill />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
