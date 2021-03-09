import styled from "styled-components";
import Componenet from '@static/logo.svg';

export const Wrapper = styled.nav`

  width: 100%;
  height: 6.2vw;
  position: fixed;
  z-index: 1000;
  padding-left: 5%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => (props.transparent? 'transparent' : props.theme.color.secondary)};
`;

export const Logo = styled(Componenet)`
  height: 80%;
 `;


