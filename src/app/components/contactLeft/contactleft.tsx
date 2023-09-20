import React from 'react';
import { Main, Title, Description, Heading, Subheading } from './styles';
import { isEmpty } from '@/app/helper/helper';
import { ContactPageModel } from '@/app/model/contactModel';
export default function Contactleft({ details }: { details: ContactPageModel }) {
  return (
    <div>
      <Main>
        {!isEmpty(details?.title) && <Title>{details?.title}</Title>}
        {!isEmpty(details?.description) && <Description>{details?.description}</Description>}
        {!isEmpty(details?.email) && (
          <>
            <Heading>Email Address</Heading>
            <Subheading>{details?.email}</Subheading>
          </>
        )}
      </Main>
    </div>
  );
}
