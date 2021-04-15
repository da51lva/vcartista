import styled from "@emotion/styled";
import Componenet from '@static/logo.svg';

export const Wrapper = styled.nav`

  width: 100%;
  height: 6.2vw;
  position: fixed;
  z-index: 1000;
  padding: 0 5%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => (props.transparent? 'transparent' : props.theme.colors.background)};
`;

export const Logo = styled(Componenet)`
  height: 80%;
 `;


