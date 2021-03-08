import React from 'react';
import NavLinks  from './NavLinks/index'
import { Wrapper , Logo } from './style';

const Navbar = () => {
    return (
        <Wrapper transparent>
            <Logo/>
            <NavLinks />
        </Wrapper>
    );
}

export default Navbar;