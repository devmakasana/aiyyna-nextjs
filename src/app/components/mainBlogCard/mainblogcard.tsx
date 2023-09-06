'use client';
import React from 'react';
import Image from 'next/image';
import { Main, Content, Left, Right, Datetiltle, Heading, Description } from './styles';
import { Container } from '@/app/styles/commoncontainer';
import Button from '../button/button';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


interface props {
  imgSrc: string;
  width: number;
  height: number;
  datetitle: string | null;
  heading: string;
  description: string;
  slug: string
}

export default function Mainblogcard(props: props) {
  return (
    <div>
      <Main>
        <Container>
          <Content>
            <Left>
              <Image src={props.imgSrc} alt='image' width={props.width} height={props.height} className='main-blog' />
            </Left>
            <Right>
              <Datetiltle>{props.datetitle}</Datetiltle>
              <Heading>{props.heading}</Heading>
              <Description><ReactMarkdown>{props.description}</ReactMarkdown></Description>
              <Button title='Read More' width={135} href={`/blog/${props.slug}`}/>
            </Right>
          </Content>
        </Container>
      </Main>
    </div>
  );
}
