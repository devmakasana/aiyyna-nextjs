import React from 'react';
import Header from '../../header/header';
import Privacypolicydata from '../../privacypolicydata/privacyPolicyData';
import { Group, Heading, Hero, Title } from '@/app/styles/privacypolicy';
import Privacypolicyhero from '../../privacypolicyHero/privacypolicyhero';

export default function Privacypolicy() {
  return (
    <div className='group'>
      <div className='hero'>
        <Header />
        <Privacypolicyhero />
      </div>
      <Privacypolicydata />
    </div>
  );
}
