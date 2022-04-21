import React from "react";

import Topbar from "./components/Topbar";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { ThemeProvider } from "styled-components";
import theme from './global/theme';

import { Container, Sections } from "./styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Topbar />
        <Sections>
          <Intro />
          <Portfolio />
          <Skills />
          <Projects />
          <Contact />
        </Sections>
      </Container>
    </ThemeProvider>
  );
};

export default App;
