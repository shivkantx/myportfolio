import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-90px)] flex items-center bg-[#0f1123] text-white px-6 sm:px-10 lg:px-24 overflow-hidden"
    >
      {/* centered glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[420px] h-[420px] bg-purple-700 rounded-full blur-[160px] opacity-25"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

        {/* LEFT */}
        <div data-aos="fade-right" className="space-y-6 max-w-xl">

          <p className="text-purple-400 font-semibold tracking-wide text-sm sm:text-base">
            Full Stack Developer
          </p>

          <h1 className="font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Shiv Kant
            </span>
            <br />
            I build scalable web apps
          </h1>

          <p className="text-gray-400 text-base sm:text-lg">
            Next.js & MERN Stack Developer focused on building high-performance,
            responsive applications with clean UI, secure authentication and
            modern backend systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://github.com/shivkantx"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg font-semibold hover:shadow-purple-500/40 hover:scale-[1.03] transition"
            >
              View Projects
            </a>

            <Link
              to="/contact"
              className="border border-gray-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:border-purple-400 hover:text-purple-400 transition"
            >
              <MdOutlineMailOutline size={20} />
              Contact Me
            </Link>
          </div>

          {/* Socials */}
          <div className="flex gap-6 text-2xl text-gray-500 pt-4">
            <a
              href="https://www.linkedin.com/in/shiv-kant-036a17289/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/shivkantx"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* RIGHT TECH CARD */}
        <div
          data-aos="fade-left"
          className="bg-[#15182f]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 sm:p-10 shadow-2xl w-full max-w-md mx-auto lg:mx-0"
        >
          <h3 className="text-xl font-bold mb-6 text-purple-400">
            Tech Stack
          </h3>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 text-gray-300 text-sm sm:text-base">

            {[
              "Next.js",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
              "JWT Auth",
              "REST APIs",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-[#0f1123] px-4 py-2 rounded-lg text-center hover:bg-purple-600/20 transition"
              >
                {tech}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
