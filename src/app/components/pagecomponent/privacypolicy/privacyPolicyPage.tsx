import React from 'react';
import Header from '../../header/header';
import Privacypolicydata from '../../privacypolicydata/privacyPolicyData';
import Privacypolicyhero from '../../privacypolicyHero/privacypolicyhero';
import { isEmpty } from '@/app/helper/helper';
import { PrivacyPolicyModel } from '@/app/model/privacyPolicyModel';

export default function Privacypolicy({ details }: {details: PrivacyPolicyModel}) {
  return (
    <div className='group'>
      <div className='hero'>
        <Header />
        {!isEmpty(details?.name) && <Privacypolicyhero title={details?.name} />}
      </div>
      {!isEmpty(details?.content) && <Privacypolicydata contentData={details?.content} />}
    </div>
  );
}
