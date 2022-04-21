import React from "react";

import { Container, Wrapper, Left, Right, Logo } from "./styles";

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo href="#intro">matheusobarboza.</Logo>
        </Left>
        <Right></Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
