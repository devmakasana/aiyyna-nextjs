import React from 'react';
import { Group, Hero, Title } from '@/app/styles/blogpage';
import FooterCTA from '@/app/components/footerCta/footercta';
import Footer from '@/app/components/footer/footer';
import Header from '../../header/header';
import Mainblogcard from '../../mainBlogCard/mainblogcard';
import Blogallcard from '../../blogAll/blogallcard';
export default function Blogpage() {
  return (
    <Group>
      <Hero>
        <Header />
        <Title>Blog</Title>
      </Hero>
      <Mainblogcard
        imgSrc={'/images/mainblog.png'}
        width={623}
        height={415}
        datetitle={'09 Feb, 2022'}
        heading={'The 5 Core Values of a Strong Workplace'}
        description={
          'Lorem ipsum dolor sit amet consectetur. Leo blandit integer cursus quis mus in lectus. Integer nunc ultricies enim cursus. Vel aliquet senectus arcu sit non nunc porttitor volutpat. Nunc in dignissim nascetur proin.s'
        }
      />
      <Blogallcard />
      {/* <FooterCTA
        description={'Drop us a line or two, we are open for creative minds and collaborations!'}
        title={'Contact Us'}
      /> */}
      <Footer />
    </Group>
  );
}
