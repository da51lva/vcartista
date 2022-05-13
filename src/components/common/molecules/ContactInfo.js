import React from 'react';
import { Box, Themed, Text } from 'theme-ui';

const ContactInfo = (props) => {
    return (
        <Box {...props}> 
            <Themed.ul>
                <Text as='li'>veronica@vcartista.com</Text>
                <Text as='li'>(+39) 338 376 6799</Text>
            </Themed.ul>
        </Box>
    );
}

export default ContactInfo;

