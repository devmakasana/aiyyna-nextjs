import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { AgreementData } from '@/app/sampleData/workdata';
import { Container } from '@/app/styles/commoncontainer';
import { Maindiv } from './styles';

export default function Agreement({ blogDesription }: { blogDesription: string }) {
  return (
    <>
      <Container>
        <Maindiv>{blogDesription}</Maindiv>
      </Container>
    </>
  );
}
