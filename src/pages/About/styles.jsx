import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
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

  @media screen and (max-width: 414px) {
    padding: 2rem;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;

  @media screen and (max-width: 1150px) {
    max-width: 100%;
    padding-bottom: 3rem;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 414px) {
    max-width: 100%;
  }
`;

export const ContainerDescription = styled.div`
  box-shadow: 2rem 2rem 3rem -3rem #897d93;
  border-radius: 2rem;

  @media screen and (max-width: 412px) {
    box-shadow: 1rem 1rem 2rem -2rem #897d93;
    border-radius: 2rem;
  }
`;

export const Img = styled.img`
  width: 18rem;
  height: 18rem;

  @media screen and (max-width: 414px) {
    width: 13rem;
    height: 13rem;
  }
`;

export const MyName = styled.span`
  font-family: "League Spartan", sans-serif;
  font-size: 1.3rem;
  color: #ccd6f6;
  font-weight: 700;

  @media screen and (max-width: 414px) {
    font-size: 1rem;
  }
`;

export const SpanDescription = styled.p`
  font-size: 1.2rem;
  font-family: "League Spartan", sans-serif;
  color: #717c99;

  @media screen and (max-width: 414px) {
    font-size: 1rem;
  }
`;

export const SpanSkill = styled.p`
  font-family: "League Spartan", sans-serif;
  font-size: 1.5rem;
  color: #172a3a;
  font-weight: 500;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 1150px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 414px) {
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

  @media screen and (max-width: 414px) {
    font-size: 1rem;
    line-height: 1.1rem;
  }
`;

export const FavoriteThing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
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

  @media screen and (max-width: 414px) {
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
  color: #134074;

  @media screen and (max-width: 414px) {
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

  @media screen and (max-width: 414px) {
    font-size: 0.8rem;
    color: #fff;
  }
`;

export const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    font-size: 1.2rem;
    color: #bfbdc1;
  }

  @media screen and (max-width: 414px) {
    span {
      font-size: 1rem;
    }
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 40rem;
  background-color: #fff;
  border-radius: 1rem 1rem 0 0;
  margin-top: 3rem;

  @media screen and (max-width: 1150px) {
    width: 90%;
  }

  @media screen and (max-width: 414px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 414px) {
    margin-bottom: 1.5rem;
  }
`;

export const SkillsTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 50%;
  width: 80%;

  @media screen and (max-width: 414px) {
    flex-direction: column;
    height: 60%;
    margin-top: 2rem;
  }
`;

export const SkillsBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;

  @media screen and (max-width: 414px) {
    height: 40%;
  }
`;

export const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50%;
`;

export const SkillsTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  span {
    font-family: "League Spartan", sans-serif;
    font-size: 2rem;
    color: #134074;
    font-weight: 500;
  }

  @media screen and (max-width: 414px) {
    span {
      font-size: 1.3rem;
    }
  }
`;

export const AreaTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;

  span {
    font-family: "League Spartan", sans-serif;
    font-size: 2rem;
    color: #fff;
    font-weight: 600;
  }

  @media screen and (max-width: 414px) {
    span {
      font-size: 1.5rem;
    }
  }
`;
