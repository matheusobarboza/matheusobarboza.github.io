import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import Intro from "../../pages/Intro";
import About from "../../pages/About";
import Portfolio from "../../pages/Portfolio";
import Contact from "../../pages/Contact";
import BarbozaTech from "../../pages/BarbozaTech";

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
        <Route path="contact" element={<Contact />} />
        <Route path="barbozaTech" element={<BarbozaTech />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
