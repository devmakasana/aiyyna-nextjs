'use client';

import React from 'react';
import { Description, Images, Leftcontent, Maindiv, Rightcontent, Title, Top } from './styles';
import Button from '../button/button';
import Image from 'next/image';
import { Container } from '@/app/styles/commoncontainer';
import Herofooter from './herofooter/herofooter';
import { isEmpty } from '@/app/helper/helper';
import { HomePageDetail } from '@/app/model/homePageModel';

export default function Herosection({ details }: { details: HomePageDetail }) {
  return (
    <>
      <Container>
        <Maindiv>
          <Leftcontent>
            <Top>
              {!isEmpty(details?.title) && <Title>{details?.title}</Title>}
              {!isEmpty(details?.description) && <Description>{details?.description}</Description>}
            </Top>
            <Button title='Book A Demo' width={156} />
          </Leftcontent>
          <Rightcontent>
            {!isEmpty(details?.banner?.url) && (
              <Images>
                <Image src={details?.banner?.url} alt='heroimage' width={900} height={586} className='heroimage' />
              </Images>
            )}
            <div className='image circle'>
              <Image src={'/images/blueshape.png'} alt='heroimage' width={367} height={378} className='image' />
            </div>
            <div className='image ellipse'>
              <Image src={'/images/pinkshape.png'} alt='heroimage' width={593} height={353} className='image' />
            </div>
            <div className='image white'>
              <Image src={'/images/whiteshape.png'} alt='heroimage' width={375} height={755} className='image' />
            </div>
            <div className='image round'>
              <Image src={'/images/purpleshape.png'} alt='heroimage' width={367} height={267} className='image' />
            </div>
          </Rightcontent>
        </Maindiv>
      </Container>
      {!isEmpty(details?.companySectionContentCollection?.items) && !isEmpty(details?.companySectionTitle) && (
        <Herofooter
          companyLogos={details?.companySectionContentCollection?.items}
          companyTitle={details?.companySectionTitle}
        />
      )}
    </>
  );
}
