import React from 'react';
import Header from '../../header/header';
import Privacypolicydata from '../../privacypolicydata/privacyPolicyData';
import Privacypolicyhero from '../../privacypolicyHero/privacypolicyhero';
import { isEmpty } from '@/app/helper/helper';

export default function Privacypolicy({ details }: { details: { content: string } }) {
  return (
    <div className='group'>
      <div className='hero'>
        <Header />
        <Privacypolicyhero />
      </div>
      {!isEmpty(details?.content) && <Privacypolicydata contentData={details?.content} />}
    </div>
  );
}
