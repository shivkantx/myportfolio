import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPaperPlane } from "react-icons/fa";
import { EMAIL_CONFIG } from "../config/email";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    AOS.refresh();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    emailjs
      .sendForm(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        formRef.current,
        EMAIL_CONFIG.publicKey
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully! 🚀");
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          setSuccess("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0d0d1e] text-white px-6 md:px-16 lg:px-28 py-32 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-700 rounded-full blur-[160px] opacity-20"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* Title */}
        <div className="text-center mb-20">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Let’s Work Together
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-gray-400 max-w-xl mx-auto"
          >
            Have a project idea or want to collaborate?
            Drop me a message — I’ll get back to you quickly.
          </p>
        </div>

        {/* Glass Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          data-aos="zoom-in"
          className="bg-[#15182f]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-10 shadow-2xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="bg-[#0d0d1e] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="bg-[#0d0d1e] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="bg-[#0d0d1e] border border-gray-700 rounded-lg px-4 py-3 w-full outline-none focus:border-purple-500 transition"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="bg-[#0d0d1e] border border-gray-700 rounded-lg px-4 py-3 w-full outline-none resize-none focus:border-purple-500 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition shadow-lg hover:shadow-purple-500/40"
          >
            {loading ? "Sending..." : "Send Message"}
            <FaPaperPlane />
          </button>

          {success && (
            <p className="text-center text-sm text-green-400 mt-2">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
