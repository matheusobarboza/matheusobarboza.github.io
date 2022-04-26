import {
  Container,
  Wrapper,
  Left,
  Right,
  Logo,
  ItemContainer,
  Topic,
  LinkMenu,
} from "./styles";

const Topbar = () => {

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo to="/">matheusobarboza.</Logo>
        </Left>

        <Right>
          <ItemContainer>
            <LinkMenu to={"/"}>
              <Topic>.</Topic>Home
            </LinkMenu>
            <LinkMenu to="/about">
              <Topic>.</Topic>Sobre
            </LinkMenu>
            <LinkMenu to="/portfolio">
              <Topic>.</Topic>Portfólio
            </LinkMenu>
            <LinkMenu to="/skills">
              <Topic>.</Topic>Habilidades
            </LinkMenu>
            <LinkMenu to="/projects">
              <Topic>.</Topic>Projetos
            </LinkMenu>
            <LinkMenu to="/contact">
              <Topic>.</Topic>Contato
            </LinkMenu>
          </ItemContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
