'use client';
import React from 'react';
import { Content, Icons, Maindiv, Title } from './styles';
import Image from 'next/image';
import { Container } from '@/app/styles/commoncontainer';
import { isEmpty } from '@/app/helper/helper';
import { CompanySectionContentCollectionItemsModel } from '@/app/model/homePageModel';

export default function Herofooter({
  companyLogos,
  companyTitle
}: {
  companyLogos?: CompanySectionContentCollectionItemsModel[];
  companyTitle?: string;
}) {
  return (
    <Container>
      <Content>
        <Maindiv>
          {!isEmpty(companyTitle) && <Title>{companyTitle}</Title>}
          {!isEmpty(companyLogos) && (
            <Icons>
              {companyLogos?.map((item) => {
                return <Image src={item?.logo?.url} alt='logoipsum' width={159} height={42} className='svg-forth' />;
              })}
            </Icons>
          )}
        </Maindiv>
      </Content>
    </Container>
  );
}
