import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lotties/developer2-lottie";

import {
  Container,
  Left,
  Right,
  AboutMe,
  Hello,
  ContainerAboutMe,
  Wrapper,
  MyName,
  Ocupation,
} from "./styles";

const Intro = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Wrapper>
        <Left>
          <Lottie options={defaultOptions} height={400} width={400} />
        </Left>
        <Right>
          <ContainerAboutMe>
            <Hello>Olá!, eu me chamo</Hello>
            <MyName>Matheus.</MyName>
            <Ocupation>desenvolvedor front end + suporte técnico</Ocupation>
            <AboutMe>
              Eu sou desenvolvedor front-end<br />
              e tenho experiência em suporte técnico<br />
              (Smarthphones e Micros). 
            </AboutMe>
          </ContainerAboutMe>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Intro;
