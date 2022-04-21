import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  color: ${({theme}) => theme.colors.mainColor};
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 2;
`;

export const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.a`
  font-size: 40px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
`;
export const Right = styled.div``;
export const Left = styled.div``;