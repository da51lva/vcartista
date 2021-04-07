import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Flex, Link } from 'theme-ui'
import LINKS from '@en/nav/nav-links.json'

const Navlinks = () => {
  return (
    <Flex
      sx={{
        justifyContent: 'space-around',
        '& > *': {
          marginRight: 4,
        },
      }}
    >
      {LINKS.map(({ name, to }) => (
        <Link as={GatsbyLink} variant='nav' key={name} to={to}>
          {name}
        </Link>
      ))}
    </Flex>
  )
}


export default Navlinks
