import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  background-color: #0f1020;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Left = styled.div`
  display: flex;
  height: 500px;
  margin-right: 50px;
  align-items: flex-start;
`;

export const Right = styled.div`
  display: flex;
  height: 500px;
  margin-left: 50px;
`;

export const Description = styled.p`
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  text-align: left;
`;

export const Img = styled.img`
  width: 500px;
  height: 500px;
`;

export const MyName = styled.span`
  font-family: "League Spartan", sans-serif;
  font-size: 28px;
  color: #fff;
  font-weight: 700;
`;

export const AwesomeIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.color};
`;

export const Ul = styled.ul`
  list-style: none;
  gap: 1rem;
`;

export const Li = styled.li`
  gap: 1.75em;
  font-size: 1.5rem;
  line-height: 1.25;
  margin-bottom: 1rem;
`;
