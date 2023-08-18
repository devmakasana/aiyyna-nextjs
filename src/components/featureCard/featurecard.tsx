'use client';
import React from 'react';
import Image from 'next/image';
import { Card, CardImage, CardDescription, Description, Heading, Para } from './styles';
import cardimage from '../../../public/images/cardimage.png';

export default function FeatureCard() {
  return (
    <>
      <Card href={''}>
        <CardImage>
          <Image src={cardimage} alt='invoicing card' width={412} height={220} className='card-image' />
        </CardImage>
        <CardDescription>
          <Description>
            <Heading>Invoicing</Heading>
            <Para>
              Aiyyna offers an invoicing feature that enables users to create, manage and send invoices to their
              customers seamlessly. This feature helps streamline the invoicing process, which saves time and reduces
              errors.
            </Para>
          </Description>
        </CardDescription>
      </Card>
    </>
  );
}
