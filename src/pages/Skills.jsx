import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJsSquare,
  FaNodeJs,
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
  SiExpress,
  SiJsonwebtokens,
  SiNextdotjs,
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
        <SkillBlock title="Frontend" aos="fade-right">
          <SkillCard Icon={SiNextdotjs} color="#ffffff" label="Next.js" />
          <SkillCard Icon={FaReact} color="#61DAFB" label="React.js" />
          <SkillCard Icon={RiTailwindCssFill} color="#06B6D4" label="Tailwind CSS" />
          <SkillCard Icon={FaBootstrap} color="#7952B3" label="Bootstrap" />
          <SkillCard Icon={FaHtml5} color="#E44D26" label="HTML5" />
          <SkillCard Icon={FaCss3Alt} color="#264DE4" label="CSS3" />
          <SkillCard Icon={IoLogoJavascript} color="#F7DF1E" label="JavaScript" />
        </SkillBlock>

        {/* Backend */}
        <SkillBlock title="Backend & APIs" aos="fade-left">
          <SkillCard Icon={FaNodeJs} color="#3C873A" label="Node.js" />
          <SkillCard Icon={SiExpress} color="#ffffff" label="Express.js" />
          <SkillCard Icon={SiJsonwebtokens} color="#f5f5f5" label="JWT Auth" />
          <SkillCard Icon={SiMongodb} color="#47A248" label="MongoDB" />
          <SkillCard Icon={SiMysql} color="#00758F" label="MySQL" />
          <SkillCard Icon={SiAppwrite} color="#F02E65" label="Appwrite" />
        </SkillBlock>

        {/* Programming */}
        <SkillBlock title="Programming Languages" aos="fade-right">
          <SkillCard Icon={FaJava} color="#007396" label="Java" />
          <SkillCard Icon={FaJsSquare} color="#F7DF1E" label="JavaScript" />
        </SkillBlock>

        {/* Tools */}
        <SkillBlock title="Tools & Environment" aos="fade-left">
          <SkillCard Icon={VscVscodeInsiders} color="#007ACC" label="VS Code" />
          <SkillCard Icon={SiIntellijidea} color="#ffffff" label="IntelliJ IDEA" />
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
      data-aos={aos}
      className="bg-gradient-to-br from-[#1b0a2a] via-[#11041a] to-[#1e0a33]
      border border-purple-700/50 hover:border-purple-400/70
      transition-all duration-500 shadow-xl
      rounded-3xl p-6 backdrop-blur-md"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 tracking-wide">
        {title}
      </h2>
      <div className="flex flex-wrap gap-6 justify-center p-3">
        {children}
      </div>
    </div>
  );
}

function SkillCard({ Icon, color, label }) {
  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col items-center justify-center bg-[#0d0d1e]
      border border-white/20 rounded-2xl p-5 w-28 sm:w-32
      transition-transform duration-300 hover:scale-110 hover:bg-white/20"
    >
      <Icon className="text-4xl sm:text-5xl md:text-6xl" style={{ color }} />
      <p className="mt-3 text-xs sm:text-sm md:text-base font-medium text-center">
        {label}
      </p>
    </div>
  );
}

export default Skills;
