'use client';
import React from 'react';
import Image from 'next/image';
import { Card, CardImage, CardDescription, Description, Heading, Para } from './styles';
import cardimage from '../../../public/images/cardimage.png';
interface props {
  src: string;
  description?: String;
  title: string;
}
export default function FeatureCard(props: props) {
  return (
    <>
      <Card href={''}>
        <CardImage>
          <Image src={props.src} alt='invoicing card' width={412} height={220} className='card-image' />
        </CardImage>
        <CardDescription>
          <Description>
            <Heading>{props.title}</Heading>
            <Para>{props.description}</Para>
          </Description>
        </CardDescription>
      </Card>
    </>
  );
}
