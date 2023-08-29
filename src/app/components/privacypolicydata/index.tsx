'use client';
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { privacypolicydata } from '@/app/sampleData/workdata';
import { Container } from '@/app/styles/commoncontainer';
import { Maindiv } from './styles';
export default function Privacypolicydata() {
  return (
    <>
      <Container>
        <Maindiv>{documentToReactComponents(privacypolicydata)}</Maindiv>
      </Container>
    </>
  );
}
