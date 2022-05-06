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
  NextIcon
} from "./styles";

import { faHandPeace, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Typical from "react-typical";

const Intro = () => {
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
        <Top>
          <Left>
            <Lottie options={defaultOptions} />
          </Left>
          <Right>
            <ContainerAboutMe>
              <Hello>
                Olá <AwesomeIcon color="yellow" icon={faHandPeace} />, eu me
                chamo
              </Hello>
              <MyName title="Surprise :)">Matheus.</MyName>
              <Ocupation>
                <Typical
                  style={{ width: "5rem" }}
                  steps={[
                    1000,
                    "desenvolvedor front end",
                    1000,
                    "suporte técnico"
                  ]}
                  loop={Infinity}
                  wrapper="b"
                />
              </Ocupation>
              <AboutMe style={{ marginTop: 5 }}>Freelancer</AboutMe>
              <AboutMe>
                Eu sou Desenvolvedor Front End
                <br />
                e tenho experiência em suporte técnico
                <br />
                (Smarthphones e Micros).
              </AboutMe>
            </ContainerAboutMe>
          </Right>
        </Top>
      </Wrapper>
      <Next to="/about">
        <span>Veja mais sobre mim</span>
        <NextIcon color="#818796" size="1x" icon={faArrowRight} />
      </Next>
    </Container>
  );
};

export default Intro;
