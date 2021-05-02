import React from 'react'
import { Box, Grid, Label, Input, Textarea, Button } from 'theme-ui'

const ContactForm = (props) => {
  return (
    <Box as='form'>
      <Grid columns={[1, 2]}>
        <FormName mbLabel={1} mbInput={3} />
        <FormEmail mbLabel={1} mbInput={3} />
      </Grid>
      <FormMessage mbLabel={1} mbInput={3} />
      <Button>Submit</Button>
    </Box>
  )
}

const FormName = (props) => {
  return (
    <Box {...props}>
      <Label htmlFor='name' mb={props.mbLabel}>
        Name
      </Label>
      <Input name='name' id='name' mb={props.mbInput} />
    </Box>
  )
}

const FormEmail = (props) => {
  return (
    <Box {...props}>
      <Label htmlFor='email' mb={props.mbLabel}>
        Email
      </Label>
      <Input type='email' name='email' id='email' mb={props.mbInput} />
    </Box>
  )
}

const FormMessage = (props) => {
  return (
    <Box {...props}>
      <Label htmlFor='message' mb={props.mbLabel}>
        Message
      </Label>
      <Textarea name='message' id='message' rows={6} mb={props.mbInput} />
    </Box>
  )
}

export default ContactForm
