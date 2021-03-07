import React from 'react';
import { Link } from "gatsby";
import { NavLinkWrapper, StyledLink } from './style'

const NavLinks = () => {
    return (
        <NavLinkWrapper>
            <StyledLink as={Link} to='/asf'>Home</StyledLink>
            <StyledLink as={Link} to='/asdf'>About</StyledLink>
            <StyledLink as={Link} to='/'>Portfolio</StyledLink>
            <StyledLink as={Link} to='/'>Contact</StyledLink>
        </NavLinkWrapper>
    );
}

export default NavLinks;