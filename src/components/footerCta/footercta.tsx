'use client';
import { Container } from '@/app/styles/commoncontainer';
import React from 'react';
import { Main, Content, Description } from './styles';
import Button from '../button/button';

export default function Footercta() {
  return (
    <div>
      <Main>
        <Container>
          <Content>
            <Description>Drop us a line or two, we are open for creative minds and collaborations!</Description>
            <Button title='Contact Us' />
          </Content>
        </Container>
      </Main>
    </div>
  );
}
