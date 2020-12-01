import React from 'react'

import { StyledContainer } from './styles'

const CardContainer = ({ children , id}) => (
  <StyledContainer className="cardContainer" id={id}>
    {children}
  </StyledContainer>
)

export default CardContainer
