import {
  Container,
  Wrapper,
  Left,
  Right,
  Logo,
  ItemContainer,
  LinkMenu
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
            <LinkMenu to={"/"}>Home</LinkMenu>
            <LinkMenu to="/about">Sobre</LinkMenu>
            <LinkMenu to="/portfolio">Portfólio</LinkMenu>
            <LinkMenu to="/skills">Habilidades</LinkMenu>
            <LinkMenu to="/projects">Projetos</LinkMenu>
            <LinkMenu to="/services">Serviços</LinkMenu>
            <LinkMenu to="/contact">Contato</LinkMenu>
          </ItemContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
