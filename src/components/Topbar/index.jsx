import {
  Container,
  Wrapper,
  Left,
  Right,
  Logo,
  ItemContainer,
  Topic,
  LinkMenu
} from "./styles";

import { useMatch, useResolvedPath, Link } from "react-router-dom";

const Topbar = () => {
  function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <div>
        <LinkMenu
          style={{ color: match ? "#59e3c5" : "#818796" }}
          to={to}
          {...props}
        >
          {children}
        </LinkMenu>
      </div>
    );
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo to="/intro">matheusobarboza.</Logo>
        </Left>

        <Right>
          <ItemContainer>
            <CustomLink to={"/" || "/intro"}>
              <Topic>.</Topic>Home
            </CustomLink>
            <CustomLink to="/about">
              <Topic>.</Topic>Sobre
            </CustomLink>
            <CustomLink to="/portfolio">
              <Topic>.</Topic>Portfólio
            </CustomLink>
            <CustomLink to="/skills">
              <Topic>.</Topic>Habilidades
            </CustomLink>
            <CustomLink to="/projects">
              <Topic>.</Topic>Projetos
            </CustomLink>
            <CustomLink to="/contact">
              <Topic>.</Topic>Contato
            </CustomLink>
          </ItemContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
