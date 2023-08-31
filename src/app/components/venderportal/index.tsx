'use client';
import React from 'react';
import { Description, Leftdiv, Maindiv, Rightdiv, Title } from './styles';
import { Container } from '@/app/styles/commoncontainer';
import Image from 'next/image';

export default function Venderportal() {
  return (
    <Container>
      <Maindiv>
        <Leftdiv>
          <Image src={'/images/Venderportal.svg'} alt='Venderportal' width={623} height={374} />
        </Leftdiv>
        <Rightdiv>
          <Title>Vender Portal</Title>
          <Description>
            Vitae sed nisi risus donec donec consequat ac. Tellus ut ut ac sit semper ut. <br></br>Ornare.
          </Description>
          <Description>
            Bad refund policies are infuriating. You feel like the company is just trying to rip you off. We never want
            our customers to feel that way, so our refund policy is simple: If you’re ever unhappy with Aiyyna, for any
            reason, just contact our support team and we’ll take care of you{' '}
          </Description>
        </Rightdiv>
      </Maindiv>
    </Container>
  );
}
