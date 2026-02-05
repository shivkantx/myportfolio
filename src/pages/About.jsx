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
      .then((res) => res.json())
      .then((data) => setRepos(data.public_repos || 0))
      .catch(() => { });
  }, []);

  return (
    <section
      id="about"
      className="relative bg-[#0d0d1e] text-white px-6 sm:px-10 lg:px-24 py-32 overflow-hidden"
    >
      {/* soft glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-purple-700 rounded-full blur-[160px] opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-24">
          <h2
            data-aos="fade-up"
            className="text-4xl sm:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
          >
            About Me
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg"
          >
            Building scalable full-stack systems with clean UI and secure backend architecture.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div data-aos="fade-right" className="flex justify-center">
            <div className="relative p-2 rounded-3xl bg-gradient-to-br from-purple-500/40 to-pink-500/40">
              <img
                src={profile}
                alt="Shiv Kant"
                className="w-72 sm:w-80 rounded-2xl bg-[#0d0d1e] object-cover shadow-2xl hover:scale-105 transition"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div data-aos="fade-left" className="space-y-7">

            <h3 className="text-3xl sm:text-4xl font-bold">
              Hi, I’m <span className="text-purple-400">Shiv Kant</span>
            </h3>

            <p className="text-gray-400 leading-relaxed text-lg">
              I’m a Full Stack Developer focused on building high-performance applications using
              <strong> Next.js</strong>, <strong>React</strong> and the <strong>MERN stack</strong>.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              I specialize in authentication systems, REST APIs, scalable backend logic and modern responsive UI —
              always optimizing for real-world performance and maintainability.
            </p>

            <a
              href="https://drive.google.com/file/d/1Mcrn7D3HHUqglIBhS1LUATje_8fJX3a_/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-7 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg hover:shadow-purple-500/40"
            >
              <IoDocumentTextOutline size={20} />
              Download Resume
            </a>

          </div>
        </div>

        {/* SKILL CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mt-32">

          {[
            {
              icon: <FaCode />,
              title: "Frontend",
              desc: "Next.js, React, Tailwind CSS, responsive modern UI systems",
            },
            {
              icon: <FaServer />,
              title: "Backend",
              desc: "Node.js, Express, REST APIs, authentication & scalable logic",
            },
            {
              icon: <FaDatabase />,
              title: "Database",
              desc: "MongoDB, schema design, performance optimization",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-[#15182f]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-10 hover:-translate-y-2 transition shadow-2xl"
            >
              <div className="text-purple-400 text-3xl mb-5">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}

        </div>

        {/* STATS */}
        <div className="grid sm:grid-cols-3 gap-12 mt-28 text-center">

          {[
            { value: repos, label: "GitHub Repositories" },
            { value: "2", label: "Certificates" },
            { value: "3+", label: "Years of Learning" },
          ].map((stat, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i * 150}>
              <h3 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                {stat.value}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;
