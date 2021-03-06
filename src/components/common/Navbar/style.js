import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${props => props.theme.color.secondary};
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 75px;
  padding-left: 5%;
  padding-right: 5%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  src: url(${props => props.src});
  height: 100%;
`;


