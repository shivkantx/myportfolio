import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const certificates = [
    {
        status: "completed",
        title: "Complete Web Development Mastery",
        provider: "Udemy",
        image:
            "https://udemy-certificate.s3.amazonaws.com/image/UC-a822feae-0445-4e65-94d7-63da64bef2f1.jpg",
        description:
            "An intensive full-stack program covering frontend, backend, authentication systems, APIs and real-world application development.",
        skills: [
            "HTML5 & CSS3",
            "Tailwind CSS",
            "JavaScript Advanced",
            "React.js",
            "Node.js & Express",
            "Authentication Systems",
            "Full Stack Projects",
        ],
    },
    {
        status: "upcoming",
        title: "React & Next.js Full Stack Mastery (AI Powered)",
        provider: "Udemy",
        image: null,
        description:
            "Advanced modern full-stack development with Next.js, React, secure authentication, backend APIs, AI integrations and production deployment.",
        skills: [
            "React Advanced Patterns",
            "Next.js App Router",
            "Authentication & Authorization",
            "Backend APIs",
            "Full Stack Projects",
            "Production Optimization",
            "AI Integrations",
        ],
    },
];

const Certificates = () => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <section
            id="certificates"
            className="bg-[#0d0d1e] text-white px-6 md:px-16 lg:px-28 py-32"
        >
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-24">
                    <h2
                        data-aos="fade-up"
                        className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text"
                    >
                        Certifications
                    </h2>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Professional training strengthening my full-stack development skills
                        and real-world project experience.
                    </p>
                </div>

                <div className="space-y-28">

                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="grid lg:grid-cols-2 gap-16 items-center"
                        >
                            {/* Left Visual */}
                            <div data-aos="fade-right" className="relative group">

                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="rounded-2xl shadow-2xl border border-gray-800 group-hover:scale-105 transition duration-500"
                                    />
                                ) : (
                                    <div className="h-[260px] rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xl font-bold shadow-2xl border border-gray-800">
                                        Upcoming Certificate
                                    </div>
                                )}

                                {cert.status === "upcoming" && (
                                    <span className="absolute top-4 right-4 bg-yellow-500 text-black  px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                                        In Progress
                                    </span>
                                )}

                            </div>

                            {/* Right Content */}
                            <div data-aos="fade-left" className="space-y-6">

                                <h3 className="text-3xl font-bold">
                                    {cert.title}
                                </h3>

                                <p className="text-purple-400 font-medium">
                                    Issued by {cert.provider}
                                </p>

                                <p className="text-gray-400 leading-relaxed">
                                    {cert.description}
                                </p>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-3 pt-4">
                                    {cert.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="bg-purple-600/20 text-purple-200 px-4 py-1 rounded-full text-sm border border-purple-500 hover:bg-purple-500 hover:text-white transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Certificates;
