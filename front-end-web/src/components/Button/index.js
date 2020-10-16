import React from 'react';
import { StyledButton } from './style.js';

const Button = ({ children, onClick }) => {

    function Hover(self) {
        self.target.style.backgroundColor = "#a38431";
    }
    function Leave(self) {
        self.target.style.backgroundColor = "#314ba3";
    }

    return(
        <StyledButton className="button" onClick={onClick} 
            onMouseOver={Hover} onMouseLeave={Leave}>
            { children }
        </StyledButton>
    )
}

export default Button;
