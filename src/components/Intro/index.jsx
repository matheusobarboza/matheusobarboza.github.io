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
  AwesomeIcon,
  Next,
  Top,
  Bottom,
  NextIcon,
} from "./styles";

import { faHandPeace, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Wrapper>
        <Top>
          <Left>
            <Lottie options={defaultOptions} height={400} width={400} />
          </Left>
          <Right>
            <ContainerAboutMe>
              <Hello>
                Olá <AwesomeIcon color="yellow" icon={faHandPeace} />, eu me
                chamo
              </Hello>
              <MyName>Matheus.</MyName>
              <Ocupation>desenvolvedor front end + suporte técnico</Ocupation>
              <AboutMe>
                Eu sou desenvolvedor front-end
                <br />
                e tenho experiência em suporte técnico
                <br />
                (Smarthphones e Micros).
              </AboutMe>
            </ContainerAboutMe>
          </Right>
        </Top>
        <Bottom>
          <Next to="/about">
            <span>Veja mais sobre mim</span>
            <NextIcon color="#818796" size="1x" icon={faArrowRight} />
          </Next>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Intro;
