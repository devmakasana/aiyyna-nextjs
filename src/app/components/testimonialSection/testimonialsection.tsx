'use client';
import React from 'react';
import { Container } from '@/app/styles/commoncontainer';
import { Main, Content, Heading, Subheading } from './styles';
import TestimonialCard from '../testimonialCard/testimonialcard';
import { TestinomialSectionContentCollectionItemsModel } from '@/app/model/homePageModel';
import { isEmpty } from '@/app/helper/helper';

export default function Testimonialsection({
  testinomialData,
  testimonialTitle
}: {
  testinomialData: TestinomialSectionContentCollectionItemsModel[];
  testimonialTitle: string;
}) {
  return (
    <div>
      <Main>
        <Container>
          <Content>
            <Heading>Testimonial</Heading>
            {!isEmpty(testimonialTitle) && <Subheading>{testimonialTitle}</Subheading>}
            {!isEmpty(testinomialData) && <TestimonialCard testinomialData={testinomialData} />}
          </Content>
        </Container>
      </Main>
    </div>
  );
}
