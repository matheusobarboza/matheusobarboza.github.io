import React from "react";

import Typical from "react-typical";

import Lottie from "react-lottie";
import animationData from "../../lotties/hello";
import { CaretDown } from "phosphor-react";

import {
  faMugHot,
  faLaptop,
  faFutbol,
  faLaptopCode,
  faFilm,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

import Cactus from "../../assets/cacto.svg";
import Like from "../../assets/like.svg";
import CoolFace from "../../assets/cool_face.svg";

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
  Next,
  Divider,
  SkillsContainer,
  Skills,
  AreaTitle,
  SkillsTitle
} from "./styles";

import Me from "../../assets/me-2.png";

const About = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Wrapper>
        <Left>
          <WhoIm>
            <span>Eu, Eu mesmo e Eu </span>{" "}
            <Line width="50%" height="1px" writingMode="horizontal-tb" />
          </WhoIm>
          <ContainerDescription>
            <PDescription>
              Eu me chamo <MyName>Matheus Barboza,</MyName> tenho 22 anos e sou
              Alagoano <img src={Cactus} height="40px" alt="" />, me formei no
              curso de Análise e Desenvolvimento de Sistemas pelo IFBA em Irecê
              na Bahia, morei 3 anos nessa cidade maravilhosa. Após concluir a
              faculdade eu consegui uma vaga de estagiário como Dev Front End em
              Feira de Santana - BA, porém fiquei pouco tempo e logo retornei
              para minha cidade no interior de Alagoas. Atualmente eu trabalho
              como monitor em uma escola de programação, e trabalho como
              autônomo consertando computadores e smartphones, além de
              desenvolver apps e websites como freelancer. Meu objetivo é focar
              e me estabilizar no mercado de trabalho de programação, e tornar
              essa área como minha principal fonte de renda. Criei este site
              para me apresentar a você visitante e mostrar o meu trabalho.{" "}
              <br />
              <br />
              Quem sabe não podemos conversar e construir algo legal juntos{" "}
              <img src={CoolFace} height="20px" alt="" />.
            </PDescription>
            <br /> <br />
            <SpanDescription style={{ color: "#ccd6f6" }}>
              Coisas que eu gosto <img src={Like} height="20px" alt="" /> :
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
                  <SpanDescription>Computadores e Smartphones;</SpanDescription>
                </FavoriteThing>
              </Li>
            </Ul>
          </ContainerDescription>
        </Left>
        <Right>
          <Img src={Me} />
          <Lottie options={defaultOptions} />
          <Next to="/portfolio">
            <span>Veja meu Portfólio</span>
            <AwesomeIcon color="#fff" icon={faArrowRight} />
          </Next>
        </Right>
      </Wrapper>
      <Divider>
        <span>scrool</span>
        <CaretDown size={150} weight="regular" color="#717c99" />
      </Divider>
      <AreaTitle>
        <span>Áreas de Experiência</span>
      </AreaTitle>
      <SkillsContainer>
        <Skills>
          <SkillsTitle>Front End</SkillsTitle>
        </Skills>
        <Skills>
          <SkillsTitle>Back End</SkillsTitle>
        </Skills>
        <Skills>
          <SkillsTitle>Suporte</SkillsTitle>
        </Skills>
      </SkillsContainer>
    </Container>
  );
};

export default About;
