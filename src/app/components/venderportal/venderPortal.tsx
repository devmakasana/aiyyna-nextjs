'use client';
import React from 'react';
import { Description, Leftdiv, Maindiv, Rightdiv, Title } from './styles';
import { Container } from '@/app/styles/commoncontainer';
import Image from 'next/image';
import { ServiceSectionContentCollectionItemsModel } from '@/app/model/featuresModel';
import { isEmpty } from '@/app/helper/helper';

export default function Venderportal({ itemDetails }: { itemDetails: ServiceSectionContentCollectionItemsModel }) {
  return (
    <Container>
      <Maindiv>
        {!isEmpty(itemDetails?.banner?.url) && (
          <Leftdiv>
            <Image src={itemDetails?.banner?.url} alt='Venderportal' width={623} height={374} className='portalimage' />
          </Leftdiv>
        )}
        <Rightdiv>
          {!isEmpty(itemDetails?.title) && <Title>{itemDetails?.title}</Title>}
          {!isEmpty(itemDetails?.description) && <Description>{itemDetails?.description}</Description>}
          {/* <Description>
            Bad refund policies are infuriating. You feel like the company is just trying to rip you off. We never want
            our customers to feel that way, so our refund policy is simple: If you’re ever unhappy with Aiyyna, for any
            reason, just contact our support team and we’ll take care of you{' '}
          </Description> */}
        </Rightdiv>
      </Maindiv>
    </Container>
  );
}
