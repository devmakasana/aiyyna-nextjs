'use client';
import React from 'react';
import { Below, Datetitle, Description, Content } from './styles';
import Image from 'next/image';

interface props {
  imgSrc: string;
  width: number;
  height: number;
  datetitle: string;
  descriprion: string;
  href: string;
}

export default function Blogcard(props: props) {
  return (
    <>
      <Content href={props.href}>
        <Image src={props.imgSrc} alt='image' width={props.width} height={props.height} className='card-image' />
        <Below>
          <Datetitle>{props.datetitle}</Datetitle>
          <Description>{props.descriprion}</Description>
        </Below>
      </Content>
    </>
  );
}
