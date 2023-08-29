'use client';

import React from 'react';
import Header from '../../header/header';
import { Group, Heading, Hero, Title } from '@/app/styles/termsandConditions';
import FooterCTA from '../../footerCta/footercta';
import Termsandconditionsdata from '../../termsandconditionsdata';
import Footer from '../../footer/footer';

export default function TermsandConditionsPage() {
  return (
    <div className='group'>
      <div className='termsconditionshero'>
        <Header />
        <Heading>
          {' '}
          <Title>Terms & Conditions </Title>
        </Heading>
      </div>
      <Termsandconditionsdata />
      {/* <FooterCTA
        description={'Drop us a line or two, we are open for creative minds and collaborations!'}
        title={'Contact Us'}
      /> */}
      {/* <Footer /> */}
    </div>
  );
}
