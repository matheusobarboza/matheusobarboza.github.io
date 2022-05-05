import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  position: absolute;
  right: 2rem;
  bottom: 0;
  writing-mode: vertical-rl;
  cursor: pointer;
  justify-content: space-around;
  height: 12rem;

  @media screen and (max-width: 414px) {
    display: none;
  }
`;

export const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 1.8rem;
  color: #fff;

  &:hover {
    color: #ff5858;
  }
`;
