import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import Intro from "../../pages/Intro";
import About from "../../pages/About";
import Portfolio from "../../pages/Portfolio";
import Skills from "../../pages/Skills";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";
import Services from "../../pages/Services";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Intro />} />
        <Route path="intro" element={<Intro />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
