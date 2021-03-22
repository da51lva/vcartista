import React from 'react';
import {Flex , Container , Grid, Image} from 'theme-ui'
import FooterLinks from '@molecules/FooterLinks'
import ContactInfo from '@molecules/ContactInfo';


const Footer = () => {
    return (
        <Container p={4} bg='primary' as='footer'>
            <Grid columns={[1, '2fr 1fr']}>
                <FooterLinks/>
                <Flex sx={{flexDirection: 'column', alignItems: 'center'}}>
                    <Image src={'logo-full.svg'} variant='logo'/>
                    <ContactInfo/>
                </Flex>
            </Grid>
            <span>© All rights are reserved</span>  
        </Container>
    );
}


export default Footer;