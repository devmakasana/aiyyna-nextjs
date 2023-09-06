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
