import React from 'react'
import { Container, Content } from './style'


const Table = ({ children }) => {
  return (
    <Container className='table'>
      <Content>
        {children}
      </Content>
    </Container>

  )
}

export default Table
