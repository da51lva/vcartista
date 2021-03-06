import react from "react"
import styled from "styled-components"

export const Nav = styled.nav`
  padding: 16px 0;
  background-color: ${props => props.theme.color.primary};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;