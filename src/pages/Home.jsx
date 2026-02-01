import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const float = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
  }
};

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0f1123] text-white px-6 md:px-16 lg:px-28 overflow-hidden"
    >
      {/* ambient motion blobs */}
      <motion.div
        {...float}
        className="absolute top-24 left-10 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full"
      />
      <motion.div
        {...float}
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center relative z-10"
      >

        {/* LEFT CONTENT */}
        <motion.div variants={item}>

          <motion.p
            variants={item}
            className="text-purple-400 font-semibold tracking-wide mb-3"
          >
            Full Stack Developer
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Hi, I’m{" "}
            <span className="text-purple-400">Shiv Kant</span>
            <br />
            I build scalable web apps
          </motion.h1>

          <motion.p
            variants={item}
            className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10"
          >
            Next.js & MERN Stack Developer focused on building high-performance,
            responsive applications with clean UI, secure authentication and
            modern backend systems.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-5"
          >
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/shivkantx"
              target="_blank"
              rel="noreferrer"
              className="bg-purple-600 hover:bg-purple-700 px-7 py-3 rounded-lg font-semibold shadow-md hover:shadow-purple-500/30 transition"
            >
              View Projects
            </motion.a>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/contact"
                className="border border-gray-600 hover:border-purple-400 px-7 py-3 rounded-lg font-semibold flex items-center gap-2 transition hover:text-purple-400"
              >
                <MdOutlineMailOutline size={20} />
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* SOCIALS */}
          <motion.div
            variants={item}
            className="flex gap-6 mt-10 text-2xl text-gray-500"
          >
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/shiv-kant-036a17289/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/shivkantx"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT TECH CARD */}
        <motion.div
          variants={item}
          whileHover={{ y: -8 }}
          className="relative bg-[#15182f] border border-gray-800 rounded-2xl p-10 shadow-xl"
        >
          <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border border-purple-500/20" />

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
              <motion.span
                key={tech}
                whileHover={{ scale: 1.08 }}
                className="bg-[#0f1123] px-4 py-2 rounded-lg cursor-default"
              >
                {tech}
              </motion.span>
            ))}

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Home;
