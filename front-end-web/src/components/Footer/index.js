import React from 'react';
import footerImage from '../../assets/footer.svg';
import { StyledFooter } from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import CardContainer from '../../components/CardContainer'

const Footer = () => {
    return(
        <StyledFooter className="footer">
            <img src={ footerImage }></img>
            <CardContainer>
                <div>
                    Climb copyright ©
                </div>
                <div id="logos">
                    <FontAwesomeIcon icon={faFacebook} size="2x" cursor="pointer" />
                    <FontAwesomeIcon icon={faInstagram} size="2x"  cursor="pointer"/>
                    <FontAwesomeIcon icon={faTwitter} size="2x"  cursor="pointer" />
                </div>
            </CardContainer>

        </StyledFooter>
    )
}

export default Footer;
