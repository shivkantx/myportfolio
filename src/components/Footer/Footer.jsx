import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-[#0d0d1e] text-white overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-purple-700 rounded-full blur-[180px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20">

        {/* Main grid */}
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Branding */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-wide">
              <span className="text-purple-400">&lt;</span>
              Shiv<span className="text-purple-400">/</span>Kant
              <span className="text-purple-400">&gt;</span>
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Full Stack Developer crafting high-performance web applications
              with clean UI, secure authentication and scalable backend systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400">
              {["Home", "Projects", "Skills", "About", "Certificates", "Contact"].map(link => (
                <li
                  key={link}
                  className="hover:text-purple-400 transition cursor-pointer"
                  onClick={() =>
                    document.getElementById(link.toLowerCase())?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-purple-400">
              Connect With Me
            </h3>

            <div className="flex gap-5 text-2xl text-gray-400">
              <a
                href="https://github.com/shivkantx"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/shiv-kant-036a17289/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>
            </div>

            <p className="text-gray-400 text-sm">
              Open for internships, freelance & full-stack roles 🚀
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">

          <p>
            © {new Date().getFullYear()} Shiv Kant. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-purple-400 hover:text-white transition"
          >
            Back to top <FaArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
