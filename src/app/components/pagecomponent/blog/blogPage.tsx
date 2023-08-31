import React from 'react';
import { Group, Hero, Title } from '@/app/styles/blogpage';
import FooterCTA from '@/app/components/footerCta/footercta';
import Footer from '@/app/components/footer/footer';
import Header from '../../header/header';
import Mainblogcard from '../../mainBlogCard/mainblogcard';
import Blogallcard from '../../blogAll/blogallcard';
import Bloghero from '../../blogHero/bloghero';
import Blogbutton from '../../blogButton/blogbutton';
export default function Blogpage() {
  return (
    <div className='group'>
      <div className='hero'>
        <Header />
        {/* <Title>Blog</Title> */}
        <Bloghero />
      </div>
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
      <Blogbutton />
    </div>
  );
}
