/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'theme-ui';

const SocialMediaIcon = ({Icon, href}) => {
    return (
        <Link pr={1} sx={{color: 'darken'}} href={href}>
            <Icon sx={{width: 'social', height: 'social'}}/>
        </Link>
    );
}

export default SocialMediaIcon;