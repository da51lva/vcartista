import React from 'react';
import styled from "styled-components";
import { Link } from "gatsby";

export const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledLink = styled(props => <Link {...props} />)`
  font-family: ${props => props.theme.font.primary};
  ${props => props.theme.font_size.regular};
  margin: 10px;
`;

