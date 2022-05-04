import { Container, Logo, NavMenu, NavLink, Bars } from "./styles";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Anchor } from "phosphor-react";

import {
  useMatch,
  useResolvedPath,
} from "react-router-dom";

const Topbar = () => {
  function CustomLink({ children, to, ...props }) { //adicionar elemento ao navlink quando está ativo
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <div>
        <NavLink to={to} {...props}>
          {children}
        </NavLink>
        {match && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems:'flex-end', marginTop: '2px' }}>
            <Anchor color="#00b6e6" size={15} />
          </div>
        )}
      </div>
    );
  }

  return (
    <Container>
      <Logo to="/">matheusobarboza.</Logo>
      <Bars color="#fff" icon={faBars} />
      <NavMenu>
        <CustomLink to="/about">Sobre</CustomLink>
        <CustomLink to="/portfolio">Portfólio</CustomLink>
        <CustomLink to="/contact">Contato</CustomLink>
        <CustomLink to="barbozaTech" style={{ color: "#00b6e6", fontWeight: 600 }}>
          BarbozaTech
        </CustomLink>
      </NavMenu>
    </Container>
  );
};

export default Topbar;
