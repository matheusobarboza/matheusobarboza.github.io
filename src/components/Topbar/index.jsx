import {
  Container,
  Wrapper,
  Left,
  Right,
  Logo,
  ItemContainer,
  LinkMenu,
  AwesomeIcon,
} from "./styles";

import { faHouse, faCircleInfo, faBook, faListCheck, faCode, faLaptop, faIdBadge } from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/free-regular-svg-icons";

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo to="/">matheusobarboza.</Logo>
        </Left>

        <Right>
          <ItemContainer>
            <LinkMenu to={"/"}><AwesomeIcon color="#fff" icon={faHouse} /> Home</LinkMenu>
            <LinkMenu to="/about"><AwesomeIcon color="#fff" icon={faCircleInfo} /> Sobre</LinkMenu>
            <LinkMenu to="/portfolio"><AwesomeIcon color="#fff" icon={faBook} /> Portfólio</LinkMenu>
            <LinkMenu to="/skills"><AwesomeIcon color="#fff" icon={faListCheck} /> Habilidades</LinkMenu>
            <LinkMenu to="/projects"><AwesomeIcon color="#fff" icon={faCode} /> Projetos</LinkMenu>
            <LinkMenu to="/services"><AwesomeIcon color="#fff" icon={faLaptop} /> Serviços</LinkMenu>
            <LinkMenu to="/contact"><AwesomeIcon color="#fff" icon={faIdBadge} /> Contato</LinkMenu>
          </ItemContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
