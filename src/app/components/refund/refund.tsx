'use client';
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container } from '@/app/styles/commoncontainer';
import { Maindiv } from './styles';

export default function Refund({refundPolicyData}: {refundPolicyData?: any}) {
  return (
    <>
      <Container>
        <Maindiv>{documentToReactComponents(refundPolicyData)}</Maindiv>
      </Container>
    </>
  );
}
