'use client';
import { Container } from '@/app/styles/commoncontainer';
import React from 'react';
import { Bottomcontent, Content, Subtitle, Title, Topcontent } from './styles';
import FeatureCard from '../featureCard/featurecard';

export default function Features() {
  return (
    <Container>
      <Content>
        <Topcontent>
          <Title>Features</Title>
          <Subtitle>Actionable analytics for your business.</Subtitle>
        </Topcontent>
        <Bottomcontent>
          <FeatureCard
            src={'/images/cardimage.png'}
            title='Invoicing'
            description={
              'Aiyyna offers an invoicing feature that enables users to create, manage and send invoices to their customers seamlessly. This feature helps streamline the invoicing process, which saves time and reduces errors.'
            }
          />
          <FeatureCard
            src={'/images/cardimage.png'}
            title='Invoicing'
            description={
              'Aiyyna offers an invoicing feature that enables users to create, manage and send invoices to their customers seamlessly. This feature helps streamline the invoicing process, which saves time and reduces errors.'
            }
          />
          <FeatureCard
            src={'/images/cardimage.png'}
            title='Invoicing'
            description={
              'Aiyyna offers an invoicing feature that enables users to create, manage and send invoices to their customers seamlessly. This feature helps streamline the invoicing process, which saves time and reduces errors.'
            }
          />
          <FeatureCard
            src={'/images/cardimage.png'}
            title='Invoicing'
            description={
              'Aiyyna offers an invoicing feature that enables users to create, manage and send invoices to their customers seamlessly. This feature helps streamline the invoicing process, which saves time and reduces errors.'
            }
          />
          <FeatureCard
            src={'/images/cardimage.png'}
            title='Invoicing'
            description={
              'Aiyyna offers an invoicing feature that enables users to create, manage and send invoices to their customers seamlessly. This feature helps streamline the invoicing process, which saves time and reduces errors.'
            }
          />
          <FeatureCard
            src={'/images/cardimage.png'}
            title='Invoicing'
            description={
              'Aiyyna offers an invoicing feature that enables users to create, manage and send invoices to their customers seamlessly. This feature helps streamline the invoicing process, which saves time and reduces errors.'
            }
          />
          <FeatureCard
            src={'/images/cardimage.png'}
            title='Invoicing'
            description={
              'Aiyyna offers an invoicing feature that enables users to create, manage and send invoices to their customers seamlessly. This feature helps streamline the invoicing process, which saves time and reduces errors.'
            }
          />
        </Bottomcontent>
      </Content>
    </Container>
  );
}
