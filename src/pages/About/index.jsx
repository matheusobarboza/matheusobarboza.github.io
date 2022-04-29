import React from "react";

import { faMugHot, faCode, faLaptop } from "@fortawesome/free-solid-svg-icons";
import Typical from "react-typical";

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
  SpanLi,
  WhoIm,
  Line
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
            <span>Quem Sou eu?</span> 
            <Line /></WhoIm>
          <ContainerDescription>
            <span>
              Eu me chamo <MyName>Matheus Barboza.</MyName> Sou formado em
            </span>
            <br />
            <span>Análise e Desenvolvimento de Sistemas pelo IFBA.</span>
            <br /> <br />
            <span>Coisas que eu gosto</span>
            <br />
            <br />
            <Ul>
              <Li>
                <AwesomeIcon color="#A57F60" icon={faMugHot} />
                <SpanLi margin="8px">Eu amo café</SpanLi>
              </Li>
              <Li>
                <AwesomeIcon color="#07BEB8" icon={faCode} />{" "}
                <SpanLi>
                  <Typical
                    steps={[1000, "Programar", 1000, "Desenvolver"]}
                    loop={Infinity}
                    wrapper="a"
                  />
                </SpanLi>{" "}
                <span>Apps e Sites</span>
              </Li>
              <Li>
                <AwesomeIcon color="#07BEB8" icon={faLaptop} />
                <SpanLi margin="7px">
                  Consertar Computadores e Smartphones
                </SpanLi>
              </Li>
            </Ul>
          </ContainerDescription>
        </Left>
        <Right>
          <Img src={Me} />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default About;
