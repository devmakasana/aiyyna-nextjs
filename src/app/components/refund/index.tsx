import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { RefundpolicyData } from '@/app/sampleData/workdata';
import { Container } from '@/app/styles/commoncontainer';
import { Maindiv } from './styles';
export default function Refund() {
  return (
    <>
      <Container>
        <Maindiv>{documentToReactComponents(RefundpolicyData)}</Maindiv>
      </Container>
    </>
  );
}
