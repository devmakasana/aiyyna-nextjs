import { Container } from '@/app/styles/commoncontainer';
import React from 'react';
import { Content, Heading, Description, Subcontent, Form } from './styles';
import Requestform from '../requestForm/requestform';

export default function Requestdemo() {
  return (
    <div>
      <Container>
        <Content>
          <Subcontent>
            <Heading>Request A Demo</Heading>
            <Description>
              Just answer a few simple questions so we can personalise the right experience for you.
            </Description>
          </Subcontent>
          <Form>
            <Requestform />
          </Form>
        </Content>
      </Container>
    </div>
  );
}
