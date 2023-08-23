import React from 'react';
import { Main, Content, Subcontent, Below, Title, Description, Logo } from './styles';
import SVGIcon from '../../../../public/assets/svg/SVGIcon';

export default function Contactsuccess() {
  return (
    <div>
      <Main>
        <Content>
          <Subcontent>
            <Logo>
              <SVGIcon name='success-image' viewBox='0 0 100 100' width='100' height='100' />
            </Logo>
            <Below>
              <Title>Thank you for getting in touch!</Title>
              <Description>
                We appreciate you contacting us. One of our colleagues will get back in touch with you soon! Have a
                great day!
              </Description>
            </Below>
          </Subcontent>
        </Content>
      </Main>
    </div>
  );
}
