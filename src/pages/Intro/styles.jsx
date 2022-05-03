import styled from "styled-components";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  background-color: #0F1020;
  height: 100vh;
  width: 100%;

  @media screen and (max-width: 360px) {
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Top = styled.div`
  display: flex;
  
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }

  @media screen and (max-width: 360px) {
    padding-top: 5rem;
  }
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`;

export const Left = styled.div`
  display: flex;
  height: 400px;
  margin-right: 50px;

  @media screen and (max-width: 360px) {
    margin-right: 0;
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 400px;

  @media screen and (max-width: 360px) {
    justify-content: center;
  }
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
  margin-top: 20px;
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
  transition: transform 250ms; //animação de subir o component part1
  background: linear-gradient(to right, #ccc 50%, #ff5858 50%, #cc2e5d); //animação gradiente 
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 0.5s ease-out;

  &:hover {
    transform: translateY(-10px); //animação de subir o component part2
    /* font-weight: 600; */
    background-position: -100%;
  }
`;

export const Ocupation = styled.span`
  margin-top: 20px;
  font-family: "League Spartan", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #73f26c;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const AwesomeIcon = styled(FontAwesomeIcon)`
  color: ${props => props.color};
`;

export const NextIcon = styled(FontAwesomeIcon)`
  color: ${props => props.color};
  align-self: center;
  color: #fff;

  &:hover {
    color: #fff;
  }
`;

export const Next = styled(Link)`
  font-family: "League Spartan", sans-serif;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  color: #818796;
  padding: 1rem;
  transition: transform 250ms;

  span{
    margin-right: 15px;
  }

  &:hover {
    color: #fff;
    font-weight: 700;
    transform: translateY(-10px);
  }

  @media screen and (max-width: 360px) {
    font-size: 0.8rem;
    color: #fff;
  }
`;
