import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container , Tagline } from './style';

const Welcome = () => {
    return (
        <Container>  
            <StaticImage src="../../../assets/images/welcome-bg.jpg" placeholder="blurred" alt=""/>
            <Tagline>
                <h1>Your most loved memories become art</h1>
            </Tagline>
        </Container>
    );
}

export default Welcome;