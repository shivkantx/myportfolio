import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const delay = (d) => new Promise((resolve) => setTimeout(resolve, d * 1000));

  const onSubmit = async (data) => {
    await delay(2);
    console.log(data);
  };

  return (
    
      <section className="max-w-3xl mx-auto p-6 bg-[#072854] rounded-lg backdrop-blur-2xl">
        <div className="flex flex-col gap-4 justify-center items-center">
          {/* Heading */}
          <div className="w-full text-center mb-4" data-aos="fade-left">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Contact Me
            </h1>
            <p className="text-sm font-semibold mt-1">
              Have something to discuss? Send me a message and let's talk.
            </p>
          </div>

          {/* Sending message text */}
          {isSubmitting && (
            <div className="text-white text-center py-2 font-semibold">
              Sending...
            </div>
          )}

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full px-5 py-3 space-y-6 flex flex-col"
          >
            {/* Name Input */}
            <input
              type="text"
              autoComplete="name"
              {...register("username", {
                required: "This field is required",
                minLength: { value: 3, message: "Minimum length is 3" },
                maxLength: { value: 20, message: "Maximum length is 20" },
              })}
              className="w-full bg-gray-950/10 p-3 rounded-lg backdrop-blur-md border border-white/20 focus:outline-none focus:border-3 focus:border-purple-500"
              placeholder="Your name"
              data-aos="fade-right"
            />
            {errors.username && (
              <span className="text-red-500 text-sm">{errors.username.message}</span>
            )}

            {/* Email Input */}
            <input
              type="email"
              autoComplete="email"
              {...register("mail", {
                required: "This field is required",
              })}
              className="w-full bg-gray-950/10 p-3 rounded-lg backdrop-blur-md border border-white/20 focus:outline-none focus:border-3 focus:border-purple-500"
              placeholder="Enter your email"
              data-aos="fade-left"
            />
            {errors.mail && (
              <span className="text-red-500 text-sm">{errors.mail.message}</span>
            )}

            {/* Message Box */}
            <textarea
              rows="4"
              autoComplete="off"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 characters required",
                },
                validate: (value) =>
                  value.trim().split(/\s+/).length <= 50 || "Maximum 50 words allowed",
              })}
              className="w-full bg-gray-950/10 p-3 rounded-lg backdrop-blur-md border border-white/20 focus:outline-none focus:border-3 focus:border-purple-500"
              placeholder="Your message"
              data-aos="fade-right"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message.message}</span>
            )}

            {/* Submit Button */}
            <button
              disabled={isSubmitting}
              type="submit"
              data-aos="fade-left"
              className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 p-3 rounded-xl text-sm font-semibold flex justify-center items-center gap-2 transition-all duration-200 disabled:opacity-50"
            >
              <svg
                className="group-hover:rotate-45 transition-transform duration-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
              <span>Send message</span>
            </button>
          </form>
        </div>
      </section>
  );
}

export default Contact;
