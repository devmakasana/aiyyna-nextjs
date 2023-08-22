import React from 'react';
import { Content, Form, Label, Main, First, Second, Third, Textarea } from './styles';
import Input from '../input/input';
import { Container } from '@/app/styles/commoncontainer';
import Button from '../button/button';

export default function Contactform() {
  return (
    <div>
      <Main>
        <Container>
          <Content>
            <Form>
              <First>
                <Label>
                  Name <span>*</span>
                </Label>
                <Input placeholder={'Enter your name'} type={'text'} />
              </First>
              <Second>
                <Label>
                  Email Address <span>*</span>
                </Label>
                <Input placeholder={'Enter your email address'} type={'text'} />
              </Second>
              <Third>
                <Label>How can we help you?</Label>
                <Textarea placeholder={'How can we help you?'}></Textarea>
              </Third>
              <Button title='Send Message' width={165} />
            </Form>
          </Content>
        </Container>
      </Main>
    </div>
  );
}
