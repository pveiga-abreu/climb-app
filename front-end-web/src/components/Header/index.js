import React from 'react';
import logo from '../../assets/logo.svg';
import { StyledHeader } from './style.js';
import home from '../../assets/home.svg';
import wallet from '../../assets/wallet.svg';
import profile from '../../assets/profile.svg';

const Header = () => {
    return(
        <StyledHeader>
            <div className="logo">
                <img src={ logo } />
            </div>
            <span></span>
            <div className="nav">
                <a href="/home"><img src={ home } className="icon" /></a>
                <a href="/wallet"><img src={ wallet } className="icon" /></a>
                <a href="/profile"><img src={ profile } className="icon" /></a>
            </div>
        </StyledHeader>
    )
}

export default Header;
