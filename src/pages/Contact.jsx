import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdSend } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaUser,
  FaAt,
  FaCommentAlt,
} from "react-icons/fa";
import { CgSpinnerTwo } from "react-icons/cg";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => reset(), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, reset]);

  const delay = (d) => new Promise((resolve) => setTimeout(resolve, d * 1000));

  const onSubmit = async (data) => {
    console.log("Sending data:", data);
    await delay(2);
    console.log("Message sent successfully:", data);
  };

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-12 lg:px-20 bg-[#0d0d1e] text-white font-poppins overflow-hidden flex flex-col items-center justify-center">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-700 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-pink-600 to-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-slow animation-delay-3000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-teal-500 to-lime-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-slow animation-delay-6000"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-4xl mx-auto p-8 md:p-12 bg-gray-900/60 rounded-3xl backdrop-blur-xl border border-gray-700 shadow-2xl transition-all duration-500 hover:shadow-purple-700/30">
        <div className="flex flex-col gap-6 justify-center items-center">
          {/* Heading */}
          <div className="w-full text-center mb-8" data-aos="fade-down">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 text-transparent bg-clip-text drop-shadow-lg">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-prose mx-auto">
              Have a project in mind, a question, or just want to say hello?
              Fill out the form below or connect with me through other channels.
            </p>
          </div>

          {/* Status Messages */}
          {isSubmitting && (
            <div
              className="text-blue-300 text-center py-4 font-semibold text-lg flex items-center gap-2"
              data-aos="fade-in"
            >
              <CgSpinnerTwo className="animate-spin text-2xl" /> Sending your
              message...
            </div>
          )}
          {isSubmitSuccessful && !isSubmitting && (
            <div
              className="bg-green-500/10 border border-green-400 text-green-300 px-6 py-4 rounded-xl text-center font-medium shadow-lg"
              data-aos="fade-in"
            >
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-7 flex flex-col"
          >
            {/* Name */}
            <div className="relative group">
              <input
                type="text"
                autoComplete="name"
                {...register("username", {
                  required: "Name is required.",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters.",
                  },
                  maxLength: {
                    value: 50,
                    message: "Name cannot exceed 50 characters.",
                  },
                })}
                placeholder="Your Name"
                className="w-full bg-white/5 pl-12 pr-4 py-4 rounded-xl border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/40 focus:border-purple-400 transition-all duration-300"
                data-aos="fade-right"
                data-aos-delay="300"
              />
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
              {errors.username && (
                <span className="text-red-400 text-sm mt-1 block">
                  {errors.username.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="relative group">
              <input
                type="email"
                autoComplete="email"
                {...register("mail", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address.",
                  },
                })}
                placeholder="Your Email"
                className="w-full bg-white/5 pl-12 pr-4 py-4 rounded-xl border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/40 focus:border-purple-400 transition-all duration-300"
                data-aos="fade-left"
                data-aos-delay="400"
              />
              <FaAt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
              {errors.mail && (
                <span className="text-red-400 text-sm mt-1 block">
                  {errors.mail.message}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="relative group">
              <textarea
                rows="6"
                {...register("message", {
                  required: "Message cannot be empty.",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters.",
                  },
                  maxLength: {
                    value: 500,
                    message: "Message cannot exceed 500 characters.",
                  },
                })}
                placeholder="Your Message"
                className="w-full bg-white/5 pl-12 pr-4 py-4 rounded-xl border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/40 focus:border-purple-400 transition-all duration-300"
                data-aos="fade-right"
                data-aos-delay="500"
              />
              <FaCommentAlt className="absolute left-4 top-6 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
              {errors.message && (
                <span className="text-red-400 text-sm mt-1 block">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit */}
            <button
              disabled={isSubmitting}
              type="submit"
              data-aos="fade-up"
              data-aos-delay="600"
              className="group relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-lg font-medium text-white rounded-full bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-blue-500 group-hover:to-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative px-8 py-3 rounded-full flex items-center gap-3">
                {isSubmitting ? (
                  <>
                    <CgSpinnerTwo className="animate-spin text-xl" /> Sending...
                  </>
                ) : (
                  <>
                    <MdSend className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Social Links */}
          <div
            className="w-full text-center mt-12"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <p className="text-xl font-semibold text-gray-200 mb-6">
              Or connect with me here:
            </p>
            <div className="flex justify-center gap-8 text-4xl">
              <a
                href="https://github.com/shivkantx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-125"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/shivkantx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-transform duration-300 hover:scale-125"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-red-400 transition-transform duration-300 hover:scale-125"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
