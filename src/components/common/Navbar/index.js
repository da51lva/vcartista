import React from 'react';
import {Nav, Logo} from './style';
import logo from '@static/vc-initial-black.png';


const NAV_ITEMS = ['Home', 'HOW-IT-WORKS', 'Portfololio', 'Contact'];

const Navbar = () => {
    return (
    <Nav>
        <Logo src={logo}/>
    </Nav>
    //logo
    //navlist
    );
}

export default Navbar;