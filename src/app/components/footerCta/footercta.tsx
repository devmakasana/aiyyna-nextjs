'use client';
import { Container } from '@/app/styles/commoncontainer';
import React from 'react';
import { Main, Content, Description } from './styles';
import Button from '../button/button';

interface props {
  description: string;
  title: string;
}
export default function FooterCTA(props: props) {
  return (
    <Main>
      <Container>
        <Content>
          <Description>{props.description}</Description>
          <Button title={props.title} />
        </Content>
      </Container>
    </Main>
  );
}
