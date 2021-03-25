/** @jsx jsx */
import { jsx} from 'theme-ui'
import {Flex , Container , Grid, Image} from 'theme-ui'
import FooterLinks from '@molecules/FooterLinks'
import ContactInfo from '@molecules/ContactInfo';
import SocialMedia from '@molecules/SocialMedia';
import styled from '@emotion/styled';


const Footer = () => {
    return (
        <Container p={4} bg='primary' as='footer'>
            <Grid columns={[1, '2fr 1fr']}>
                <FooterLinks/>
                <Flex sx={{flexDirection: 'column', alignItems: 'center', '& > *:last-child': {mt:3} }}>
                    <Image src={'logo-full.svg'} variant='logo'/>
                    <ContactInfo/>
                    <SocialMedia/>
                </Flex>
            </Grid>
            <span>© All rights are reserved</span>
        </Container>
    );
}

export default Footer;