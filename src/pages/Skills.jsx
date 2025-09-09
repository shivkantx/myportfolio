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
    <section className="my-20 px-6 md:px-16 lg:px-32 text-white bg-[#0d0d1e]">
      <div className="flex flex-col items-center mb-14">
        <h1
          className="text-5xl md:text-6xl font-extrabold text-center tracking-wide mb-4 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Skills
        </h1>
        <div className="h-1 w-40 bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Frontend */}
        <SkillBlock title="Frontend Languages" aos="fade-left">
          <SkillCard Icon={FaHtml5} color="#E44D26" label="HTML" />
          <SkillCard Icon={FaCss3Alt} color="#264DE4" label="CSS" />
          <SkillCard
            Icon={RiTailwindCssFill}
            color="#06B6D4"
            label="Tailwind CSS"
          />
          <SkillCard Icon={FaBootstrap} color="#7952B3" label="Bootstrap" />
          <SkillCard
            Icon={IoLogoJavascript}
            color="#F7DF1E"
            label="JavaScript"
          />
          <SkillCard Icon={FaReact} color="#61DAFB" label="React JS" />
        </SkillBlock>

        {/* Backend */}
        <SkillBlock title="Backend Languages" aos="fade-right">
          <SkillCard Icon={SiExpress} color="#303030" label="Express.js" />
          <SkillCard Icon={SiMongodb} color="#47A248" label="MongoDB" />
          <SkillCard Icon={SiMysql} color="#00758F" label="MySQL" />
          <SkillCard Icon={SiAppwrite} color="#F02E65" label="Appwrite" />
        </SkillBlock>

        {/* Languages & Frameworks */}
        <SkillBlock title="Languages & Frameworks" aos="fade-left">
          <SkillCard Icon={SiCplusplus} color="#00599C" label="C++" />
          <SkillCard Icon={FaJava} color="#007396" label="Java" />
          <SkillCard Icon={FaPython} color="#3776AB" label="Python" />
          <SkillCard Icon={FaJsSquare} color="#F7DF1E" label="JavaScript" />
          <SkillCard Icon={SiDjango} color="#092E20" label="Django" />
        </SkillBlock>

        {/* Tools */}
        <SkillBlock title="Tools" aos="fade-right">
          <SkillCard Icon={VscVscodeInsiders} color="#007ACC" label="VS Code" />
          <SkillCard
            Icon={SiIntellijidea}
            color="#000000"
            label="IntelliJ IDEA"
          />
          <SkillCard Icon={SiJupyter} color="#F37626" label="Jupyter" />
          <SkillCard Icon={SiPycharm} color="#21D789" label="PyCharm" />
          <SkillCard Icon={FaGitAlt} color="#F1502F" label="Git" />
          <SkillCard Icon={FaGithub} color="#ffffff" label="GitHub" />
        </SkillBlock>
      </div>
    </section>
  );
}

function SkillBlock({ title, children, aos }) {
  return (
    <div
      className="bg-gradient-to-br from-[#1b0a2a] via-[#11041a] to-[#1e0a33] 
      border border-purple-700/50 hover:border-purple-400/70 
      transition-all duration-500 ease-in-out shadow-xl 
      rounded-3xl p-6 backdrop-blur-md"
      data-aos={aos}
    >
      <h2 className="text-3xl md:text-4xl text-white font-semibold text-center mb-6 tracking-wide">
        {title}
      </h2>
      <div className="flex flex-wrap gap-6 justify-center p-3">{children}</div>
    </div>
  );
}

function SkillCard({ Icon, color, label }) {
  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col items-center justify-center bg-[#0d0d1e] border border-white/20 
      rounded-2xl p-5 w-28 sm:w-32 
      transition-transform duration-300 hover:scale-110 hover:bg-white/20"
      aria-label={label}
    >
      <Icon className="text-4xl sm:text-5xl md:text-6xl" style={{ color }} />
      <p className="mt-3 text-xs sm:text-sm md:text-base font-medium text-white text-center tracking-wide">
        {label}
      </p>
    </div>
  );
}

export default Skills;
