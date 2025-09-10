// About.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoDocumentTextOutline, IoSparklesOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import profile from "../assets/profile.jpeg";

function About() {
  const [repoCount, setRepoCount] = useState(0);

  useEffect(() => {
    // Fetch your public repo count directly from GitHub API
    fetch("https://api.github.com/users/shivkantx")
      .then((res) => res.json())
      .then((data) => {
        if (data.public_repos) setRepoCount(data.public_repos);
      })
      .catch((err) => console.error("Error fetching GitHub repos:", err));
  }, []);

  return (
    <section className="w-full p-6 text-white">
      <div className="flex flex-col items-center p-4 justify-between">
        <h1
          className="text-4xl font-black from-pink-300 bg-gradient-to-r to-teal-500 via-purple-500 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          About Me
        </h1>

        <div className="flex items-center space-x-2 mt-2" data-aos="fade-up">
          <IoSparklesOutline />
          <p className="font-medium text-lg md:text-base">
            Transforming ideas into digital experiences
          </p>
          <IoSparklesOutline />
        </div>

        <div className="flex flex-col md:flex-row mt-10 gap-10 w-full items-center justify-center px-4">
          {/* Left Side */}
          <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-4">
            <h2 className="text-5xl font-extrabold" data-aos="fade-right">
              Hello, I'm <br />
              <span>Shiv Kant</span>
            </h2>
            <p
              data-aos="fade-left"
              className="text-justify text-lg font-extralight"
            >
              I'm a Full Stack Developer with hands-on experience in
              <strong>MERN Stack, React.js, Node.js, Express.js</strong>, and
              building scalable web applications. Skilled in{" "}
              <strong>
                Git & GitHub, Core Java, Python, Django, HTML, CSS, JavaScript,
                MySQL
              </strong>
              , and always eager to learn new technologies.
            </p>

            <p data-aos="fade-left" className="text-justify">
              Passionate about turning ideas into real projects and solving
              problems with clean, efficient code.
            </p>

            <div
              data-aos="fade-left"
              className="mt-6 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="https://drive.google.com/file/d/1mrf5yWbkYLEIyRYUPZEEWpydTfnq9zqb/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:scale-110 transition-all duration-300 px-6 py-3 font-semibold bg-gradient-to-r from-[#ffee00] to-[#ffb300] hover:from-[#2abfff] hover:to-[#0071FF] text-black rounded-lg w-fit"
              >
                <IoDocumentTextOutline className="text-xl" />
                <span>Download CV</span>
              </Link>
              <Link
                to="https://github.com/shivkantx?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 hover:scale-110 transition-all duration-300 px-6 py-3 font-semibold bg-gradient-to-r from-[#ffee00] to-[#ffb300] hover:from-[#2abfff] hover:to-[#0071FF] text-black rounded-lg w-fit"
              >
                <FaCode className="transition-transform duration-300 group-hover:rotate-12 text-lg" />
                <span>View Projects</span>
              </Link>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="order-1 md:order-2 pt-4 w-full md:w-1/2 flex justify-center">
            <img
              src={profile}
              alt="Shiv profile"
              className="hover:scale-110 transition-all duration-200 rounded-full shadow-md w-[60%] md:max-w-sm lg:max-w-md object-cover aspect-square"
            />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mt-[50px] flex flex-wrap gap-x-5 gap-y-5">
        {/* Card 1 - Projects */}
        <div
          data-aos="fade-right"
          className="group w-full lg:w-[32%] rounded-lg flex flex-col bg-gray-300/20 backdrop-blur-lg p-5 gap-y-5 transition-all duration-200 hover:scale-105 hover:bg-gray-300/35"
        >
          <div className="flex justify-between">
            <div className="group-hover:rotate-15 transition-all flex rounded-full justify-center bg-gray-500/40 items-center h-[60px] w-[60px]">
              <FaCode />
            </div>
            <h1 data-aos="fade-left" className="text-4xl font-extrabold">
              {repoCount}
            </h1>
          </div>
          <div>
            <h1 data-aos="fade-up" className="text-md font-semibold">
              PUBLIC REPOSITORIES
            </h1>
            <p data-aos="fade-up" className="text-xs">
              Open-source projects on GitHub
            </p>
          </div>
        </div>

        {/* Card 2 - Certificates */}
        <div
          data-aos="fade-up"
          className="w-full lg:w-[32%] rounded-lg flex flex-col bg-gray-300/20 backdrop-blur-lg p-5 gap-y-5 transition-all duration-200 hover:bg-gray-300/35 hover:scale-105"
        >
          <div className="flex justify-between group">
            <div className="flex group-hover:rotate-15 rounded-full justify-center bg-gray-500/40 items-center h-[60px] w-[60px]">
              <LiaCertificateSolid className="w-[30px] h-auto" />
            </div>
            <h1 data-aos="fade-left" className="text-4xl font-extrabold">
              2
            </h1>
          </div>
          <div>
            <h1 data-aos="fade-up" className="font-semibold">
              CERTIFICATES
            </h1>
            <p data-aos="fade-up" className="text-xs">
              Professional skills validated
            </p>
          </div>
        </div>

        {/* Card 3 - Experience */}
        <div
          data-aos="fade-left"
          className="group w-full lg:w-[32%] rounded-lg flex flex-col bg-gray-300/20 backdrop-blur-lg p-5 gap-y-5 transition-all duration-200 hover:bg-gray-300/35 hover:scale-105"
        >
          <div className="flex justify-between">
            <div className="group-hover:rotate-15 flex rounded-full justify-center bg-gray-500/40 items-center h-[60px] w-[60px]">
              <svg
                className="text-white"
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
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z" />
              </svg>
            </div>
            <h1 data-aos="fade-left" className="text-4xl font-extrabold">
              3
            </h1>
          </div>
          <div>
            <h1 data-aos="fade-up" className="font-semibold">
              YEARS OF EXPERIENCE
            </h1>
            <p data-aos="fade-up" className="text-xs">
              Continuous learning journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
