/** @jsx jsx */
import { jsx , Styled } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Link, Heading } from '@theme-ui/components'

const FooterList = ( {column} ) => {
    return (
        <Box>
            <Heading as='h4' sx={{textAlign: 'center',fontSize:3}}> {column.heading} </Heading>
            <Styled.ul>
                {column.contents.map(({name , to}) => (
                    <li key={name}>
                        <Link variant='footer' as={GatsbyLink} to={to}>{name}</Link>
                    </li>
                ))}
            </Styled.ul>
        </Box>
    );
}

export default FooterList;
