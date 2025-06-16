import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaJsSquare,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiMysql,
  SiAppwrite,
  SiMongodb,
  SiIntellijidea,
  SiJupyter,
  SiPycharm,
  SiCplusplus,
  SiDjango,
  SiExpress,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

function Skills() {
  return (
    <section className="my-[50px] px-4 md:px-[50px] lg:px-[100px] text-white">
      <div className="flex flex-col items-center mb-6">
        <h1
          className="text-4xl text-center font-medium text-white mb-1"
          data-aos="fade-up"
        >
          Skills
        </h1>
        <div className="py-1 px-[45px] bg-purple-950 rounded-md"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 w-full">
        {/* Frontend */}
        <div
          className="bg-[#020130] backdrop-blur-2xl hover:scale-101 transition-all duration-400 hover:duration-800 ease-in-out p-3 rounded-md border-2 border-purple-600"
          data-aos="fade-left"
        >
          <h1 className="text-xl font-medium pb-3 text-center text-white">
            Frontend Languages
          </h1>
          <div className="flex flex-wrap gap-4 p-3 justify-center">
            <SkillCard Icon={FaHtml5} color="#E44D26" label="HTML" />
            <SkillCard Icon={FaCss3Alt} color="#264DE4" label="CSS" />
            <SkillCard Icon={RiTailwindCssFill} color="#06B6D4" label="Tailwind CSS" />
            <SkillCard Icon={FaBootstrap} color="#7952B3" label="Bootstrap" />
            <SkillCard Icon={IoLogoJavascript} color="#F7DF1E" label="JavaScript" />
            <SkillCard Icon={FaReact} color="#61DAFB" label="React JS" />
          </div>
        </div>

        {/* Backend */}
        <div
          className="bg-[#020130] backdrop-blur-2xl hover:scale-101 transition-all duration-400 hover:duration-800 ease-in-out p-3 rounded-md border-2 border-purple-600"
          data-aos="fade-right"
        >
          <h1 className="text-xl font-medium pb-3 text-center text-white">
            Backend Languages
          </h1>
          <div className="flex flex-wrap gap-4 p-3 justify-center">
            <SkillCard Icon={SiExpress} color="#303030" label="Express.js" />
            <SkillCard Icon={SiMongodb} color="#47A248" label="MongoDB" />
            <SkillCard Icon={SiMysql} color="#00758F" label="MySQL" />
            <SkillCard Icon={SiAppwrite} color="#F02E65" label="Appwrite" />
          </div>
        </div>

        {/* Languages & Frameworks */}
        <div
          className="bg-[#020130] backdrop-blur-2xl hover:scale-101 transition-all duration-400 hover:duration-800 ease-in-out p-3 rounded-md border-2 border-purple-600"
          data-aos="fade-left"
        >
          <h1 className="text-xl font-medium pb-3 text-center text-white">
            Languages & Frameworks
          </h1>
          <div className="flex flex-wrap gap-4 p-3 justify-center">
            <SkillCard Icon={SiCplusplus} color="#00599C" label="C++" />
            <SkillCard Icon={FaJava} color="#007396" label="Java" />
            <SkillCard Icon={FaPython} color="#3776AB" label="Python" />
            <SkillCard Icon={FaJsSquare} color="#F7DF1E" label="JavaScript" />
            <SkillCard Icon={SiDjango} color="#092E20" label="Django" />
          </div>
        </div>

        {/* Tools */}
        <div
          className="bg-[#020130] backdrop-blur-2xl hover:scale-101 transition-all duration-400 hover:duration-800 ease-in-out p-3 rounded-md border-2 border-purple-600"
          data-aos="fade-right"
        >
          <h1 className="text-xl font-medium pb-3 text-center text-white">
            Tools
          </h1>
          <div className="flex flex-wrap gap-4 p-3 justify-center">
            <SkillCard Icon={VscVscodeInsiders} color="#007ACC" label="VS Code" />
            <SkillCard Icon={SiIntellijidea} color="#000000" label="IntelliJ IDEA" />
            <SkillCard Icon={SiJupyter} color="#F37626" label="Jupyter" />
            <SkillCard Icon={SiPycharm} color="#21D789" label="PyCharm" />
            <SkillCard Icon={FaGitAlt} color="#F1502F" label="Git" />
            <SkillCard Icon={FaGithub} color="#ffffff" label="GitHub" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ Icon, color, label }) {
  return (
    <div
      data-aos="zoom-in"
      className="items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-md flex flex-col text-center transition-all duration-400 hover:duration-800 ease-in-out transform hover:scale-110 hover:bg-white/20"
      aria-label={label}
    >
      <Icon className="text-6xl" style={{ color }} />
      <p className="font-bold text-md mt-2 text-white">{label}</p>
    </div>
  );
}

export default Skills;
