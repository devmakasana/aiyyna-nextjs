'use client';
import { Container } from '@/app/styles/commoncontainer';
import React from 'react';
import { Content, Left, Right, Main } from './styles';
import Contactleft from '../contactLeft/contactleft';
import Contactform from '../contactForm/contactform';
import { ContactPageModel } from '@/app/model/contactModel';

export default function Contactsection({details}: {details: ContactPageModel}) {
  return (
    <div>
      <Main>
        <Container>
          <Content>
            <Left>
              <Contactleft details={details}/>
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
