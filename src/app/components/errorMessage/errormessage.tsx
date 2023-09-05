'use client';
import React from 'react';
import { Bottom, Description, Heading, Maindiv, Title } from './styles';
import Image from 'next/image';
import errorimage from '../../../../public/images/errorimage.png';
import Button from '../button/button';
export default function Errormessage() {
  return (
    <Maindiv>
      <Image src={errorimage} alt='errorimage' width={540} height={422} />
      <Bottom>
        <Heading>
          <Title>Whoops!</Title>
          <Description>We can’t seem to find the page thatyou’re looking for</Description>
        </Heading>
        <Button title='Back to home' href='/' />
      </Bottom>
    </Maindiv>
  );
}
