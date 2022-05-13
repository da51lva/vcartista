import React from 'react';
import { Flex } from 'theme-ui';
import columns from '@en/footer/footer-links.json'
import FooterList from '@molecules/FooterList';

const FooterLinks = () => {
    return (
        <Flex sx={{justifyContent: 'space-around'}}>
            {columns.map(column => (
                <FooterList column={column}/>
            ))}
        </Flex>
    );
}

export default FooterLinks;