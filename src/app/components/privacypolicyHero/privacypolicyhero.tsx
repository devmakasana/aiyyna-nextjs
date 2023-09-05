'use client';
import React from 'react';
import { Heading, Title } from './styles';

export default function Privacypolicyhero({ title }: { title: string }) {
  return (
    <div>
      <Heading>
        <Title>{title}</Title>
      </Heading>
    </div>
  );
}
