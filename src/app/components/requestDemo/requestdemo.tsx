'use client';
import { Container } from '@/app/styles/commoncontainer';
import React from 'react';
import { Content, Heading, Description, Subcontent, Form, Main } from './styles';
import Requestform from '../requestForm/requestform';
import Image from 'next/image';
import Requestsuccess from '../requestSuccess/requestsuccess';
import Requesttitle from '../requestTitle/requesttitle';

export default function Requestdemo() {
  return (
    <div>
      <Container>
        <Main>
          <Content>
            <Requesttitle />
            <Form>
              <Requestform />
              {/* Request demo thanku you card */}
              {/* <Requestsuccess /> */}
            </Form>
          </Content>
          <div className='image-purple'>
            <Image src={'/images/purpleoval.png'} alt='heroimage' width={546} height={401} className='image-hero' />
          </div>
          <div className='image-blue'>
            <Image src={'/images/blueoval.png'} alt='heroimage' width={367} height={378} className='image-hero' />
          </div>
          <div className='image-pink'>
            <Image src={'/images/pinkoval.png'} alt='heroimage' width={367} height={267} className='image-hero' />
          </div>
          <div className='image-white'>
            <Image src={'/images/whiteoval.png'} alt='heroimage' width={1368} height={162} className='image-hero' />
          </div>
        </Main>
      </Container>
    </div>
  );
}
