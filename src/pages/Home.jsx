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
      className="min-h-screen flex items-center bg-[#0f1123] text-white px-6 md:px-16 lg:px-28"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div data-aos="fade-right">

          <p
            data-aos="fade-up"
            className="text-purple-400 font-semibold mb-3 tracking-wide"
          >
            Full Stack Developer
          </p>

          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Hi, I’m <span className="text-purple-400">Shiv Kant</span>
            <br />
            I build scalable web apps
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10"
          >
            Next.js & MERN Stack Developer focused on building high-performance,
            responsive applications with clean UI, secure authentication and
            modern backend systems.
          </p>

          {/* CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="flex flex-wrap gap-5"
          >
            <a
              href="https://github.com/shivkantx"
              target="_blank"
              rel="noreferrer"
              className="bg-purple-600 hover:bg-purple-700 px-7 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-purple-500/30"
            >
              View Projects
            </a>

            <Link
              to="/contact"
              className="border border-gray-600 hover:border-purple-400 px-7 py-3 rounded-lg font-semibold flex items-center gap-2 transition hover:text-purple-400"
            >
              <MdOutlineMailOutline size={20} />
              Contact Me
            </Link>
          </div>

          {/* SOCIALS */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex gap-6 mt-10 text-2xl text-gray-500"
          >
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
          className="relative bg-[#15182f] border border-gray-800 rounded-2xl p-10 shadow-xl"
        >
          <h3 className="text-xl font-bold mb-6 text-purple-400">
            Tech Stack
          </h3>

          <div className="grid grid-cols-2 gap-4 text-gray-300">

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
                data-aos="zoom-in"
                className="bg-[#0f1123] px-4 py-2 rounded-lg"
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
