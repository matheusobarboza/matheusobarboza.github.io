import {
  Container,
  Wrapper,
  Left,
  Right,
  Logo,
  NavMenu,
  NavLink,
  Bars,
} from "./styles";

import { faBars } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  return (
    <Container>
      {/* <Wrapper> */}
      {/* <Left> */}
      <Logo to="/">matheusobarboza.</Logo>
      {/* </Left> */}

      {/* <Right> */}
      <Bars color="#fff" icon={faBars} />
      <NavMenu>
        <NavLink to={"/"} >
          Home
        </NavLink>
        <NavLink to="/about">
          Sobre
        </NavLink>
        <NavLink to="/portfolio">
          Portfólio
        </NavLink>
        <NavLink to="/skills">
          Habilidades
        </NavLink>
        {/* <NavLink to="/projects">
          Projetos
        </NavLink> */}
        <NavLink to="/services">
          Serviços
        </NavLink>
        <NavLink to="/contact">
          Contato
        </NavLink>
      </NavMenu>
      {/* </Right> */}
      {/* </Wrapper> */}
    </Container>
  );
};

export default Topbar;
