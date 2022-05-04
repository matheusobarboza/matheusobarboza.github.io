import React from "react";

import { Container, Breve } from "./styles";

const BarbozaTech = () => {
  return (
    <Container
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <Breve>Em breve...</Breve>
    </Container>
  );
};

export default BarbozaTech;
