import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Logos
import GULogo from "../assets/GU_Logo.webp";
import DSCLogo from "../assets/DSLogo.png";
import HBKLogo from "../assets/HBKLogo.avif";
// import YNVC_Logo from "../assets/YNVC_Logo.png";

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const educationList = [
    {
      title: "Master of Computer Applications (MCA)",
      institute: "Galgotias University, Greater Noida",
      duration: "Sept 2022 – July 2024",
      grade: "8.9 CGPA",
      logo: GULogo,
      desc: `I completed my Master's degree (MCA) in Computer Applications from Galgotias University, Greater Noida. This program provided a strong foundation in advanced programming, software development methodologies, and core computer science principles. I delved into Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. Active participation in workshops and technical events further honed my practical skills, significantly contributing to my technical abilities and professional growth.`,
      colorClass: "from-blue-400 to-purple-400",
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      institute: "Dharam Samaj College, Aligarh",
      duration: "Sept 2019 – Aug 2022",
      grade: "78.43%",
      logo: DSCLogo,
      desc: `My Bachelor's degree in Computer Applications (BCA) from Dharam Samaj College, Aligarh, immersed me in a diverse range of computing and technology subjects. I gained practical insights into software development through hands-on projects, exploring Data Structures, Algorithms, Web Development, and Database Management Systems. This period was crucial in building my problem-solving skills and applying theoretical concepts to real-world scenarios.`,
      colorClass: "from-green-400 to-teal-400",
    },
    {
      title: "Class XII – UP Board",
      institute: "Hari Baba Kanya IC Ghonsali Raja, Sambhal",
      duration: "April 2018 – March 2019",
      grade: "70.8%",
      logo: HBKLogo,
      desc: `I completed my Class 12 education from Hari Baba Kanya IC Ghonsali Raja, under the UP Board. My curriculum focused on Physics, Chemistry, and Mathematics (PCM), complemented by Computer Science, providing a strong foundation in analytical and logical thinking.`,
      colorClass: "from-pink-400 to-red-400",
    },
    {
      title: "Class X – UP Board",
      institute: "Y N V I C, Madakawali, Sambhal",
      duration: "April 2016 – March 2017",
      grade: "78.33%",
      logo: "", // YNVC_Logo if available
      desc: `My Class 10 education from Y N V I C, Madakawali, under the UP Board, laid the groundwork in core subjects like Science and Mathematics, fostering my early interest in logical problem-solving.`,
      colorClass: "from-yellow-400 to-orange-400",
    },
  ];

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-12 lg:px-20 bg-[#0d0d1e] text-white font-poppins overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-700 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-pink-600 to-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-slow animation-delay-3000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-teal-500 to-lime-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-slow animation-delay-6000"></div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col items-center mb-16">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold mb-4 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 text-transparent bg-clip-text drop-shadow-lg"
          data-aos="fade-down"
        >
          My Academic Journey
        </h1>
        <p
          className="text-lg md:text-xl text-gray-400 text-center max-w-2xl font-light"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          A glimpse into my educational background and continuous pursuit of
          knowledge.
        </p>
      </div>

      {/* Timeline & Cards */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Vertical Timeline */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-60"></div>

        {educationList.map((edu, index) => {
          const alignLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`mb-16 w-full relative group ${
                alignLeft
                  ? "md:flex md:justify-start"
                  : "md:flex md:justify-end"
              }`}
              data-aos={alignLeft ? "fade-right" : "fade-left"}
              data-aos-delay={`${300 + index * 150}`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#0d0d1e] rounded-full items-center justify-center z-20 border-2 border-white group-hover:scale-125 transition-transform duration-300 shadow-xl">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 group-hover:from-pink-500 group-hover:to-red-500 transition-all duration-300"></div>
              </div>

              {/* Education Card */}
              <div
                className={`bg-[#0d0d1e]/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-7 shadow-2xl w-full
                  transition-all duration-500 ease-in-out hover:scale-[1.03] hover:border-purple-500 hover:shadow-purple-700/40
                  ${
                    alignLeft
                      ? "md:w-[46%] md:mr-auto"
                      : "md:w-[46%] md:ml-auto"
                  }`}
              >
                {/* Logo + Title */}
                <div className="flex flex-col sm:flex-row items-start gap-5 mb-4 border-b border-gray-700/50 pb-4">
                  {edu.logo ? (
                    <div className="h-24 w-24 flex items-center justify-center bg-[#0d0d1e] rounded-xl shrink-0 border border-gray-600 overflow-hidden shadow-md">
                      <img
                        src={edu.logo}
                        alt={`${edu.institute} Logo`}
                        className="h-full w-full object-contain p-2 filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <div className="h-24 w-24 bg-gray-700/50 rounded-xl flex items-center justify-center text-center text-sm font-semibold text-white/70 border border-gray-600 shrink-0">
                      No Logo <br /> Available
                    </div>
                  )}

                  <div className="flex-1">
                    <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text">
                      {edu.title}
                    </h2>
                    <p className="text-lg text-purple-200 font-medium mt-1">
                      {edu.institute}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">{edu.duration}</p>
                  </div>
                </div>

                {/* Grade & Description */}
                <p
                  className={`text-base font-semibold mb-3 border-l-4 pl-3 bg-clip-text text-transparent bg-gradient-to-r ${edu.colorClass}`}
                >
                  Grade: <span className="text-white">{edu.grade}</span>
                </p>
                <p className="text-sm text-gray-300 leading-relaxed text-justify">
                  {edu.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;
