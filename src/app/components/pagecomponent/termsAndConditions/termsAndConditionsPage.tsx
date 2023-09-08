import React from 'react';
import Header from '../../header/header';
import Termsandconditionsdata from '../../termsandconditionsdata/termsConditionsData';
import Termsconditionhero from '../../termsconditionshero/termsconditionhero';
import { isEmpty } from '@/app/helper/helper';

export default async function TermsandConditionsPage({ details }: { details: { content: string } }) {
  return (
    <div className='group'>
      <div className='termsconditionshero'>
        <Header />
        <Termsconditionhero />
      </div>
      {!isEmpty(details?.content) && <Termsandconditionsdata contentData={details?.content} />}
    </div>
  );
}
