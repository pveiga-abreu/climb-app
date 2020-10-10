import React from 'react';
import logo from '../../assets/logo.svg';
import { StyledHeader } from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWallet, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(
        <StyledHeader>
            <div className="logo">
                <img src={ logo } />
            </div>
            <span></span>
            <div className="nav">
                <a href="/home"><FontAwesomeIcon icon={ faHome } size="2x" className="icon" /></a>
                <a href="/wallet"><FontAwesomeIcon icon={ faWallet } size="2x" className="icon" /></a>
                <a href="/profile"><FontAwesomeIcon icon={ faUser } size="2x" className="icon" /></a>
            </div>
        </StyledHeader>
    )
}

export default Header;
