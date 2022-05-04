import {
  Container,
  Logo,
  NavMenu,
  NavLink,
  Bars,
} from "./styles";

import { faBars } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  return (
    <Container>
      <Logo to="/">matheusobarboza.</Logo>
      <Bars color="#fff" icon={faBars} />
      <NavMenu>
        {/* <NavLink to={"/"} >
          Home
        </NavLink> */}
        <NavLink to="/about">
          Sobre
        </NavLink>
        <NavLink to="/portfolio">
          Portfólio
        </NavLink>
        <NavLink to="/skills">
          Habilidades
        </NavLink>
        <NavLink to="/services">
          BarbozaTech
        </NavLink>
        <NavLink to="/contact">
          Contato
        </NavLink>
      </NavMenu>
    </Container>
  );
};

export default Topbar;
