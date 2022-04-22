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
          <Logo href="#intro">matheusobarboza.</Logo>
        </Left>

        <Right>
          <ItemContainer>
            <LinkMenu href="#intro">
              <Topic>.</Topic>Home
            </LinkMenu>
            <LinkMenu href="#about">
              <Topic>.</Topic>Sobre
            </LinkMenu>
            <LinkMenu href="#portfolio">
              <Topic>.</Topic>Portfolio
            </LinkMenu>
            <LinkMenu href="#skills">
              <Topic>.</Topic>Skills
            </LinkMenu>
            <LinkMenu href="#projects">
              <Topic>.</Topic>Projects
            </LinkMenu>
            <LinkMenu href="#contact">
              <Topic>.</Topic>Contact
            </LinkMenu>
          </ItemContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
