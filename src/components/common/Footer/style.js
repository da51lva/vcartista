import styled from "@emotion/styled";

export const Wrapper = styled.footer`
    width: 100%;
    padding: 2em 2em;
    background-color: ${props => props.theme.colors.background};    
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const ListWrapper = styled.div`
    text-align: center;
`;


export const FooterList = styled.ul`
    list-style: none;
    padding: 0;
`;