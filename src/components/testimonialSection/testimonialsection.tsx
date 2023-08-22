'use client';
import React from 'react';
import { Container } from '@/app/styles/commoncontainer';
import { Main, Content, Heading, Subheading } from './styles';
import TestimonialCard from '../testimonialCard/testimonialcard';

export default function Testimonialsection() {
  return (
    <div>
      <Main>
        <Container>
          <Content>
            <Heading>Testimonial</Heading>
            <Subheading>3400+ Users Reviewed Aiyyna</Subheading>
            <TestimonialCard />
          </Content>
        </Container>
      </Main>
    </div>
  );
}
