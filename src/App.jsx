import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "./global/theme";

import { Email, Followme, Instagram, Github, Linkedin, Twitter } from "./styles";

import AppRoutes from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />

      <Followme>
        <span>Follow me</span>
        <Github />
        <Linkedin />
        <Instagram />
        <Twitter />
      </Followme>

      <Email>
        <span>matheus.barboza102@gmail.com</span>
      </Email>
    </ThemeProvider>
  );
};

export default App;
