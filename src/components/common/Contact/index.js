import React from 'react';
import { ListWrapper , Logo, Detail, SocialMedia} from './style';

const Contact = () => {
    return (
        <ListWrapper> 
            <Logo/> 
                <ul>
                    <Detail>veronica@vcartista.com</Detail>
                    <Detail>(+39) 338 376 6799</Detail>
                    <SocialMedia/>
                </ul>
        </ListWrapper>
        
    );
}

export default Contact;