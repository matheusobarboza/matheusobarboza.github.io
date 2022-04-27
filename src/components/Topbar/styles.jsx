import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

// global ${({ theme }) => theme.colors.mainColor}
//background 0F1020
//background second option 212121
//font primary BFBDC1
//font second 818796
//verde 59e3c5
// #ccc, #ff5858, #cc2e5d

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #0F1020;
  position: fixed;
  top: 0;
  z-index: 2;
`;

export const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Logo = styled(Link)`
  font-family: "League Spartan", sans-serif;
  font-size: 40px;
  font-weight: 700;
  text-decoration: none;
  background: linear-gradient(to right, #ccc 50%, #ff5858 50%, #cc2e5d);
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 0.5s ease-out;

  &:hover {
    /* color: #59e3c5; */
    background-position: -100%;
  }
`;
export const Right = styled.div``;

export const Left = styled.div`
  display: flex;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 50px;
`;

export const LinkMenu = styled(NavLink)`
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  color: #BFBDC1;
  letter-spacing: 1.5px;
  padding: 15px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 250ms;

  &:hover { //quando o mouse passar por cima
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
    transform: translateY(-10px);
  }

  &[class*="active"] { //quando o link estiver ativo
    color: #fff;
    font-weight: bold;
  }
`;
