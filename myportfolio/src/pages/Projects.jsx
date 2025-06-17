import React from "react";

function Projects() {
  return (
    <div className="p-4 flex flex-wrap w-full bg-blue-950 justify-center items-start gap-3 rounded-2xl backdrop-blur-2xl">
      <div className="w-full flex flex-col items-center mb-6">
        <h1
          className="text-4xl text-center font-medium text-white mb-4"
          data-aos="fade-up"
        >
          Projects
        </h1>
        <div className="py-1 px-[45px] bg-purple-950 rounded-md"></div>
      </div>

      <div className="w-full flex flex-wrap justify-center items-start gap-3">
        {/* project-1 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-gray-800 rounded-md p-3">
          <div className="flex flex-col items-start">
            {/* Image Placeholder */}
            <div className="h-[170px] w-full rounded-md bg-blue-950"></div>

            {/* Title & Description */}
            <div className="w-full mt-2 text-left">
              <h1 className="text-xl font-bold text-white">E-commerce</h1>
              <p className="text-xs text-gray-300">
                A full-stack e-commerce web app that lets users browse products,
                manage their cart, and place orders. Admins can control
                products, users, and orders. Built to showcase skills in modern
                web development with secure authentication and payment
                integration.
              </p>

              {/* Language/Tech Stack Buttons */}
              <div className="flex flex-wrap justify-start gap-2 mt-3">
                {[
                  "JavaScript",
                  "React",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                ].map((tech) => (
                  <button
                    key={tech}
                    className="text-xs px-2 py-1 border border-white text-white rounded bg-transparent transition-all duration-300 hover:bg-white/10 hover:scale-105"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* project-2 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-gray-800 rounded-md p-3">
          <div className="flex flex-col items-start">
            {/* Image Placeholder */}
            <div className="h-[170px] w-full rounded-md bg-blue-950"></div>

            {/* Title & Description */}
            <div className="w-full mt-2 text-left">
              <h1 className="text-xl font-bold text-white">E-commerce</h1>
              <p className="text-xs text-gray-300">
                A full-stack e-commerce web app that lets users browse products,
                manage their cart, and place orders. Admins can control
                products, users, and orders. Built to showcase skills in modern
                web development with secure authentication and payment
                integration.
              </p>

              {/* Language/Tech Stack Buttons */}
              <div className="flex flex-wrap justify-start gap-2 mt-3">
                {[
                  "JavaScript",
                  "React",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                ].map((tech) => (
                  <button
                    key={tech}
                    className="text-xs px-2 py-1 border border-white text-white rounded bg-transparent transition-all duration-300 hover:bg-white/10 hover:scale-105"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* project-3 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-gray-800 rounded-md p-3">
          <div className="flex flex-col items-start">
            {/* Image Placeholder */}
            <div className="h-[170px] w-full rounded-md bg-blue-950"></div>

            {/* Title & Description */}
            <div className="w-full mt-2 text-left">
              <h1 className="text-xl font-bold text-white">E-commerce</h1>
              <p className="text-xs text-gray-300">
                A full-stack e-commerce web app that lets users browse products,
                manage their cart, and place orders. Admins can control
                products, users, and orders. Built to showcase skills in modern
                web development with secure authentication and payment
                integration.
              </p>

              {/* Language/Tech Stack Buttons */}
              <div className="flex flex-wrap justify-start gap-2 mt-3">
                {[
                  "JavaScript",
                  "React",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                ].map((tech) => (
                  <button
                    key={tech}
                    className="text-xs px-2 py-1 border border-white text-white rounded bg-transparent transition-all duration-300 hover:bg-white/10 hover:scale-105"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* project-4 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-gray-800 rounded-md p-3">
          <div className="flex flex-col items-start">
            {/* Image Placeholder */}
            <div className="h-[170px] w-full rounded-md bg-blue-950"></div>

            {/* Title & Description */}
            <div className="w-full mt-2 text-left">
              <h1 className="text-xl font-bold text-white">E-commerce</h1>
              <p className="text-xs text-gray-300">
                A full-stack e-commerce web app that lets users browse products,
                manage their cart, and place orders. Admins can control
                products, users, and orders. Built to showcase skills in modern
                web development with secure authentication and payment
                integration.
              </p>

              {/* Language/Tech Stack Buttons */}
              <div className="flex flex-wrap justify-start gap-2 mt-3">
                {[
                  "JavaScript",
                  "React",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                ].map((tech) => (
                  <button
                    key={tech}
                    className="text-xs px-2 py-1 border border-white text-white rounded bg-transparent transition-all duration-300 hover:bg-white/10 hover:scale-105"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
