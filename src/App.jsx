import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function PageContent() {
  return (
    <main className="relative bg-[#0d0d1e] w-full overflow-x-hidden text-white">

      {/* Header spacer — matches header height */}
      <div className="h-[88px]" />

      <section id="home"><Home /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>

    </main>
  );
}



function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
      offset: 120,
    });
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
