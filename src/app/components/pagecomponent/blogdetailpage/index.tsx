import React from 'react';
import { Group, Description, Heading, Hero, Mainimage, Title, Points } from '@/app/styles/blogdetailpage';
import FooterCTA from '../../footerCta/footercta';
import Footer from '../../footer/footer';
import Agreement from '../../agreement';
import Header from '../../header/header';
import Image from 'next/image';
import Refund from '../../refund';

export default function Blogdetail() {
  return (
    <div>
      {' '}
      <Group>
        <Hero>
          <Header />
          <Heading>
            {' '}
            <Title>09 Feb, 2022</Title>
            <Description>A Beginner's Guide To Creating A Solid Foundation For Your Sales Operations</Description>
          </Heading>
          <Mainimage>
            <Image src={'/images/blogdetail.svg'} alt={'blogdetail'} width={980} height={653} />
          </Mainimage>
        </Hero>
        <Points>
          <Agreement />
          <Refund />
        </Points>
        {/* <FooterCTA
          description={'Drop us a line or two, we are open for creative minds and collaborations!'}
          title={'Contact Us'}
        /> */}
        <Footer />
      </Group>
    </div>
  );
}
