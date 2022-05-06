import { useState, useEffect, useRef } from "react";

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
} from "./styles";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Anchor, X } from "phosphor-react";

import { useMatch, useResolvedPath } from "react-router-dom";

const Topbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isMenuOpen])


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
              marginTop: "2px",
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
        menuopen={isMenuOpen}
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
        <MenuBars ref={ref}>
          <MenuContainer>
            <MenuItem>
              <MenuLink to="/about" onClick={() => setIsMenuOpen(false)}>Sobre</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfólio</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contato</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/barbozatech" onClick={() => setIsMenuOpen(false)}>BarbozaTech</MenuLink>
            </MenuItem>
          </MenuContainer>
        </MenuBars>
      )}
      
    </Container>
  );
};

export default Topbar;
