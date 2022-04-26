import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lotties/developer2-lottie";

import { Container, Left, Right } from "./styles";

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
      <Left>
        <Lottie options={defaultOptions} height={400} width={400} />
      </Left>
      <Right>
        <h2>Olá,</h2>
        <h3>eu me chamo Matheus</h3>
      </Right>
    </Container>
  );
};

export default Intro;
