import React from "react";
import GULogo from "../assets/GU_Logo.webp";
import DSCLogo from "../assets/DSLogo.png";
import HBKLogo from "../assets/HBKLogo.avif";

function Education() {
  const educationList = [
    {
      title: "Master of Computer Applications (MCA)",
      institute: "Galgotias University, Greater Noida",
      duration: "Sept 2022 – July 2024",
      grade: "8.9 CGPA",
      logo: GULogo,
      desc: `I have completed my Master's degree (MCA) in Computer Applications from Galgotias University, Greater Noida. During my time at Galgotias, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Galgotias University has been instrumental in shaping my technical abilities and professional growth.`,
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      institute: "Dharam Samaj College, Aligarh",
      duration: "Sept 2019 – Aug 2022",
      grade: "78.43%",
      logo: DSCLogo,
      desc: `I completed my Bachelor's degree in Computer Applications (BCA) from Dharam Samaj College, Aligarh. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Dharam Samaj College allowed me to work on projects that applied theoretical concepts to real-world problems.`,
    },
    {
      title: "XII – UP Board",
      institute: "Hari Baba Kanya IC Ghonsali Raja, Sambhal",
      duration: "April 2018 – March 2019",
      grade: "70.8%",
      logo: HBKLogo,
      desc: `I completed my class 12 education from Hari Baba Kanya IC Ghonsali Raja, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.`,
    },
    {
      title: "X – UP Board",
      institute: "Y N V I C, Madakawali, Sambhal",
      duration: "April 2016 – March 2017",
      grade: "78.33%",
      logo: true,
      desc: `I completed my class 10 education from Y N V I C, Madakawali, Sambhal, under the UP board, where I studied Science and Math.`,
    },
  ];

  return (
    <section className="relative my-[50px] px-4 md:px-[50px] lg:px-[100px] text-white">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-12">
        <h1
          className="text-5xl text-center font-bold bg-gradient-to-l from-purple-400 to-blue-500 bg-clip-text text-transparent"
          data-aos="zoom-in-up"
        >
          Education
        </h1>
        <div
          className="mt-2 h-2 w-[150px] bg-purple-800 rounded-2xl"
          data-aos="fade-up"
        ></div>
      </div>

      {/* Timeline Vertical Line */}
      <div className="relative before:absolute before:left-1/2 before:top-0 before:w-[2px] before:h-full before:bg-purple-700">
        {educationList.map((edu, index) => {
          const alignLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`mb-10 w-full flex flex-col md:flex-row items-center md:items-start ${
                alignLeft ? "md:justify-start" : "md:justify-end"
              } relative`}
              data-aos={alignLeft ? "fade-right" : "fade-left"}
            >
              {/* Timeline Dot */}
              <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-600 rounded-full z-10"></span>

              {/* Card */}
              <div
                className={`bg-gray-800 border border-purple-600 rounded-xl p-6 w-full md:w-[48%] z-20 backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] ${
                  alignLeft ? "md:mr-auto" : "md:ml-auto"
                } text-left`}
              >
                {/* Logo + Title Row */}
                <div className="flex flex-row items-start gap-4 mb-3">
                  {edu.logo && (
                    <div
                      className="h-[100px] w-[100px] flex items-center justify-center bg-gray-900 rounded-lg shrink-0"
                      data-aos="zoom-in"
                    >
                      {typeof edu.logo === "string" ? (
                        <img
                          src={edu.logo}
                          alt="Logo"
                          className="h-full w-full object-contain rounded-md"
                        />
                      ) : (
                        <div className="h-[50px] w-[50px] bg-white rounded-lg"></div>
                      )}
                    </div>
                  )}

                  <div className="flex-1">
                    <h2
                      className="text-2xl font-semibold text-white"
                      data-aos="zoom-in"
                      data-aos-delay="50"
                    >
                      {edu.title}
                    </h2>
                    <p
                      className="text-base text-purple-300 font-medium"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      {edu.institute}
                    </p>
                    <p
                      className="text-sm text-gray-400"
                      data-aos="fade-up"
                      data-aos-delay="150"
                    >
                      {edu.duration}
                    </p>
                  </div>
                </div>

                {/* Grade + Description */}
                <p
                  className="text-sm text-gray-400 font-bold mb-2"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  Grade: {edu.grade}
                </p>
                <p
                  className="text-sm text-gray-300 leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
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
