import React from 'react';
import Header from '../header/header';
import { Main, Content } from './styles';
import Requestdemo from '../requestDemo/requestdemo';
import Herofooter from '../herosection/herofooter/herofooter';
import { isEmpty } from '@/app/helper/helper';
import { BookDemoModel } from '@/app/model/bookDemoModel';

export default function RequestHero({ details }: { details: BookDemoModel }) {
  return (
    <div>
      <div className='request-main'>
        {/* <Content> */}
        <Header />
        <Requestdemo details={details} />
        {!isEmpty(details?.companySectionTitle) && !isEmpty(details?.compnySectionCollection?.items) && (
          <Herofooter
            companyTitle={details?.companySectionTitle}
            companyLogos={details?.compnySectionCollection?.items}
          />
        )}
        {/* </Content> */}
      </div>
    </div>
  );
}
