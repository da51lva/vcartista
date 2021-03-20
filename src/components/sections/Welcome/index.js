import React from 'react';
import { Styled } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";
import { Container , Tagline, ShopButton } from './style';
import { StyledLink } from '../../common/Navbar/NavLinks/style';

const Welcome = () => {
    return (
        <Container>  
            <StaticImage src="../../../assets/images/welcome-bg.jpg" placeholder="blurred"  style={{ display:"block"}} alt=""/>
            <Tagline>
                <Styled.h1> Your most loved memories become art </Styled.h1>
                <br/><br/>
                <ShopButton as={Link} to='/'> My Shop </ShopButton>
            </Tagline>
        </Container>
    );
}

export default Welcome;