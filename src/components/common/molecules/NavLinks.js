import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Flex, Link } from 'theme-ui'
import LINKS from '@en/nav/nav-links.json'

const Navlinks = () => {
  return (
    <Flex sx={sxflex}>
      {LINKS.map(({ name, to }) => (
        <Link as={GatsbyLink} variant='nav' key={name} to={to}>
          {name}
        </Link>
      ))}
    </Flex>
  )
}

const sxflex = {
  justifyContent: 'space-around',
  '& > a': {
    marginRight: 3,
  },
  'a:last-child': {
    margin: 0,
  },
}

export default Navlinks
