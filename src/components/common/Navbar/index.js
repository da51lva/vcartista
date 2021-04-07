import React from 'react';
import NavLinks  from '@molecules/NavLinks'
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