import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Termsandconditions } from '@/app/sampleData/workdata';
import { Container } from '@/app/styles/commoncontainer';
import { Maindiv } from './styles';
export default function Termsandconditionsdata() {
  return (
    <>
      <Container>
        <Maindiv>{documentToReactComponents(Termsandconditions)}</Maindiv>
      </Container>
    </>
  );
}
