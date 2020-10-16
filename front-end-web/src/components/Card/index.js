import React from 'react';
import { StyledCard } from './style.js';

const Card = ({ children, ...rest }) =>{
    return(
        <StyledCard className="card" {...rest}>
            { children }
        </ StyledCard>
    )
}

export default Card;
