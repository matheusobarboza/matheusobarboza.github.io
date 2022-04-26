import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Container = styled.div`
  display: flex;
  position: absolute;
  left: 95%;
  bottom: 5%;
  writing-mode: vertical-rl;
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
  height: 200px;
`;

export const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: #fff;

  &:hover {
    color: #59e3c5;
  }
`;
