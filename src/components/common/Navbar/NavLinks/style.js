import styled from '@emotion/styled';

export const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// export const StyledLink = styled.div`
  
//     ${theme.fontSizes[0]};

// `;


// export const StyledLink = styled('div')(
//   css({
//     color: 'primary',
//   }),
//   {  
//     boxSizing: 'border-box',
//   }
//   );

export const StyledLink = styled.div`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes[2]}px;
  margin: 0 1.5em 0 0;

  text-decoration: none;
  color: ${props => props.theme.colors.darken};
`;

