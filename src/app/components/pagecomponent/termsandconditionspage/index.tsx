import React from 'react';
import Header from '../../header/header';
import { Group, Heading, Hero, Title } from '@/app/styles/termsandConditions';
import FooterCTA from '../../footerCta/footercta';
import Termsandconditionsdata from '../../termsandconditionsdata';
import Footer from '../../footer/footer';

export default function TermsandConditions() {
  return (
    <Group>
      <Hero>
        <Header />
        <Heading>
          {' '}
          <Title>Terms & Conditions </Title>
        </Heading>
      </Hero>
      <Termsandconditionsdata />
      {/* <FooterCTA
        description={'Drop us a line or two, we are open for creative minds and collaborations!'}
        title={'Contact Us'}
      /> */}
      <Footer />
    </Group>
  );
}
