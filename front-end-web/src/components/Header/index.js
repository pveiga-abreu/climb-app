import React from 'react';
import logo from '../../assets/logo.svg';
import { StyledHeader } from './style.js';
import home from '../../assets/home.svg';
import wallet from '../../assets/wallet.svg';
import profile from '../../assets/profile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faWallet } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return(
        <StyledHeader>
            <div className="logo">
                <img src={ logo } alt="climb" />
            </div>
            <span></span>
            <div className="nav">
                <a href="/home"> <FontAwesomeIcon icon={faHome} size="lg"/></a>
                <a href="/wallet"> <FontAwesomeIcon icon={faWallet} size="lg"/></a>
                <a href="/profile"> <FontAwesomeIcon icon={faUser} size="lg"/></a>
            </div>
        </StyledHeader>
    )
}

export default Header;
