import React from 'react';
import { Main, Content, Above, Below, Description, Title, Heading } from './styles';
import SVGIcon from '../../../../public/assets/svg/SVGIcon';

export default function Requestsuccess() {
  return (
    <div>
      <Main>
        <Content>
          <Above>
            <SVGIcon name='thankyou-image' width='198' height='198' viewBox='0 0 198 198' />
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
