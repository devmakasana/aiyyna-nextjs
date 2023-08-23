import React from 'react';

import Header from '../../header/header';
import { Description, Group, Heading, Hero, Title } from '@/app/styles/featuresdetailpage';
import FooterCTA from '../../footerCta/footercta';
import Footer from '../../footer/footer';
import Venderportal from '../../venderportal';
import Inventory from '../../Inventory';
import Refund from '../../refund';

export default function Featuredetailpage() {
  return (
    <div>
      <Group>
        <Hero>
          <Header />
          <Heading>
            {' '}
            <Title>Invoicing</Title>
            <Description>
              Aiyyna offers an invoicing feature that enables users to create, manage and send invoices to their
              customers seamlessly. This feature helps streamline the invoicing process, which saves time and reduces
              errors.
            </Description>
          </Heading>
        </Hero>
        <Venderportal />
        <Inventory />
        <Refund />
        <FooterCTA
          description={'Drop us a line or two, we are open for creative minds and collaborations!'}
          title={'Contact Us'}
        />
        <Footer />
      </Group>
    </div>
  );
}
