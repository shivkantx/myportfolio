import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const phrases = [
    "I craft exceptional web experiences with **React** and **Django**.", // Emphasize key tech, stronger verb
    "I transform innovative ideas into powerful, **full-stack** applications.", // More active, highlight "full-stack"
    "I build clean **UIs** and scalable **backend systems** that drive results.", // Focus on outcomes
    "Let's build something **amazing** together.", // Call to action, personal touch
  ];

  const [typedText, setTypedText] = useState("");
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 30 : 60;
  const pauseTime = 2000;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[loopIndex % phrases.length];

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setTypedText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else {
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, loopIndex, phrases]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#0f1123] px-6 py-24 overflow-hidden text-white font-poppins">
      {/* 🌠 Glowing Backgrounds */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-600 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center max-w-4xl" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg">
          Hi, I'm Shiv Kant
        </h1>

        {/* Dynamic Typewriter Text */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 min-h-[60px] transition-all duration-500 ease-in"
          data-aos="fade-up"
          data-aos-delay="300"
          // Using dangerouslySetInnerHTML to render bold tags from the phrases array
          dangerouslySetInnerHTML={{
            __html:
              typedText +
              '<span class="text-pink-500 font-bold animate-pulse">|</span>',
          }}
        ></p>

        {/* 🚀 Buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-6 justify-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="https://github.com/shivkantx"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-600 hover:to-purple-600 px-8 py-4 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            View My Work 🚀
          </a>
          <Link
            to="/contact"
            className="border border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            <div className="flex items-center justify-center gap-2">
              <MdOutlineMailOutline size={22} />
              Let's Connect
            </div>
          </Link>
        </div>

        {/* 🔗 Socials */}
        <div
          className="mt-12 flex justify-center gap-8 text-3xl text-gray-400"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <a
            href="https://linkedin.com/in/shivkantx"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/shivkantx"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-110 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/shivkantx"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 hover:scale-110 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
