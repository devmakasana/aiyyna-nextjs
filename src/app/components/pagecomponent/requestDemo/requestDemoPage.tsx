import React from 'react';
import RequestHero from '../../requestHero/requestHero';
import Requestfeature from '../../requestFeature/requestfeature';
import FooterCTA from '../../footerCta/footercta';
import Footer from '../../footer/footer';
import { BookDemoModel } from '@/app/model/bookDemoModel';

export default function Requestdemopage({ details }: {details: BookDemoModel}) {
  return (
    <div>
      <RequestHero details={details}/>
      <Requestfeature details={details}/>
    </div>
  );
}
