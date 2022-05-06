import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.nav`
  background-color: #0f1020;
  height: 80px;
  width: 100%;
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
  transition: 0.5s ease-out;

  &:hover {
    background: linear-gradient(to right, #cc2e5d, #ff5858 50%, #ccc 50%);
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-position: -200%;
  }

  @media screen and (max-width: 414px) {
    font-size: 1.5rem;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1000px) {
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

  &.active {
    color: #fff;
  }
`;

export const Bars = styled(FontAwesomeIcon)`
  color: ${(props) => props.color};
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: ${(props) => props.menuopen ? '3rem' : '2rem'};
    cursor: pointer;
  }

  @media screen and (max-width: 414px) {
    font-size: 1.8rem;
  }
`;

export const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #00b6e6;
`;

export const MenuBars = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  position: absolute;
  opacity: 0.9;
  right: 0;
  transition: all 0.5s ease;
  z-index: -1;
  background: #343549;
  align-items: center;
  border-radius: 2rem 0 0 2rem;

  &.active {
    transition: all 0.5s ease;
  }

  @media screen and (min-width: 1000px) {
    display: none;
  }

  @media screen and (max-width: 414px) {
    width: 40%;
  }
`;

export const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding-top: 4rem;
`;

export const MenuItem = styled.li`
  height: 80px;

  @media screen and (max-width: 414px) {
    height: 50px;
  }
`;

export const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.5rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;

  &:hover {
    font-weight: 600;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 414px) {
    font-size: 1rem;
  }
`;
