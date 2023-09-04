'use client';
import React from 'react';
import { Description, Leftdiv, Maindiv, Points, Rightdiv, Title } from './styles';
import { Container } from '@/app/styles/commoncontainer';
import Image from 'next/image';
import { ServiceSectionContentCollectionItemsModel } from '@/app/model/featuresModel';
import { isEmpty } from '@/app/helper/helper';

export default function Inventory({ itemDetails }: { itemDetails: ServiceSectionContentCollectionItemsModel }) {
  return (
    <Container>
      <Maindiv>
        <Leftdiv>
          {!isEmpty(itemDetails?.title) && <Title>{itemDetails?.title}</Title>}
          <Points>
            {!isEmpty(itemDetails?.description) && <Description>{itemDetails?.description}</Description>}
            {/* <Description>
              <span>2.</span> If you forgot to cancel Aiyyna a couple months ago, and you haven’t used Aiyyna since
              then, we’ll give you a full refund for a few back months. No problem.
            </Description>
            <Description>
              <span>3.</span> If you tried Aiyyna for a couple months, and you just weren’t happy with it, you can have
              your money back.
            </Description> */}
          </Points>
        </Leftdiv>
        {!isEmpty(itemDetails?.banner?.url) && (
          <Rightdiv>
            <Image
              src={itemDetails?.banner?.url}
              alt='Inventoryimg'
              width={623}
              height={374}
              className='inventoryimage'
            />
          </Rightdiv>
        )}
      </Maindiv>
    </Container>
  );
}
