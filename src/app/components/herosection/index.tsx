import React from 'react';
import { Description, Images, Leftcontent, Maindiv, Rightcontent, Title, Top } from './styles';
import Button from '../button/button';
import Image from 'next/image';
import { Container } from '@/app/styles/commoncontainer';
import Herofooter from './herofooter';

export default function Herosection() {
  return (
    <>
      <Container>
        <Maindiv>
          <Leftcontent>
            <Top>
              <Title>Digital Infrastructure for Textile Business</Title>
              <Description>
                Aiyyna ERP is a software solution that is specifically designed to cater to the unique needs of the
                textile industry.
              </Description>
            </Top>
            <Button title='Book A Demo' width={156} />
          </Leftcontent>
          <Rightcontent>
            <Images>
              <Image src={'/images/heroimage.svg'} alt='heroimage' width={900} height={586} className='heroimage' />
            </Images>
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
              <Image src={'/images/purplehape.png'} alt='heroimage' width={367} height={267} className='image' />
            </div>
          </Rightcontent>
        </Maindiv>
      </Container>
      <Herofooter />
    </>
  );
}
