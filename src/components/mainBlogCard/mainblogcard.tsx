import React from 'react';
import Image from 'next/image';
import { Main, Content, Left, Right, Datetiltle, Heading, Description } from './styles';
import { Container } from '@/app/styles/commoncontainer';
import Button from '../button/button';

interface props {
  imgSrc: string;
  width: number;
  height: number;
  datetitle: string;
  heading: string;
  description: string;
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
              <Description>{props.description}</Description>
              <Button title='Read More' width={135} />
            </Right>
          </Content>
        </Container>
      </Main>
    </div>
  );
}
