import styled from "styled-components";

export const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledLink = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.regular};
  margin: 0 1.5em 0 0;

  text-decoration: none;
  color: ${props => props.theme.color.black.regular};
`;

