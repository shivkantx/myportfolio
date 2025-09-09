import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa"; // Stick to fa for consistency with existing codebase

function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // New state for scroll-based styling
  const navigate = useNavigate();

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50); // Set scrolled state after 50px

      // Logic to determine active section
      let currentActive = "";
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          // Adjust offset to trigger active state slightly before section reaches top
          const sectionTop = section.offsetTop - 150; // Increased offset for smoother transition
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentActive = item.id;
          }
        }
      });

      // Special handling for home section when at the very top
      if (scrollPosition < 150) {
        // If near the very top of the page
        currentActive = "home";
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]); // Added menuItems to dependency array to avoid lint warning

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false); // Close mobile menu on item click
  };

  const handleLogoClick = () => {
    navigate("/"); // Navigate to home route
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection("home");
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0d0d1e]/80 border-b border-gray-700 shadow-xl" // Darker, more pronounced on scroll
          : "backdrop-blur-md bg-white/5 border-b border-white/10" // Lighter, subtle at top
      }`}
    >
      <nav className="text-white py-3 md:py-4 px-4 md:px-12 lg:px-20 max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center font-extrabold text-xl md:text-2xl cursor-pointer group"
          onClick={handleLogoClick}
          aria-label="Go to home"
        >
          <span className="text-purple-400 group-hover:text-blue-400 transition-colors duration-300">
            &lt;
          </span>
          <span className="text-white mx-0.5 md:mx-1">Shiv</span>
          <span className="text-purple-400 group-hover:text-blue-400 transition-colors duration-300">
            /
          </span>
          <span className="text-white mx-0.5 md:mx-1">Kant</span>
          <span className="text-purple-400 group-hover:text-blue-400 transition-colors duration-300">
            &gt;
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 text-base font-semibold">
          {menuItems.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.id}
                smooth={true}
                duration={700} // Increased duration for smoother scroll
                offset={-70} // Adjust this based on your header's height
                onClick={() => handleMenuItemClick(item.id)}
                className={`cursor-pointer relative pb-1
                            hover:text-purple-400 transition-colors duration-300
                            after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r from-purple-500 to-blue-500 after:transition-all after:duration-300
                            ${
                              activeSection === item.id
                                ? "text-purple-400 after:w-full" // Active state with full underline
                                : "after:w-0 group-hover:after:w-full" // Hover state without active
                            }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://github.com/shivkantx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/shiv-kant-036a17289/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <FaTimes className="w-7 h-7 text-white animate-fade-in" />
            ) : (
              <FaBars className="w-7 h-7 text-white animate-fade-in" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full bg-[#0d0d1e]/90 backdrop-blur-xl border-t border-gray-700 shadow-lg py-6 animate-slide-down"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col items-center space-y-5 text-gray-300 text-lg font-semibold">
            {menuItems.map((item) => (
              <li key={item.id}>
                <ScrollLink
                  to={item.id}
                  smooth={true}
                  duration={700}
                  offset={-70}
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`block cursor-pointer py-2 px-4 rounded-lg
                              hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-300
                              ${
                                activeSection === item.id
                                  ? "text-purple-400 bg-purple-600/30"
                                  : ""
                              }`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Socials in mobile */}
          <div className="flex justify-center items-center gap-6 pt-6 mt-4 border-t border-gray-700/50">
            <a
              href="https://github.com/shivkantx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shiv-kant-036a17289/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
