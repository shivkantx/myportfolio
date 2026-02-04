import React, { useState } from "react";
import { FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import "aos/dist/aos.css";

import stackflow from "../assets/project-previews/stackflow.png";
import queue from "../assets/project-previews/queue.png";
import authsystem from "../assets/project-previews/auth-system.png";
import cloudinary from "../assets/project-previews/cloudinary.png";
import portfolio from "../assets/project-previews/portfolio.png";

function Projects() {
  const [previewImage, setPreviewImage] = useState(null);

  const projectList = [
    {
      title: "StackOverflow Clone (Full Stack)",
      description:
        "A full-stack Q&A platform built with Next.js and Appwrite featuring authentication, posting, voting and responsive UI.",
      tech: ["Next.js", "Appwrite", "Authentication", "Full Stack"],
      image: stackflow,
      liveLink: "https://stackoverflow-appwrite-three.vercel.app/",
      githubLink: "https://github.com/shivkantx/stackoverflow-appwrite",
    },
    {
      title: "VideoTube Backend API",
      description:
        "Scalable REST API featuring JWT authentication and structured backend architecture.",
      tech: ["Node.js", "Express.js", "JWT", "REST API"],
      backendOnly: true,
      githubLink: "https://github.com/shivkantx/VideoTube",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Modern animated portfolio showcasing projects, skills and resume.",
      tech: ["React", "Tailwind CSS", "Animations"],
      image: portfolio,
      liveLink: "https://myportfolio-mu-self-66.vercel.app/",
      githubLink: "https://github.com/shivkantx/myportfolio",
    },
    {
      title: "Authentication System with User Management",
      description:
        "Secure authentication system built with Next.js and MongoDB featuring login, logout, password recovery and protected routes.",
      tech: ["Next.js", "MongoDB", "Authentication", "User Operations"],
      image: authsystem,
      liveLink: "https://youtube-next-js-ftwv.vercel.app/login",
      githubLink: "https://github.com/shivkantx/youtube-next-js",
    },
    {
      title: "Cloudinary Media Tool",
      description:
        "Cloudinary-powered application for secure media uploads and social sharing workflows.",
      tech: ["React", "Cloudinary API", "Media Handling"],
      image: cloudinary,
      liveLink: "https://cloudinary-ssh.vercel.app/social-share",
      githubLink: "https://github.com/shivkantx/Cloudinary-SSH",
    },
    {
      title: "Queue Management System",
      description:
        "A complete queue handling system to efficiently manage user flow with clean UI and structured system logic.",
      tech: ["Next.js", "React", "System Logic"],
      image: queue,
      liveLink: "https://queue-management-system-ten.vercel.app/",
      githubLink: "https://github.com/shivkantx/Queue-Management-System",
    },
  ];

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-12 lg:px-20 bg-[#0d0d1e] text-white font-poppins overflow-hidden">

      {/* Header */}
      <div
        className="relative z-10 max-w-screen-xl mx-auto text-center mb-16"
        data-aos="fade-down"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
          My Portfolio
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Real-world projects showcasing full-stack and modern frontend development.
        </p>
      </div>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">

        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900/60 rounded-2xl p-6 shadow-2xl border border-gray-700 backdrop-blur-md
            transform transition-all duration-500 hover:scale-[1.03] hover:shadow-purple-700/40 hover:border-purple-500
            group relative overflow-hidden"
            data-aos="zoom-in-up"
            data-aos-delay={index * 150}
          >

            {/* IMAGE OR BACKEND PLACEHOLDER */}
            <div className="h-[180px] rounded-xl mb-6 overflow-hidden cursor-pointer">

              {project.backendOnly ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-400 text-sm italic">
                  Backend Project — No UI Preview
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  onClick={() => setPreviewImage(project.image)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}

            </div>

            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text">
              {project.title}
            </h2>

            <p className="text-gray-300 text-sm mb-4 min-h-[90px] leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-purple-600/30 text-purple-200 text-xs px-3 py-1 rounded-full border border-purple-500
                  hover:bg-purple-500 hover:text-white transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">

              {!project.backendOnly && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex p-0.5 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 hover:scale-105 transition shadow-md"
                >
                  <span className="px-4 py-2 bg-[#0d0d1e] rounded-full flex items-center gap-1.5">
                    Demo <FaExternalLinkAlt className="text-xs" />
                  </span>
                </a>
              )}

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex p-0.5 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 hover:scale-105 transition shadow-md"
              >
                <span className="px-4 py-2 bg-[#0d0d1e] rounded-full flex items-center gap-1.5">
                  Code <FaInfoCircle className="text-xs" />
                </span>
              </a>

            </div>
          </div>
        ))}
      </div>

      {/* IMAGE PREVIEW MODAL */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}

    </section>
  );
}

export default Projects;
