import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "./global/theme";

import { Followme, Instagram, Github, Linkedin, Twitter } from "./styles";

import AppRoutes from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />

      <Followme>
        <Github />
        <Linkedin />
        <Instagram />
        <Twitter />
      </Followme>
    </ThemeProvider>
  );
};

export default App;
