import React from 'react';
import { Box, Styled, Text } from 'theme-ui';

const ContactInfo = () => {
    return (
        <Box> 
            <Styled.ul>
                <Text as='li'>veronica@vcartista.com</Text>
                <Text as='li'>(+39) 338 376 6799</Text>
            </Styled.ul>
        </Box>
    );
}

export default ContactInfo;

