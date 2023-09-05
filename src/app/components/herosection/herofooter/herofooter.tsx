'use client';
import React, { useMemo } from 'react';
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
  const renderCompanyLogos = useMemo(() => {
    if (!isEmpty(companyLogos)) {
      return companyLogos?.map((item, index: number) => {
        return (
          <Image key={index} src={item?.logo?.url} alt='logoipsum' width={159} height={42} className='svg-forth' />
        );
      });
    } else return null;
  }, [companyLogos]);

  return (
    <Container>
      <Content>
        <Maindiv>
          {!isEmpty(companyTitle) && <Title>{companyTitle}</Title>}
          {!isEmpty(companyLogos) && <Icons>{renderCompanyLogos}</Icons>}
        </Maindiv>
      </Content>
    </Container>
  );
}
