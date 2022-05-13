
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ListWrapper , Logo, Detail, SocialMedia} from './style';

const Contact = ({props, children}) => {
    return (
        <ul sx={{listStyle: 'none',padding: 0,textAlign: 'center'}}>
            {children}
        </ul>
    );
}

export default Contact;