import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Container = styled(motion.div)`
  background-color: #0f1020;
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 7rem;

  @media screen and (max-width: 1240px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 1150px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 360px) {
    padding: 2rem;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;

  @media screen and (max-width: 1150px) {
    max-width: 100%;
    padding-bottom: 3rem;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 360px) {
    max-width: 100%;
  }
`;

export const ContainerDescription = styled.div`
  box-shadow: 2rem 2rem 3rem -3rem #897d93;
  border-radius: 2rem;

  @media screen and (max-width: 360px) {
    box-shadow: 1rem 1rem 2rem -2rem #897d93;
    border-radius: 2rem;
  }
`;

export const Img = styled.img`
  width: 20rem;
  height: 20rem;

  @media screen and (max-width: 360px) {
    width: 15rem;
    height: 15rem;
  }
`;

export const MyName = styled.span`
  font-family: "League Spartan", sans-serif;
  font-size: 1.3rem;
  color: #ccd6f6;
  font-weight: 700;

  @media screen and (max-width: 360px) {
    font-size: 1rem;
  }
`;

export const SpanDescription = styled.p`
  font-size: 1.2rem;
  font-family: "League Spartan", sans-serif;
  color: #717c99;

  @media screen and (max-width: 360px) {
    font-size: 1rem;
  }
`;

export const PDescription = styled.p`
  font-size: 1.2rem;
  font-family: "League Spartan", sans-serif;
  color: #717c99;
  word-wrap: break-word;
  text-align: left;
  line-height: 1.8rem;
  padding: 0.5rem;

  @media screen and (max-width: 360px) {
    font-size: 1rem;
    line-height: 1.1rem;
  }
`;

export const FavoriteThing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const WhoIm = styled.div`
  display: flex;
  padding-bottom: 2rem;
  justify-content: space-between;

  span {
    font-family: "League Spartan", sans-serif;
    font-size: 2rem;
    color: #fff;
    font-weight: 700;
  }

  @media screen and (max-width: 360px) {
    padding-bottom: 1rem;
    span {
      font-size: 1.3rem;
    }
  }
`;

export const Line = styled.span`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #233554;
  align-self: center;
  writing-mode: ${(props) => props.writingMode};

  @media screen and (max-width: 360px) {
    display: none;
  }
`;

export const AwesomeIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.color};
  padding-right: 1rem;
`;

export const Ul = styled.ul`
  list-style: none;
  gap: 1rem;
`;

export const Li = styled.li`
  gap: 1.75em;
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
`;

export const Next = styled(Link)`
  font-family: "League Spartan", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  color: #818796;
  padding: 0.5rem;

  span {
    margin-right: 1rem;
  }

  &:hover {
    color: #fff;
    font-weight: 700;
  }

  @media screen and (max-width: 360px) {
    font-size: 0.8rem;
    color: #fff;
  }
`;
