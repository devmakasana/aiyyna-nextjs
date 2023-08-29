import React from 'react';
import { Group, Hero } from '@/app/styles/contactpage';
import FooterCTA from '@/app/components/footerCta/footercta';
import Footer from '@/app/components/footer/footer';
import Header from '../../header/header';
import Contactsection from '../../contactSection/contactsection';
export default function Contactpage() {
  return (
    <Group>
      <Hero>
        <Header />
        <Contactsection />
      </Hero>
      {/* <FooterCTA description={'Let’s simplify & automate your marketing campaigns'} title={'Book A Demo'} /> */}
      <Footer />
    </Group>
  );
}
