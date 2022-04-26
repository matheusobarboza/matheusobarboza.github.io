import React from "react";

import { Container } from "./styles";

const Skills = () => {
  return (
    <Container
      cx={500}
      animate={{ cx: [null, 100] }}
    ></Container>
  );
};

export default Skills;
