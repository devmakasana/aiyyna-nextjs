'use client';
import React from 'react';
import Image from 'next/image';
import { Main, Content, Logo, Right, Rightfooter, Last } from './styles';
import { Container } from '@/app/styles/commoncontainer';
import logo from '../../../../public/images/footerlogo.svg';

export default function Footer() {
  return (
    <div>
      <Main>
        <Container>
          <Content>
            <Logo href={''}>
              <Image src={logo} alt={logo} width={124} height={36} />
            </Logo>
            <Right>
              <Rightfooter href={''}>Terms & Conditions</Rightfooter>
              <Last href={''}>Privacy Policy</Last>
            </Right>
          </Content>
        </Container>
      </Main>
    </div>
  );
}
