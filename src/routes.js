import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Container, Sections } from "./styles";

import Topbar from "./components/Topbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const AppRoutes = () => {
  return (
    <Router>
      <Container>
        <Topbar />
        <Sections>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="intro" element={<Intro />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Sections>
      </Container>
    </Router>
  );
};

export default AppRoutes;
