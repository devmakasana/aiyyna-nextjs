'use client';
import React from 'react';
import { Heading, Description } from './styles';
import { isEmpty } from '@/app/helper/helper';

export default function Requesttitle({ title, description }: { title: string; description: string }) {
  return (
    <div>
      {!isEmpty(title) && <Heading>{title}</Heading>}
      {!isEmpty(description) && <Description>{description}</Description>}
    </div>
  );
}
