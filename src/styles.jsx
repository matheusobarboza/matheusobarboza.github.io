import styled from "styled-components";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Container = styled.div`
  height: 100vh;
`;

export const Sections = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);
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
  bottom: 5%;
  writing-mode: vertical-rl;
  font-size: 16px;
  color: #ffff;
  cursor: pointer;

  span {
    font-weight: 500;
  }

  &:hover {
    color: #59e3c5;
  }
`;

export const Followme = styled.div`
  display: flex;
  position: absolute;
  right: 96%;
  bottom: 5%;
  writing-mode: vertical-rl;
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
  height: 200px;

  span{
    writing-mode: horizontal-tb;
    color: #818796;
    cursor: auto;
    font-weight: 500;
  }
`;

export const Instagram = styled(FaInstagram)`
  font-size: 35px;
  color: #fff;

  &:hover {
    color: #59e3c5;
  }
`;

export const Github = styled(FaGithub)`
  font-size: 35px;
  color: #fff;

  &:hover {
    color: #59e3c5;
  }
`;

export const Linkedin = styled(FaLinkedin)`
  font-size: 35px;
  color: #fff;

  &:hover {
    color: #59e3c5;
  }
`;

export const Twitter = styled(FaTwitter)`
  font-size: 35px;
  color: #fff;

  &:hover {
    color: #59e3c5;
  }
`;
