'use client';
import React from 'react';
import { Title } from './styles';
export default function Bloghero({title}: {title: string}) {
  return (
    <div>
      <Title>{title}</Title>
    </div>
  );
}
