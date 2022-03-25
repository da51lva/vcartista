import React from 'react'
import { Container, Themed } from 'theme-ui'
import ContactForm from '@molecules/ContactForm'

const Contact = (props) => {
  return (
    <Container {...props} px={6} py={4}>
      <Themed.h1>Get in Touch</Themed.h1>
      <Themed.p mb={5}>Send me a message yo</Themed.p>
      <ContactForm />
    </Container>
  )
}

export default Contact
