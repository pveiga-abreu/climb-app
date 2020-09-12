import React from 'react';
import { StyledButton } from './style.js';

const Button = ({ children, onClick}) => {
    return(
        <StyledButton className="button" onClick={onClick}>
            { children }
        </StyledButton>
    )
}

export default Button;
