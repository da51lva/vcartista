import styled from "@emotion/styled";

export const Button = styled.button`
    background: ${props => props.theme.colors.darken};
    color: ${props => props.theme.colors.highlight};
    border: 2px solid ${props => props.theme.colors.darken};
    border-radius: 7px;
    padding: 0.4em 1.5em;
    text-decoration: none;
`;