import React from 'react';
import { Main, Content, Above, Below, Description, Title, Heading } from './styles';
import Image from 'next/image';
import thankucard from '../../../../public/images/thanku-request.svg';

export default function Requestsuccess() {
  return (
    <div>
      <Main>
        <Content>
          <Above>
            <Image src={thankucard} alt='thankucard' width={198} height={198} className='image-card' />
          </Above>
          <Below>
            <Description>
              <Title> Thank you! </Title>
              <Heading>
                For requesting a product demonstration one of our team members will contact you shortly.
              </Heading>
            </Description>
          </Below>
        </Content>
      </Main>
    </div>
  );
}
