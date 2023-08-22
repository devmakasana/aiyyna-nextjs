'use client';
import { Container } from '@/app/styles/commoncontainer';
import React from 'react';
import { Content } from './styles';
import Blogcard from '../blogCard/blogcard';

export default function Blogallcard() {
  return (
    <div>
      <Container>
        <Content>
          <Blogcard
            imgSrc={'/images/marketinglead.png'}
            width={410}
            height={275}
            datetitle={'09 Feb, 2022'}
            descriprion={'10 Proven Email Marketing Lead Generation Techniques'}
            href={''}
          />
          <Blogcard
            imgSrc={'/images/business.png'}
            width={410}
            height={275}
            datetitle={'09 Feb, 2022'}
            descriprion={'4 Questions to Ask a Consultant or Business Advisor Before Hiring Them'}
            href={''}
          />
          <Blogcard
            imgSrc={'/images/perfectwrite.png'}
            width={410}
            height={275}
            datetitle={'09 Feb, 2022'}
            descriprion={'How to write a Perfect Elevator Pitch?'}
            href={''}
          />
          <Blogcard
            imgSrc={'/images/promotional.png'}
            width={410}
            height={275}
            datetitle={'09 Feb, 2022'}
            descriprion={'5 Ways to Boost Your Business with Promotional Marketing'}
            href={''}
          />
          <Blogcard
            imgSrc={'/images/leads.png'}
            width={410}
            height={275}
            datetitle={'09 Feb, 2022'}
            descriprion={'How Do I Attract Prospects vs Leads in my Business?'}
            href={''}
          />{' '}
          <Blogcard
            imgSrc={'/images/e-commerce.png'}
            width={410}
            height={275}
            datetitle={'09 Feb, 2022'}
            descriprion={'Want to create a great value proposition in marketing? Use sales and analytics.'}
            href={''}
          />{' '}
          <Blogcard
            imgSrc={'/images/social.png'}
            width={410}
            height={275}
            datetitle={'09 Feb, 2022'}
            descriprion={'The Secret of Social Media: Drives 20% More Sales'}
            href={''}
          />{' '}
          <Blogcard
            imgSrc={'/images/perfectwrite.png'}
            width={410}
            height={275}
            datetitle={'09 Feb, 2022'}
            descriprion={'A Beginner’s Guide To Creating A Solid Foundation For Your Sales Operations'}
            href={''}
          />{' '}
          <Blogcard
            imgSrc={'/images/googlesheet.png'}
            width={410}
            height={275}
            datetitle={'09 Feb, 2022'}
            descriprion={'The Ultimate Guide To Google Sheets For The Marketers: Part 2 – Using Formulas'}
            href={''}
          />
        </Content>
      </Container>
    </div>
  );
}
