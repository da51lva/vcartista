import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container , Tagline } from './style';

const Welcome = () => {
    return (
        <Container>  
            <StaticImage src="../../../assets/images/welcome-bg.jpg" placeholder="blurred" alt=""/>
            <Tagline>
                Your most loved memories become art
            </Tagline>
        </Container>
    );
}

export default Welcome;