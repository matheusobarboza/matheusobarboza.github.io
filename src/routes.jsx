import { BrowserRouter as Router, Outlet } from "react-router-dom";

import { Container, Sections } from "./styles";

import { ThemeProvider } from "styled-components";
import theme from "./global/theme";

import Topbar from "./components/Topbar";
import AnimatedRoutes from "./components/AnimatedRoutes";

import SocialFollow from "./components/SocialFollow";

const AppRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Topbar />
          <Sections>
            <AnimatedRoutes />
            <Outlet />
          </Sections>
        </Container>
        <SocialFollow />
      </Router>
    </ThemeProvider>
  );
};

export default AppRoutes;
