import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

const HEADER_HEIGHT = 88;

function PageContent() {
  return (
    <main className="relative bg-[#0d0d1e] w-full overflow-x-hidden text-white">

      {/* prevents header overlap on all screens */}
      <div style={{ height: HEADER_HEIGHT }} />

      {/* Perfect recruiter flow */}
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="certificates"><Certificates /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>

    </main>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
      offset: 120,
    });

    // keeps animations perfect after layout shifts
    const refresh = () => AOS.refresh();
    window.addEventListener("resize", refresh);

    return () => window.removeEventListener("resize", refresh);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <PageContent />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
