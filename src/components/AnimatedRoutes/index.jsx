import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import Intro from "../Intro";
import About from "../About";
import Portfolio from "../Portfolio";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Intro />} />
        <Route path="intro" element={<Intro />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
