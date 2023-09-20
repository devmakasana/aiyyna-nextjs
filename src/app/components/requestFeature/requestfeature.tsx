'use client';
import React from 'react';
import { Main, Below } from './styles';
import Features from '../Features/features';
import Button from '../button/button';
import { Container } from '@/app/styles/commoncontainer';
import { isEmpty } from '@/app/helper/helper';
import { BookDemoModel } from '@/app/model/bookDemoModel';

export default function Requestfeature({ details }: { details: BookDemoModel }) {
  return (
    <div>
      <Main>
        {!isEmpty(details?.featureSectionTitle) && !isEmpty(details?.featureSectionContentCollection?.items) && (
          <Features
            featuresTitle={details?.featureSectionTitle}
            featuresData={details?.featureSectionContentCollection?.items}
          />
        )}
        <Container>
          <Below>
            <Button title='View All Features' width={184} href='/#features'/>
          </Below>
        </Container>
      </Main>
    </div>
  );
}
