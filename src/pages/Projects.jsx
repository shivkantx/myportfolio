import React from "react";
import { FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa"; // More descriptive icons
import "aos/dist/aos.css";

function Projects() {
  const projectList = [
    {
      title: "E-commerce Platform",
      description:
        "A robust full-stack e-commerce web application enabling users to browse products, manage their shopping cart, and securely place orders. Features include comprehensive admin controls for product and order management.",
      tech: [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      imageGradient: "from-blue-600 to-purple-600", // Custom gradient for each project image placeholder
      liveLink: "#", // Replace with actual live demo URL
      githubLink: "#", // Replace with actual GitHub repo URL
    },
    {
      title: "Razorpay UI Clone",
      description:
        "A pixel-perfect and highly responsive clone of the Razorpay website, meticulously crafted to demonstrate advanced front-end development skills and a keen eye for UI/UX detail using Tailwind CSS.",
      tech: ["HTML5", "CSS3", "Tailwind CSS"],
      imageGradient: "from-teal-500 to-green-500",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "React Task Manager", // More professional title
      description:
        "A dynamic task management application built with React, featuring full CRUD (Create, Read, Update, Delete) operations, intuitive filtering capabilities, and persistent state management for a seamless user experience.",
      tech: [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      imageGradient: "from-orange-500 to-red-500",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Ayurvedic Medicine System",
      description:
        "A comprehensive web-based platform developed with PHP and MySQL, designed to recommend Ayurvedic medicines. Users can input symptoms or search criteria to receive personalized medicine suggestions.",
      tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      imageGradient: "from-yellow-500 to-amber-500",
      liveLink: "#",
      githubLink: "#",
    },
    // Add more projects here following the same structure
    // {
    //   title: "Project Title",
    //   description: "Brief description of the project.",
    //   tech: ["Tech1", "Tech2"],
    //   imageGradient: "from-cyan-500 to-blue-500",
    //   liveLink: "#",
    //   githubLink: "#",
    // },
  ];

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-12 lg:px-20 bg-[#0d0d1e] text-white font-poppins overflow-hidden">
      {/* Background Gradients/Blobs (Consistent with other pages) */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-700 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-pink-600 to-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-slow animation-delay-3000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-teal-500 to-lime-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-slow animation-delay-6000"></div>

      {/* Section Header */}
      <div
        className="relative z-10 max-w-screen-xl mx-auto text-center mb-16"
        data-aos="fade-down"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-wide bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text drop-shadow-lg">
          My Portfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-5 max-w-2xl mx-auto font-light leading-relaxed">
          Dive into a curated selection of my most impactful projects,
          showcasing my expertise in full-stack development, clean code, and
          intuitive user experiences.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900/60 rounded-2xl p-6 shadow-2xl border border-gray-700 backdrop-blur-md
                       transform transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-purple-700/40 hover:border-purple-500
                       group relative overflow-hidden" // Added group and relative for inner animations
            data-aos="zoom-in-up"
            data-aos-delay={index * 150}
          >
            {/* Project Image Placeholder (Dynamic Gradient) */}
            <div
              className={`h-[180px] rounded-xl mb-6 overflow-hidden relative group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br ${project.imageGradient}`}
            >
              {/* Optional: Add a subtle pattern or icon over the gradient */}
              <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {/* Example: <FaCode /> or a project-specific icon */}
              </div>
            </div>

            <h2
              className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text"
              data-aos="fade-right"
              data-aos-delay={index * 150 + 100}
            >
              {project.title}
            </h2>
            <p
              className="text-gray-300 text-sm mb-4 min-h-[90px] leading-relaxed" // Increased min-height for consistent card size
              data-aos="fade-left"
              data-aos-delay={index * 150 + 200}
            >
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div
              className="flex flex-wrap gap-2 mb-6"
              data-aos="fade-up"
              data-aos-delay={index * 150 + 300}
            >
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-purple-600/30 text-purple-200 text-xs px-3 py-1 rounded-full border border-purple-500
                             hover:bg-purple-500 hover:text-white hover:scale-105 transition-all duration-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div
              className="flex justify-between items-center pt-4 border-t border-gray-700/50" // Subtle separator
              data-aos="fade-up"
              data-aos-delay={index * 150 + 400}
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-200 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
              >
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#0d0d1e] rounded-full group-hover:bg-opacity-0 flex items-center gap-1.5">
                  {" "}
                  {/* Reduced padding and gap */}
                  Demo <FaExternalLinkAlt className="text-xs" />
                </span>
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full bg-gradient-to-br from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-200 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
              >
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#0d0d1e] rounded-full group-hover:bg-opacity-0 flex items-center gap-1.5">
                  {" "}
                  {/* Reduced padding and gap */}
                  Code <FaInfoCircle className="text-xs" />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
