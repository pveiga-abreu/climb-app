import React from 'react';
import footerImage from '../../images/footer.svg';
import { StyledFooter } from './style.js';

const Footer = () => {
    return(
        <StyledFooter>
            <img src={ footerImage }></img>
            <div className="container">
                <div>
                    Climb with Intelligence
                </div>
                <div>
                    Bloco2
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer;
