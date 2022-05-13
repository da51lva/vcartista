/** @jsx jsx */
import { jsx , Themed } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Link, Heading } from 'theme-ui'

const FooterList = ( {column} ) => {
    return (
        <Box>
            <Heading as='h4' mb={3} sx={{textAlign: 'center',fontSize:2}}> {column.heading} </Heading>
            <Themed.ul>
                {column.contents.map(({name , to}) => (
                    <li key={name}>
                        <Link key={name} variant='footer' as={GatsbyLink} to={to}>{name}</Link>
                    </li>
                ))}
            </Themed.ul>
        </Box>
    );
}

export default FooterList;
