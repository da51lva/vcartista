/** @jsx jsx */
import { jsx , Container, Flex } from 'theme-ui'
import NavLinks from '@molecules/NavLinks'
import Logo from '@static/logo.svg'

const Nav = () => {
  return (
    <Container sx={sxContainer} as='nav'>
      <Flex sx={sxFlex}>
        <Logo sx={{height: '80%'}}/>
        <NavLinks />
      </Flex>
    </Container>
  )
}

const sxContainer = {
  position: 'fixed',
  zIndex: 1000,
  height: 80,
  px: 4,
}

const sxFlex = {
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
}

export default Nav

