import React from 'react';
import Header from '../../header/header';
import { Group, Heading, Hero, Title } from '@/app/styles/termsandConditions';
import FooterCTA from '../../footerCta/footercta';
import Termsandconditionsdata from '../../termsandconditionsdata/termsConditionsData';
import Footer from '../../footer/footer';
import Termsconditionhero from '../../termsconditionshero/termsconditionhero';

export default function TermsandConditionsPage() {
  return (
    <div className='group'>
      <div className='termsconditionshero'>
        <Header />
        <Termsconditionhero />
      </div>
      <Termsandconditionsdata />
    </div>
  );
}
