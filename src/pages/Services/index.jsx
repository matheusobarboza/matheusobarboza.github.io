import React from "react";

import { Container } from "./styles";

const Services = () => {
  return (
    <Container
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    ></Container>
  );
};

export default Services;
