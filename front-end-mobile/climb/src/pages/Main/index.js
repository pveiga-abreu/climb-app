import React from 'react';

import logo from '~/assets/logo.png'
import {Container, Content, ContentHeader, ContentFooter, Img, Title, Button, TextButton, ExitButton} from './styles';

export default function Main() {
  return (
    <Container>

      <Content>
        <ContentHeader>
          <Img source={logo} />
          <Title style={{color: '#4F87CE'}}>Climb with</Title>
          <Title style={{color: '#112257'}}>intelligence</Title>
        </ContentHeader>
        <ContentFooter>
          <Button>
            <TextButton>
              CLIMB
            </TextButton>
          </Button>
          <ExitButton>
            <TextButton style={{fontWeight: '300'}}>
              No, thanks
            </TextButton>
          </ExitButton>

        </ContentFooter>

      </Content>

    </Container>
  )
}
