import React from "react";

import { faMugHot, faCode } from "@fortawesome/free-solid-svg-icons";
import Typical from "react-typical";

import {
  Container,
  Wrapper,
  Description,
  Left,
  Right,
  Img,
  MyName,
  AwesomeIcon,
  Ul,
  Li
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
          <Description>
            Eu me chamo <MyName>Matheus Barboza.</MyName> Sou formado em
            <br />
            Análise e Desenvolvimento de Sistemas pelo IFBA.
            <br /> <br />
            Coisas que eu gosto
            <br />
            <br />
            <Ul>
              <Li>
                Eu amo café <AwesomeIcon color="#A57F60" icon={faMugHot} />
              </Li>
              <Li>
                {" "}
                <Typical
                  steps={[1000, "Programar", 1000, "Desenvolver"]}
                  loop={Infinity}
                  wrapper="a"
                />{" "}
                <AwesomeIcon color="#07BEB8" icon={faCode} /> aplicativos e sites
              </Li>
              <Li>
                Consertar Computadores e Smartphones
              </Li>
            </Ul>
          </Description>
        </Left>
        <Right>
          <Img src={Me} />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default About;
