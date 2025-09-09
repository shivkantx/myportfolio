import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6"; // Using FaXTwitter for consistency with X.com

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-12 px-6 md:px-12 lg:px-20 bg-[#0d0d1e] text-white font-poppins overflow-hidden border-t border-gray-800 shadow-inner">
      {/* Subtle Background Elements (Optional, but adds depth) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-950 to-transparent opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text drop-shadow-lg">
          Shiv Kant
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
          {[
            { name: "Home", id: "home" }, // Added Home for completeness
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" }, // Added Contact
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-gray-300 hover:text-purple-400 text-base md:text-lg font-medium
                         transition-all duration-300 transform hover:scale-105
                         relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                         after:bg-purple-500 after:transition-all after:duration-300
                         hover:after:w-full focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-1 py-0.5"
              aria-label={`Scroll to ${item.name} section`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 md:gap-8 mb-8">
          {[
            // Prioritized professional links, replaced Facebook/Youtube with GitHub/Email as common for portfolios
            {
              icon: <FaGithub />,
              link: "https://github.com/shivkantx",
              label: "GitHub",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/shiv-kant-036a17289/",
              label: "LinkedIn",
            },
            {
              icon: <FaXTwitter />,
              link: "https://x.com/ShivkantPal8",
              label: "X (Twitter)",
            },
            {
              icon: <FaEnvelope />,
              link: "mailto:your.email@example.com",
              label: "Email",
            }, // Replace with your actual email
            // You can add Instagram or other relevant links if desired
            // { icon: <FaInstagram />, link: "https://www.instagram.com/shivkant252/", label: "Instagram" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400  text-2xl md:text-3xl
                         transition-all duration-300 transform hover:scale-125 hover:shadow-lg hover:text-purple-400"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm md:text-base text-gray-500">
          &copy; {new Date().getFullYear()} Shiv Kant. All rights reserved.
          Crafted with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
