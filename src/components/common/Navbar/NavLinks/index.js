import React from 'react';
import { NavLinkWrapper, StyledLink } from './style'

const NavLinks = () => {
    return (
        <NavLinkWrapper>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/'>HOW-IT-WORKS</StyledLink>
            <StyledLink to='/'>Portfolio</StyledLink>
            <StyledLink to='/'>Contact</StyledLink>
        </NavLinkWrapper>
    );
}

export default NavLinks;