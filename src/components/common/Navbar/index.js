import React from 'react';
import NavLinks  from './NavLinks/index'
import { Nav , Logo} from './style';

const NAV_ITEMS = ['Home', 'HOW-IT-WORKS', 'Portfololio', 'Contact'];

const Navbar = () => {
    return (
        <Nav>
            <Logo/>
            <NavLinks />
        </Nav>
    );
}

export default Navbar;