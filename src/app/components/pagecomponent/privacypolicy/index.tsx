import React from 'react';
import Header from '../../header/header';
import FooterCTA from '../../footerCta/footercta';
import Footer from '../../footer/footer';
import Privacypolicydata from '../../privacypolicydata';
import { Group, Heading, Hero, Title } from '@/app/styles/privacypolicy';

export default function Privacypolicy() {
  return (
    <Group>
      <Hero>
        <Header />
        <Heading>
          {' '}
          <Title>Privacy Policy</Title>
        </Heading>
      </Hero>
      <Privacypolicydata />
      <FooterCTA
        description={'Drop us a line or two, we are open for creative minds and collaborations!'}
        title={'Contact Us'}
      />
      <Footer />
    </Group>
  );
}
