import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const HEADER_HEIGHT = 90;

function ScrollToSectionOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.slice(1) || "home";
    const element = document.getElementById(sectionId);

    if (!element) return;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      HEADER_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });
  }, [location]);

  return null;
}

function PageContent() {
  return (
    <main className="relative bg-[#0d0d1e] w-full overflow-x-hidden text-white pt-[90px]">
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,        // same smooth speed as your original
      once: false,         // allow re-animation on scroll
      mirror: true,        // animate when scrolling back
      easing: "ease-out-cubic",
      offset: 120,
    });

    // Important: continuous refresh like your old behavior
    const refresh = () => AOS.refresh();
    window.addEventListener("scroll", refresh);

    return () => window.removeEventListener("scroll", refresh);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToSectionOnRouteChange />
      <Header />
      <PageContent />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
