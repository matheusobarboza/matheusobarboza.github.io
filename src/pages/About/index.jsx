import React from "react";

import Typical from "react-typical";

import { faMugHot, faLaptop, faFutbol, faLaptopCode, faFilm, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Cactus from '../../assets/cacto.svg';
import Like from '../../assets/like.svg';
import CoolFace from '../../assets/cool_face.svg';

import {
  Container,
  Wrapper,
  ContainerDescription,
  Left,
  Right,
  Img,
  MyName,
  AwesomeIcon,
  Ul,
  Li,
  WhoIm,
  Line,
  SpanDescription,
  PDescription,
  FavoriteThing,
  ContainerImg,
  Next,
} from "./styles";

import Me from "../../assets/me.png";

const About = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Wrapper>
        <Left>
          <WhoIm>
            <span>Eu, Eu mesmo e Eu </span> <Line width="50%" />
          </WhoIm>
          <ContainerDescription>
            <PDescription>
              Eu me chamo <MyName>Matheus Barboza,</MyName> tenho 22 anos e sou Alagoano <img src={Cactus} height="40px" />, me formei no curso de<br />
              Análise e Desenvolvimento de Sistemas pelo IFBA em Irecê na Bahia, morei 3 anos nessa<br /> cidade maravilhosa. Após concluir a 
              faculdade eu consegui uma vaga de estagiário como<br /> Dev Front End em Feira de Santana - BA, porém fiquei 
              pouco tempo e logo retornei para minha<br /> cidade no interior de Alagoas. Atualmente eu trabalho como
              monitor em uma escola de<br /> programação, e trabalho como autônomo consertando computadores e smartphones,<br />
              além de desenvolver apps e websites como freelancer. Meu objetivo é focar e me estabilizar<br /> no mercado de trabalho
              de programação, e tornar essa área como minha principal fonte de<br /> renda. Criei este site para me apresentar
              a você visitante e mostrar o meu trabalho. <br /><br/>Quem sabe não podemos conversar e construir algo legal juntos <img src={CoolFace} height="20px" />. 
            </PDescription>
            <br /> <br />
            <SpanDescription style={{ color: "#ccd6f6" }}>
              Coisas que eu gosto <img src={Like} height="20px" /> :
            </SpanDescription>
            <br />
            <Ul>
              <Li>
                <FavoriteThing>
                  <AwesomeIcon color="#A57F60" icon={faMugHot} />
                  <SpanDescription>Café;</SpanDescription>
                </FavoriteThing>
              </Li>
              <Li>
                <FavoriteThing>
                  <AwesomeIcon color="#fff" icon={faFutbol} />
                  <SpanDescription>Futebol;</SpanDescription>
                </FavoriteThing>
              </Li>
              <Li>
                <FavoriteThing>
                  <AwesomeIcon color="#fff" icon={faFilm} />
                  <SpanDescription>Animes, Séries e Filmes;</SpanDescription>
                </FavoriteThing>
              </Li>
              <Li>
                <FavoriteThing>
                  <AwesomeIcon color="#07BEB8" icon={faLaptopCode} />
                  <SpanDescription style={{ fontSize: 18 }}>
                    <Typical
                      steps={[1000, "Programar", 1000, "Desenvolver"]}
                      loop={Infinity}
                      wrapper="a"
                    />
                  </SpanDescription>
                  <SpanDescription>;</SpanDescription>
                </FavoriteThing>
              </Li>
              <Li>
                <FavoriteThing>
                  <AwesomeIcon color="#2064b3" icon={faLaptop} />
                  <SpanDescription>
                    Computadores e Smartphones;
                  </SpanDescription>
                </FavoriteThing>
              </Li>
            </Ul>
          </ContainerDescription>
        </Left>
        <Right>
          <ContainerImg>
            <Img src={Me} />
            <Line width="300px" />
            <Line width="200px" />
            <Line width="100px" />
          </ContainerImg>
          <Next to="/portfolio">
            <span>Veja meu Portfólio</span>
            <AwesomeIcon color="#fff" icon={faArrowRight} />
          </Next>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default About;
