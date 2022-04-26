import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  background-color: #212121;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Left = styled.div`
  display: flex;
  height: 400px;
  margin-right: 50px;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 400px;
`;

export const ContainerAboutMe = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Hello = styled.span`
  font-family: "League Spartan", sans-serif;
  font-size: 18px;
  color: #fff;
`;

export const AboutMe = styled.p`
  margin-top: 15px;
  font-family: "League Spartan", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #818796;
  text-align: justify;
`;

export const MyName = styled.span`
  font-family: "League Spartan", sans-serif;
  font-weight: 500;
  font-size: 60px;
  color: #fff;
  margin-top: 15px;
`;

export const Ocupation = styled.span`
  margin-top: 15px;
  font-family: "League Spartan", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #73f26c;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
