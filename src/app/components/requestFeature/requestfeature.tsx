import React from 'react';
import { Main, Below } from './styles';
import Features from '../Features';
import Button from '../button/button';
import { Container } from '@/app/styles/commoncontainer';

export default function Requestfeature() {
  return (
    <div>
      <Main>
        <Features />
        <Container>
          <Below>
            <Button title='View All Features' width={184} />
          </Below>
        </Container>
      </Main>
    </div>
  );
}
