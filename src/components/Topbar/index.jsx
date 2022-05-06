import { useState } from "react";

import {
  Container,
  Logo,
  NavMenu,
  NavLink,
  Bars,
  MenuBars,
  MenuContainer,
  MenuItem,
  MenuLink,
  Icon
} from "./styles";

import {
  faBars,
  faXmark,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { Anchor } from "phosphor-react";

import { useMatch, useResolvedPath } from "react-router-dom";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function CustomLink({ children, to, ...props }) {
    //adicionar elemento ao navlink quando está ativo
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <div>
        <NavLink to={to} {...props}>
          {children}
        </NavLink>
        {match && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              marginTop: "2px"
            }}
          >
            <Anchor color="#00b6e6" size={15} />
          </div>
        )}
      </div>
    );
  }

  return (
    <Container>
      <Logo to="/">matheusobarboza.</Logo>
      <Bars
        onClick={() => setIsMenuOpen(isMenuOpen ? false : true)}
        color="#fff"
        icon={isMenuOpen ? faXmark : faBars}
      />
      <NavMenu>
        <CustomLink to="/about">Sobre</CustomLink>
        <CustomLink to="/portfolio">Portfólio</CustomLink>
        <CustomLink to="/contact">Contato</CustomLink>
        <CustomLink
          to="barbozaTech"
          style={{ color: "#00b6e6", fontWeight: 600 }}
        >
          BarbozaTech
        </CustomLink>
      </NavMenu>
      {isMenuOpen && (
        <MenuBars>
          <MenuContainer>
            <MenuItem>
              <MenuLink to="/about" onClick={() => setIsMenuOpen(false)}>
                Sobre
                <Icon color="#fff" icon={faArrowRight} />
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>
                Portfólio
                <Icon color="#fff" icon={faArrowRight} />
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contato
                <Icon color="#fff" icon={faArrowRight} />
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/barbozatech" onClick={() => setIsMenuOpen(false)}>
                BarbozaTech
                <Icon color="#fff" icon={faArrowRight} />
              </MenuLink>
            </MenuItem>
          </MenuContainer>
        </MenuBars>
      )}
    </Container>
  );
};

export default Topbar;
