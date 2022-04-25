import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "./global/theme";

import { Email, Line } from "./styles";

import AppRoutes from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />

      <Email>
        <span>matheus.barboza102@gmail.com</span>
      </Email>
      <Line />
    </ThemeProvider>
  );
};

export default App;
