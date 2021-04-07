/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import SocialMediaIcon from '@atoms/SocialMediaIcon'

const SocialMedia = (props) => {
  return (
    <Box {...props}>
      <SocialMediaIcon
        Icon={FaFacebookSquare}
        href='https://www.facebook.com/vcartista.art'
      />
      <SocialMediaIcon
        Icon={FaInstagram}
        href='https://www.instagram.com/vcartista.art'
      />
    </Box>
  )
}

export default SocialMedia
