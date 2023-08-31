import React from 'react';
import Header from '../header/header';
import { Main, Content } from './styles';
import Requestdemo from '../requestDemo/requestdemo';
import Herofooter from '../herosection/herofooter';

export default function RequestHero() {
  return (
    <div>
      <div className='request-main'>
        {/* <Content> */}
        <Header />
        <Requestdemo />
        <Herofooter />
        {/* </Content> */}
      </div>
    </div>
  );
}
