'use client';
import React from 'react';
import { Main, Content, First, Label } from './styles';
import Input from '../input/input';
import Button from '../button/button';
import { Container } from '@/app/styles/commoncontainer';

export default function Requestform() {
  return (
    <div>
      <Main>
        <Content>
          <First>
            <Label>
              Full Name <span>*</span>
            </Label>
            <Input placeholder={'Enter your full name'} type={'text'} />
          </First>
          <First>
            <Label>
              Company Name <span>*</span>
            </Label>
            <Input placeholder={'Enter your company name'} type={'text'} />
          </First>
          <First>
            <Label>
              Work Email <span>*</span>
            </Label>
            <Input placeholder={'Enter your email address'} type={'text'} />
          </First>
          <First>
            <Label>
              Phone <span>*</span>
            </Label>
            <Input placeholder={'Enter your phone number'} type={'number'} />
          </First>
          <Button title='Request Demo' width={164} />
        </Content>
      </Main>
    </div>
  );
}
