import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// global ${({ theme }) => theme.colors.mainColor}
//background 0F1020
//background second option 212121
//font primary BFBDC1
//font second 818796
//verde 59e3c5
// #ccc, #ff5858, #cc2e5d

export const Container = styled.nav`
  background-color: #0f1020;
  height: 80px;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  z-index: 10;
  top: 0;
  position: sticky;

  @media screen and (max-width: 1300px) {
    justify-content: space-between;
  }
`;

export const Logo = styled(Link)`
  font-family: "League Spartan", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  background: linear-gradient(to right, #ccc 50%, #ff5858 50%, #cc2e5d);
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: -100%;

  @media screen and (max-width: 360px) {
    font-size: 1.5rem;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1045px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  color: #bfbdc1;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &.active{
    color: #fff;
  }
`;

export const Bars = styled(FontAwesomeIcon)`
  color: ${(props) => props.color};
  display: none;

  @media screen and (max-width: 1045px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
  }

  @media screen and (max-width: 360px) {
    font-size: 1.8rem;
  }
`;
