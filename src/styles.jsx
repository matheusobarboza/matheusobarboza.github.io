import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Sections = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: lightsalmon;
  position: relative;
  top: 70px;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    width: 100vw;
    height: calc(100vh - 70px);
    scroll-snap-align: start;
  }
`;

export const Email = styled.div`
  position: absolute;
  left: 96%;
  bottom: 10%;
  writing-mode: vertical-rl;
  font-size: 16px;
  color: #ffff;
  cursor: pointer;
`;

export const Line = styled.div`
  height: 80px;
  width: 8px;
  border-right: 1px solid #59e3c5;
  position: absolute;
  left: 96%;
  bottom: 0px;
  writing-mode: vertical-rl;
`;
