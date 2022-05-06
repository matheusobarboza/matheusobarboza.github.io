import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Sections = styled.div`
  position: relative;
  width: 100%;
  /* height: calc(100vh - 70px); */
  position: relative;
  /* top: 70px; */
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
