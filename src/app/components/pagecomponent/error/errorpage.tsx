import React from 'react';
import Header from '../../header/header';
import Errormessage from '../../errorMessage/errormessage';

export default function Errorpage() {
  return (
    <div className='group'>
      <div className='hero'>
        <Header />
        <Errormessage />
      </div>
    </div>
  );
}
