import styled from "styled-components";
import { StaticImage } from 'gatsby-plugin-image';
import { Button } from '@common/Button';


export const Container = styled.div`
    width: 100%;
`;

export const BGImage = styled(StaticImage)`
`;

export const Tagline = styled.div`
    width: 60%;
    position: absolute;
    top: 20%;
    padding: 0 1em;
    text-align: center;
`;

export const ShopButton = styled(Button)`
    ${props => props.theme.font_size.regular};
`;
