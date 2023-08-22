import React from 'react';
import Image from 'next/image';
import { Sliderbox, Logo, Description, Title, Heading, Subheading, Main, Line, Content } from './styles';

interface props {
  imageSrc: any;
  description: string;
  title: string;
  heading: string;
  subheading: string;
}
export default function SliderCard(props: props) {
  return (
    <Main>
      <>
        <Content>
          <Sliderbox>
            <Logo>
              <Image src={props.imageSrc} alt='profile-image' width={60} height={60} />
            </Logo>
            <Description>{props.description}</Description>
            <Title>{props.title}</Title>
            <Heading>{props.heading}</Heading>
            <Subheading>{props.subheading}</Subheading>
          </Sliderbox>
        </Content>
        <Line></Line>
      </>
    </Main>
  );
}
