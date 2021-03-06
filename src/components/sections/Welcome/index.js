import React from 'react'
import { Themed } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { Container, Tagline, ShopButton } from './style'

const Welcome = () => {
  return (
    <Container>
      <StaticImage
        src='../../../assets/images/welcome-bg.jpg'
        placeholder='blurred'
        loading='eager'
        style={{ display: 'block' }}
        alt=''
      />
      <Tagline>
        <Themed.h1> Your most loved memories <br /> become art </Themed.h1>
        <br />
        <br />
      </Tagline>
    </Container>
  )
}

export default Welcome
