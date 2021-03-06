import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${props => props.theme.color.secondary};
  position: fixed;
  width: 100%;
  height: 75px;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const Logo = styled.img`
  src: url(${props => props.src});
  height: 100%;
  align: left;
  padding-left: 5%;   
`;