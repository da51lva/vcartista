import React from 'react';
import Contact from '@common/Contact/index';
import { Wrapper , Flex, ListWrapper, FooterList } from './style';
import columns from './columns.json';

const Footer = () => {
    return (
        <Wrapper>
            <Flex>
                {columns.map(column => (
                    <FooterColumn column={column}/>
                ))}
                <Contact/>
            </Flex>
            <span>© All rights are reserved</span>  
        </Wrapper>
    );
}

const FooterColumn = ( {column} ) => {
    return (
        <ListWrapper>
            <h4> {column.heading} </h4>
            <FooterList>
                {column.contents.map(({name}) => (
                    <li>{name}</li>
                ))}
            </FooterList>
        </ListWrapper>
    );
}


export default Footer;