'use client';
import { Container } from '@/app/styles/commoncontainer';
import React from 'react';
import { Content, Left, Right, Main } from './styles';
import Contactleft from '../contactLeft/contactleft';
import Contactform from '../contactForm/contactform';
import Contactsuccess from '../contactSuccess/contactsuccess';

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

              {/* contact success  */}

              {/* <Contactsuccess /> */}
            </Right>
          </Content>
        </Container>
      </Main>
    </div>
  );
}
