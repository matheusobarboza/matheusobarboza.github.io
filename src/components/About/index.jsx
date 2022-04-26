import React from "react";

import { Container } from "./styles";

const About = () => {
  return (
    <Container
      //rotation
      animate={{ rotate: 360 }}
      transition={{ duration: 1 }}
    ></Container>
  );
};

export default About;
