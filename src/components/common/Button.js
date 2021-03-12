import styled from "styled-components";

export const Button = styled.button`
    background: ${props => props.theme.color.black.regular};
    color: ${props => props.theme.color.white.regular};
    border: 2px solid ${props => props.theme.color.black.regular};
    border-radius: 7px;
    padding: 0.4em 1.5em;
    text-decoration: none;
`;