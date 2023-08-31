'use client';
import React from 'react';
import { Main, Content, Description, Leftcontent, Rightcontent, Title, Row1, Row2 } from './styles';
import Iconbox from './Box/box';
import { Container } from '@/app/styles/commoncontainer';

export default function Integrations() {
  return (
    <Main>
      <Container>
        <Content>
          <Leftcontent>
            <Title>Integrations</Title>
            <Description>
              200+ Integrations <br></br> to help your business grow
            </Description>
          </Leftcontent>
          <div className='icons'>
            <Rightcontent>
              <Row1>
                <Iconbox imgsrc='/images/ebay.svg' height={26} width={66} />
                <Iconbox imgsrc='/images/ajio.svg' height={26} width={89} />
                <Iconbox imgsrc='/images/amazon.svg' height={26} width={86} />
                <Iconbox imgsrc='/images/myntra.svg' height={26} width={80} />
              </Row1>
              <Row2>
                <Iconbox imgsrc='/images/nykaa.svg' height={26} width={79} />
                <Iconbox imgsrc='/images/shopee.svg' height={26} width={89} />

                <Iconbox imgsrc='/images/flipkart.svg' height={26} width={99} />
                <Iconbox imgsrc='/images/wish.svg' height={26} width={77} />
                <Iconbox imgsrc='/images/cred.svg' height={26} width={78} />
              </Row2>
              <Row1>
                <Iconbox imgsrc='/images/noon.svg' height={26} width={80} />
                <Iconbox imgsrc='/images/daraz.svg' height={26} width={80} />
                <Iconbox imgsrc='/images/blibli.svg' height={26} width={79} />
                <Iconbox imgsrc='/images/fynd.svg' height={26} width={65} />
              </Row1>
            </Rightcontent>
          </div>
        </Content>
      </Container>
    </Main>
  );
}
