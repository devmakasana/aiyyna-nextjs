'use client';
import React from 'react';
import { Container } from '@/app/styles/commoncontainer';
import { Maindiv } from './styles';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function Privacypolicydata({ contentData }: { contentData: string }) {
  return (
    <>
      <Container>
        <Maindiv>
          <ReactMarkdown>{contentData}</ReactMarkdown>
        </Maindiv>
      </Container>
    </>
  );
}
