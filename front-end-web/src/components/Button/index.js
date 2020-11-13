import React from 'react';
import { StyledButton, StyledContainerButton } from './style.js';

export const Button = ({ children, onClick, ...props }) => {
    return(
        <StyledButton className="button" onClick={onClick} {...props}>
            { children }
        </StyledButton>
    )
}

export const ContainerButton = ({ children, id, ...props }) => (
    <StyledContainerButton className='buttonContainer' id={id} {...props}>{children}</StyledContainerButton>
  )

export default Button;
