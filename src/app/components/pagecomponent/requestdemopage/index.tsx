import React from 'react';
import RequestHero from '../../requestHero/requestHero';
import Requestfeature from '../../requestFeature/requestfeature';
import FooterCTA from '../../footerCta/footercta';
import Footer from '../../footer/footer';

export default function Requestdemopage() {
  return (
    <div>
      <RequestHero />
      <Requestfeature />
      <FooterCTA
        description={'Drop us a line or two, we are open for creative minds and collaborations!'}
        title={'Contact Us'}
      />
      <Footer />
    </div>
  );
}
