import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  background-color: #0f1020;
  height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
`;

export const ContainerDescription = styled.div`
  box-shadow: 20px 20px 35px -30px #897d93;
  border-radius: 20px;
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 330px;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
`;

export const MyName = styled.span`
  font-family: "League Spartan", sans-serif;
  font-size: 20px;
  color: #ccd6f6;
  font-weight: 700;
`;

export const SpanDescription = styled.p`
  font-size: 20px;
  font-family: "League Spartan", sans-serif;
  color: #717c99;
`;

export const PDescription = styled.p`
  font-size: 20px;
  font-family: "League Spartan", sans-serif;
  color: #717c99;
  word-wrap: break-word;
  text-align: left;
  line-height: 25px;
  padding: 10px;
`;

export const FavoriteThing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const WhoIm = styled.div`
  display: flex;
  padding-bottom: 30px;
  justify-content: space-between;

  span {
    font-family: "League Spartan", sans-serif;
    font-size: 30px;
    color: #fff;
    font-weight: 700;
  }
`;

export const Line = styled.span`
  width: ${props => props.width};
  height: 1px;
  background-color: #233554;
  align-self: center;
`;

export const AwesomeIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.color};
  padding-right: 10px;
`;

export const Ul = styled.ul`
  list-style: none;
  gap: 1rem;
`;

export const Li = styled.li`
  gap: 1.75em;
  font-size: 18px;
  line-height: 1.25;
  margin-bottom: 1rem;
`;

export const Next = styled(Link)`
  font-family: "League Spartan", sans-serif;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  color: #818796;
  padding: 10px;
  transition: transform 250ms;

  span{
    margin-right: 15px;
  }

  &:hover {
    color: #fff;
    font-weight: 700;
    transform: translateY(-10px);
  }
`;
