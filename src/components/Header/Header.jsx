import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);

      let current = "home";

      for (const item of menuItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          current = item.id;
          break;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    navigate("/");
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    setActiveSection("home");
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#0d0d1e]/60 backdrop-blur-xl shadow-lg border-b border-white/10"
            : "bg-[#0d0d1e]/30 backdrop-blur-md border-b border-white/5"
        }`}
      style={{ height: "90px" }}
    >
      <nav className="h-full text-white px-4 md:px-12 lg:px-20 max-w-screen-2xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center font-extrabold text-xl md:text-2xl cursor-pointer group"
        >
          <span className="text-purple-400 group-hover:text-blue-400 transition">&lt;</span>
          <span className="mx-1">Shiv</span>
          <span className="text-purple-400 group-hover:text-blue-400 transition">/</span>
          <span className="mx-1">Kant</span>
          <span className="text-purple-400 group-hover:text-blue-400 transition">&gt;</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-semibold">
          {menuItems.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.id}
                smooth
                duration={700}
                offset={0}
                className={`cursor-pointer relative pb-1 transition hover:text-purple-400
                  after:absolute after:left-0 after:bottom-0 after:h-[2px]
                  after:bg-gradient-to-r from-purple-500 to-blue-500 after:transition-all
                  ${
                    activeSection === item.id
                      ? "text-purple-400 after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                `}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://github.com/shivkantx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition hover:scale-110"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/shiv-kant-036a17289/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition hover:scale-110"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <FaTimes className="w-7 h-7" /> : <FaBars className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d0d1e]/70 backdrop-blur-xl border-t border-white/10 py-6">

          <ul className="flex flex-col items-center space-y-5 text-gray-300 text-lg font-semibold">
            {menuItems.map((item) => (
              <li key={item.id}>
                <ScrollLink
                  to={item.id}
                  smooth
                  duration={700}
                  offset={0}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded-lg transition
                    hover:bg-purple-600/20 hover:text-purple-400
                    ${
                      activeSection === item.id
                        ? "text-purple-400 bg-purple-600/30"
                        : ""
                    }
                  `}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-6 pt-6 mt-4 border-t border-white/10">
            <a href="https://github.com/shivkantx" target="_blank" rel="noreferrer">
              <FaGithub className="w-6 h-6 text-gray-400 hover:text-white transition" />
            </a>
            <a href="https://www.linkedin.com/in/shiv-kant-036a17289/" target="_blank" rel="noreferrer">
              <FaLinkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 transition" />
            </a>
          </div>

        </div>
      )}
    </header>
  );
}

export default Header;
