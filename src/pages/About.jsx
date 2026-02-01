import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode, FaServer, FaDatabase } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import profile from "../assets/profile.png";

const About = () => {
  const [repos, setRepos] = useState(0);

  useEffect(() => {
    AOS.refresh();

    fetch("https://api.github.com/users/shivkantx")
      .then(res => res.json())
      .then(data => setRepos(data.public_repos || 0))
      .catch(() => {});
  }, []);

  return (
    <section
      id="about"
      className="bg-[#0d0d1e] text-white px-6 md:px-16 lg:px-28 py-32"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-24">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            About Me
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Full Stack Developer focused on building modern, scalable and high-performance web applications.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div data-aos="fade-right" className="flex justify-center">
            <img
              src={profile}
              alt="Shiv Kant"
              className="w-72 md:w-80 rounded-2xl border border-gray-800 shadow-2xl hover:scale-105 transition"
            />
          </div>

          {/* CONTENT */}
          <div data-aos="fade-left" className="space-y-6">

            <h3 className="text-3xl font-bold">
              I’m <span className="text-purple-400">Shiv Kant</span>
            </h3>

            <p className="text-gray-400 leading-relaxed">
              A Full Stack Developer specializing in <strong>Next.js</strong>, <strong>React</strong>, and the 
              <strong> MERN stack</strong>. I build fast, responsive and secure applications with clean UI and scalable backend architecture.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My focus is on real-world problem solving, performance optimization, authentication systems, REST APIs,
              and delivering smooth user experiences.
            </p>

            <a
              href="https://drive.google.com/file/d/1mrf5yWbkYLEIyRYUPZEEWpydTfnq9zqb/view"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-purple-500/30"
            >
              <IoDocumentTextOutline size={20} />
              Download Resume
            </a>

          </div>
        </div>

        {/* SKILL HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-10 mt-28">

          <div
            data-aos="fade-up"
            className="bg-[#15182f] border border-gray-800 rounded-xl p-10 hover:-translate-y-2 transition shadow-xl"
          >
            <FaCode className="text-purple-400 text-3xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Frontend</h4>
            <p className="text-gray-400">
              Next.js, React, Tailwind CSS, responsive design, modern UI systems
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="bg-[#15182f] border border-gray-800 rounded-xl p-10 hover:-translate-y-2 transition shadow-xl"
          >
            <FaServer className="text-purple-400 text-3xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Backend</h4>
            <p className="text-gray-400">
              Node.js, Express, REST APIs, JWT authentication, scalable architecture
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-[#15182f] border border-gray-800 rounded-xl p-10 hover:-translate-y-2 transition shadow-xl"
          >
            <FaDatabase className="text-purple-400 text-3xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Database</h4>
            <p className="text-gray-400">
              MongoDB, data modeling, performance optimization
            </p>
          </div>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-10 mt-24 text-center">

          <div data-aos="zoom-in">
            <h3 className="text-4xl font-extrabold text-purple-400">{repos}</h3>
            <p className="text-gray-400 mt-1">GitHub Repositories</p>
          </div>

          <div data-aos="zoom-in" data-aos-delay="150">
            <h3 className="text-4xl font-extrabold text-purple-400">2</h3>
            <p className="text-gray-400 mt-1">Certificates</p>
          </div>

          <div data-aos="zoom-in" data-aos-delay="300">
            <h3 className="text-4xl font-extrabold text-purple-400">3+</h3>
            <p className="text-gray-400 mt-1">Years of Learning</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
