'use client';
import React from 'react';
import { Container } from '@/app/styles/commoncontainer';
import { Bottomcontent, Content, Subtitle, Title, Topcontent } from './styles';
import FeatureCard from '../featureCard/featurecard';
import { FeatureSectionContentCollectionItemsModel } from '@/app/model/homePageModel';
import { isEmpty } from '@/app/helper/helper';

export default function Features({
  featuresData,
  featuresTitle
}: {
  featuresData?: FeatureSectionContentCollectionItemsModel[];
  featuresTitle?: string;
}) {
  return (
    <Container>
      <Content>
        <Topcontent>
          <Title>Features</Title>
          {!isEmpty(featuresTitle) && <Subtitle>{featuresTitle}</Subtitle>}
        </Topcontent>
        {!isEmpty(featuresData) && (
          <Bottomcontent>
            {featuresData?.map((item, index: number) => {
              return <FeatureCard key={index} src={item?.banner?.url} title={item?.title} description={item?.description} slug={item?.slug}/>;
            })}
          </Bottomcontent>
        )}
      </Content>
    </Container>
  );
}
