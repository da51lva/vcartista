import React from 'react'
import { Container, Box, Grid, Flex, Themed } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import content from '@en/summary.json'

const Summary = (props) => {
  return (
    <Container {...props} bg='background' p={5}>
      <Grid columns={[null, 1, '1fr 1fr']} gap={5}>
        <BeforeAfterImg />
        <SummaryText
          sx={{
            alignItems: 'center',
            justiftContent: 'center',
          }}
        />
      </Grid>
    </Container>
  )
}

const BeforeAfterImg = (props) => {
  return (
    <Box {...props}>
      <StaticImage alt='before' src='../../assets/images/summary-before.jpeg' />
      {/* <StaticImage
        width={300}
        height={300}
        alt='after'
        src='../../assets/images/summary-after.jpg'
      /> */}
    </Box>
  )
}

const SummaryText = (props) => {
  return (
    <Flex {...props}>
      <Box>
        <Themed.h2>{content.heading}</Themed.h2>
        <Themed.p>{content.content}</Themed.p>
      </Box>
    </Flex>
  )
}

const sxContainer = {
  textAlign: 'centre',
}

export default Summary
