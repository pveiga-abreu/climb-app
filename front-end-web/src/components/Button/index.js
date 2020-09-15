import React from 'react';
import { StyledButton } from './style.js';

const Button = ({ children, onClick }) => {

    function Hover(b) {
        b.target.style.backgroundColor = "#6081f0";
    }
    function Leave(b) {
        b.target.style.backgroundColor = "#314ba3";
    }

    return(
        <StyledButton className="button" onClick={onClick} 
            onMouseOver={Hover} onMouseLeave={Leave}>
            { children }
        </StyledButton>
    )
}

export default Button;
