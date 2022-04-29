import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  background-color: #0f1020;
  height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  /* flex: 1; */
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
  padding: 5rem;
`;

export const ContainerDescription = styled.div`
  box-shadow: 20px 20px 35px -30px #897d93;
  border-radius: 20px;

  span {
    font-size: 20px;
    font-family: "League Spartan", sans-serif;
    color: #fff;
    text-align: left;
  }
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
`;

export const MyName = styled.span`
  font-family: "League Spartan", sans-serif;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
`;

export const WhoIm = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 30px;

  span {
    font-family: "League Spartan", sans-serif;
    font-size: 30px;
    color: #fff;
    font-weight: 700;
  }
`;

export const Line = styled.div`
  width: 300px;
  border: 1px solid #000;
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
  font-size: 18px;
  line-height: 1.25;
  margin-bottom: 1rem;
`;

export const SpanLi = styled.span`
  font-size: 20px;
  font-family: "League Spartan", sans-serif;
  color: #fff;
  margin-left: ${(props) => props.margin};
`;
