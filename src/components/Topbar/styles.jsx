import styled from "styled-components";

// global ${({ theme }) => theme.colors.mainColor}

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #212121;
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
export const Logo = styled.a`
  font-size: 35px;
  font-weight: 700;
  text-decoration: none;
  color: white;

  &:hover {
    color: #59e3c5;
  }
`;
export const Right = styled.div``;

export const Left = styled.div`
  display: flex;
`;

export const Topic = styled.span`
  font-size: 15px;
  color: #59e3c5;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 50px;
`;

export const LinkMenu = styled.a`
  font-size: 15px;
  font-weight: 500;
  color: #818796;
  letter-spacing: 1.5px;
  padding: 15px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #59e3c5;
  }
`;
