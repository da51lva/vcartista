import styled from "styled-components";
import { StaticImage } from 'gatsby-plugin-image';


export const Container = styled.div`
    position: absolute;  
    top: 0;
    width: 100%;
`;

export const BGImage = styled(StaticImage)`
`;

export const Tagline = styled.div`
    width: 60%;
    position: absolute;
    top: 33%;
    padding: 0 1em;
    text-align: center;
    
`;
