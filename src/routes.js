import {
  BrowserRouter as Router,
  Outlet,
} from "react-router-dom";

import { Container, Sections } from "./styles";

import Topbar from "./components/Topbar";
import AnimatedRoutes from "./components/AnimatedRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Container>
        <Topbar />
        <Sections>
          <AnimatedRoutes />
          <Outlet />
        </Sections>
      </Container>
    </Router>
  );
};

export default AppRoutes;
