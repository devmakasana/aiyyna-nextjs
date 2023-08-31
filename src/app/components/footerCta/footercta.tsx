'use client';
import { Container } from '@/app/styles/commoncontainer';
import React from 'react';
import { Main, Content, Description, MainContent } from './styles';
import Button from '../button/button';

interface props {
  CTAtitle: string;
  CTAbtntext: string;
}
export default function FooterCTA(props: props) {
  return (
    <>
      <Main>
        <MainContent>
          <Container>
            <Content>
              <Description>{props.CTAtitle}</Description>
              <Button title={props.CTAbtntext} />
            </Content>
          </Container>
        </MainContent>
      </Main>
    </>
  );
}
