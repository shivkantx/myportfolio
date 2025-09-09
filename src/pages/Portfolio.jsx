import React from "react";
import { FaCode } from "react-icons/fa";
import CPlusPlusLogo from "../assets/ProgramLangIMG/C++.png";
import CssLogo from "../assets/ProgramLangIMG/CSS.png";
import DjangoLogo from "../assets/ProgramLangIMG/DJANGO.png";
import HtmlLogo from "../assets/ProgramLangIMG/HTML.png";
import JavaLogo from "../assets/ProgramLangIMG/JAVA.png";
import JavaScriptLogo from "../assets/ProgramLangIMG/JS.png";
import PythonLogo from "../assets/ProgramLangIMG/PYTHON.png";
import ReactLogo from "../assets/ProgramLangIMG/REACT.png";
import TailwindLogo from "../assets/ProgramLangIMG/TAILWIND.png";



function Portfolio() {
  const techStack = [
    { logo: PythonLogo, label: "Python", aos: "fade-left" },
    { logo: CssLogo, label: "CSS", aos: "fade-up" },
    { logo: JavaScriptLogo, label: "JavaScript", aos: "fade-left" },
    { logo: ReactLogo, label: "React", aos: "fade-right" },
    { logo: JavaLogo, label: "Java", aos: "fade-up" },
    { logo: TailwindLogo, label: "Tailwind", aos: "fade-right" },
    { logo: DjangoLogo, label: "Django", aos: "fade-up" },
    { logo: CPlusPlusLogo, label: "C++", aos: "fade-left" },
  ];

  return (
    <section className="bg-blue-600 relative my-[50px] text-white">
      <div className="p-5 bg-blue-950">
        <div className="flex flex-col items-center justify-between md:w-full p-3">
          <h1
            data-aos="fade-left"
            className="text-3xl font-black text-transparent bg-gradient-to-r from-[#671beb] to-purple-900 bg-clip-text"
          >
            Portfolio Showcase
          </h1>
          <p data-aos="fade-right" className="lg:w-[50%] text-center">
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
        </div>

        <div className="mt-[50px] bg-blue-400 p-3 rounded-lg space-y-6">
          {/* Row with 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col md:flex-row-reverse bg-purple-950 py-6 p-3 rounded-lg justify-center items-center gap-2">
              <FaCode />
              <p>Project</p>
            </div>
            <div className="flex flex-col md:flex-row-reverse bg-purple-950 py-6 p-3 rounded-lg justify-center items-center gap-2">
              <p>Certificate</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M8 16l4-2 4 2v4l-4-2-4 2v-4z" />
              </svg>
            </div>
            <div className="flex flex-col md:flex-row-reverse bg-purple-950 py-6 p-3 rounded-lg justify-center items-center gap-2">
              <p>Tech Stack</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
                <path d="m7 16.5-4.74-2.85"></path>
                <path d="m7 16.5 5-3"></path>
                <path d="M7 16.5v5.17"></path>
                <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
                <path d="m17 16.5-5-3"></path>
                <path d="m17 16.5 4.74-2.85"></path>
                <path d="M17 16.5v5.17"></path>
                <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
                <path d="M12 8 7.26 5.15"></path>
                <path d="m12 8 4.74-2.85"></path>
                <path d="M12 13.5V8"></path>
              </svg>
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div className="bg-gray-800 group p-5 text-white rounded-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6">
            {techStack.map(({ logo, label, aos }, index) => (
              <div
                key={index}
                data-aos={aos}
                className="gradient-border-card relative m-auto p-8 backdrop-blur-lg bg-gray-400/10 rounded-lg items-center justify-center text-center space-y-2 transition-all duration-300 hover:bg-gray-500/50 hover:scale-110"
              >
                <img src={logo} alt={label} className="h-[90px] w-[90px]" />
                <p className="font-bold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
