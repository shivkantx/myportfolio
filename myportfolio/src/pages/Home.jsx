import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import AnimatedBtn from "../components/SVG_LoGo/AnimatedBtn";
import Linkedin from "../components/SVG_LoGo/Linkedin";
import Instagram from "../components/SVG_LoGo/Instagram";
import Github from "../components/SVG_LoGo/Github";
import webdev from "../assets/webdev.gif";
import projectLogo from "../assets/projectLogo.png";

function Home() {
  return (
    <section
      className="pt-16 min-h-screen text-white bg-[#020138] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
    >
      <div className="flex flex-col md:flex-row w-full p-4 justify-between items-center">
        {/* Left Section */}
        <div className="lg:pl-5 gap-y-4 flex flex-col w-full md:w-1/2 p-2">
          <h1 className="text-4xl sm:text-5xl font-bold mb-1" data-aos="fade-right">
            Hi
          </h1>
          <h1 className="text-4xl sm:text-5xl font-bold mb-2" data-aos="fade-left">
            I'm <span className="text-amber-400">Shiv Kant</span>
          </h1>
          <h1 className="text-2xl sm:text-3xl font-semibold" data-aos="fade-right">
            Full Stack Developer
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed" data-aos="fade-left">
            Problem solver passionate about React, JavaScript, Java, Python and full-stack development using Django.
            MCA graduate building efficient and impactful solutions.
          </p>

          {/* Tech Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-8 mt-4" data-aos="fade-right">
            <AnimatedBtn label={"JavaScript"} />
            <AnimatedBtn label={"React"} />
            <AnimatedBtn label={"Tailwind"} />
            <AnimatedBtn label={"Java"} />
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4" data-aos="fade-left">
            <a
              href="https://github.com/shivkantx"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:scale-105 transition-all duration-300 px-6 py-3 font-semibold bg-gradient-to-r from-[#ffee00] to-[#ffb300] hover:from-[#2abfff] hover:to-[#0071FF] text-black rounded-lg shadow-md w-full sm:w-48"
            >
              <div className="flex items-center justify-center gap-2">
                <span>Projects</span>
                <img
                  src={projectLogo}
                  className="w-5 group-hover:rotate-12 transition-transform duration-300"
                  alt="Projects"
                />
              </div>
            </a>
            <Link
              to="/contact"
              className="group hover:scale-105 transition-all duration-300 px-6 py-3 font-semibold bg-gradient-to-r from-[#ffee00] to-[#ffb300] hover:from-[#2abfff] hover:to-[#0071FF] text-black rounded-lg shadow-md w-full sm:w-48"
            >
              <div className="flex items-center justify-center gap-2">
                <span>Contact</span>
                <MdOutlineMailOutline className="w-5 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex mt-10 space-x-6" data-aos="fade-right">
            <Linkedin />
            <Github />
            <Instagram />
          </div>
        </div>

        {/* Right Section */}
        <div data-aos="slide-left" className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
          <img
            src={webdev}
            alt="Shiv Kant profile"
            loading="lazy"
            className="max-w-full h-auto md:max-w-md lg:max-w-lg transform origin-bottom-left hover:-translate-y-2 hover:translate-x-2 transition duration-300 ease-in-out shadow-lg rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
