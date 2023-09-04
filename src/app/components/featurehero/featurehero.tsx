'use client';
import React from 'react';
import { Description, Heading, Title } from './styles';
import { Container } from '@/app/styles/commoncontainer';

export default function Featurehero({ title, description }: { title: string; description: string }) {
  return (
    <Container>
      <Heading>
        {' '}
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Heading>
    </Container>
  );
}
