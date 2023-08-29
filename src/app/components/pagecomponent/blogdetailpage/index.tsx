'use client';
import React from 'react';
import { Description, Heading, Mainimage, Title, Points } from '@/app/styles/blogdetailpage';
import Agreement from '../../agreement';
import Header from '../../header/header';
import Image from 'next/image';
import Refund from '../../refund';

export default function BlogdetailPage() {
  return (
    <div>
      <div className='group'>
        <div className='hero'>
          <Header />
          <Heading>
            <Title>09 Feb, 2022</Title>
            <Description>A Beginner's Guide To Creating A Solid Foundation For Your Sales Operations</Description>
          </Heading>
          <Mainimage>
            <Image src={'/images/blogdetail.svg'} alt={'blogdetail'} width={980} height={653} />
          </Mainimage>
        </div>
        <Points>
          <Agreement />
          <Refund />
        </Points>
      </div>
    </div>
  );
}
