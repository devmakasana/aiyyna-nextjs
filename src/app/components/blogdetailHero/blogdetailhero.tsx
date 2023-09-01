'use client';
import React from 'react';
import Image from 'next/image';
import { Description, Heading, Mainimage, Title } from './styles';
import { Container } from '@/app/styles/commoncontainer';

export default function Blogdetailhero() {
  return (
    <Container>
      <Heading>
        <Title>09 Feb, 2022</Title>
        <Description>A Beginner's Guide To Creating A Solid Foundation For Your Sales Operations</Description>
      </Heading>
      <Mainimage>
        <Image src={'/images/blogdetail.svg'} alt={'blogdetail'} width={980} height={653} className='blogimage' />
      </Mainimage>
    </Container>
  );
}
