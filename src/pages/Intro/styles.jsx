import styled from "styled-components";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #0F1020;
  height: 100vh;
  width: 100%;

  @media screen and (max-width: 915px) and (max-height: 414px) {
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7rem;
  /* background: red; */

  @media screen and (max-width: 414px) {
    padding: 0.5rem;
    margin-bottom: 2rem;
  }  

  @media screen and (max-width: 360px) {
    padding: 0.5rem;
    margin-bottom: 1rem;
  }  
`;

export const Top = styled.div`
  display: flex;
  flex-direction:row;
  
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  margin-right: 50px;

  @media screen and (max-width: 414px) {
    margin-right: 0;
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerAboutMe = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Hello = styled.span`
  font-family: "League Spartan", sans-serif;
  font-size: 1.2rem;
  color: #fff;
`;

export const AboutMe = styled.p`
  margin-top: 1.3rem;
  font-family: "League Spartan", sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  color: #818796;
  text-align: justify;
`;

export const MyName = styled.span`
  font-family: "League Spartan", sans-serif;
  font-weight: 500;
  font-size: 4rem;
  color: #fff;
  margin-top: 1rem;
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

  @media screen and (max-width: 414px) {
    font-size: 1.5rem;
  }
`;

export const Ocupation = styled.span`
  margin-top: 20px;
  font-family: "League Spartan", sans-serif;
  font-weight: 500;
  font-size: 1rem;
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
  display: flex;
  justify-content: center;
  font-family: "League Spartan", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
  color: #818796;
  padding-bottom: 2rem;

  span{
    margin-right: 1rem;
  }

  &:hover {
    color: #fff;
    font-weight: 700;
  }

  @media screen and (max-width: 414px) {
    font-size: 0.8rem;
    color: #fff;
    padding-bottom: 0;
  }
`;
