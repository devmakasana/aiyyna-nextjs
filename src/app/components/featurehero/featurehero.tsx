'use client';
import React from 'react';
import { Description, Heading, Title } from './styles';

export default function Featurehero() {
  return (
    <Heading>
      {' '}
      <Title>Invoicing</Title>
      <Description>
        Aiyyna offers an invoicing feature that enables users to create, manage and send invoices to their customers
        seamlessly. This feature helps streamline the invoicing process, which saves time and reduces errors.
      </Description>
    </Heading>
  );
}
