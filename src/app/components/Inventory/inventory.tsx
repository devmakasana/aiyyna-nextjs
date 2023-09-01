'use client';
import React from 'react';
import { Description, Leftdiv, Maindiv, Points, Rightdiv, Title } from './styles';
import { Container } from '@/app/styles/commoncontainer';
import Image from 'next/image';

export default function Inventory() {
  return (
    <Container>
      <Maindiv>
        <Leftdiv>
          <Title>Inventory</Title>
          <Points>
            <Description>
              <span>1.</span> If you were just charged for your next month of Aiyyna, but you meant to cancel, we’re
              happy to refund that extra charge.
            </Description>
            <Description>
              <span>2.</span> If you forgot to cancel Aiyyna a couple months ago, and you haven’t used Aiyyna since
              then, we’ll give you a full refund for a few back months. No problem.
            </Description>
            <Description>
              <span>3.</span> If you tried Aiyyna for a couple months, and you just weren’t happy with it, you can have
              your money back.
            </Description>
          </Points>
        </Leftdiv>
        <Rightdiv>
          <Image
            src={'/images/Inventoryimg.svg'}
            alt='Inventoryimg'
            width={623}
            height={374}
            className='inventoryimage'
          />
        </Rightdiv>
      </Maindiv>
    </Container>
  );
}
