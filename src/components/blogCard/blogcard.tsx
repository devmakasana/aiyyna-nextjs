'use client';
import React from 'react';
import { Main, Below, Datetitle, Description, Content } from './styles';
import Image from 'next/image';

interface props {
  imgSrc: string;
  height: number;
  width: number;
  className: string;
  datetitle: string;
  description: string;
}

export default function Blogcard(props: props) {
  return (
    <>
      <Main>
        <Content>
          <Image src={props.imgSrc} alt='image' width={props.width} height={props.height} className={props.className} />
          <Below>
            <Datetitle>{props.datetitle}</Datetitle>
            <Description>{props.description}</Description>
          </Below>
        </Content>
      </Main>
    </>
  );
}
