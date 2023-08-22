import { Container } from '@/app/styles/commoncontainer';
import React from 'react';
import { Content, Left, Right, Main } from './styles';
import Contactleft from '../contactLeft/contactleft';
import Contactform from '../contactForm/contactform';

export default function Contactsection() {
  return (
    <div>
      <Main>
        <Container>
          <Content>
            <Left>
              <Contactleft />
            </Left>
            <Right>
              <Contactform />
            </Right>
          </Content>
        </Container>
      </Main>
    </div>
  );
}
