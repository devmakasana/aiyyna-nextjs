import React from 'react';
import Header from '../../header/header';
import Contactsection from '../../contactSection/contactsection';
export default function Contactpage() {
  return (
    <div className='group'>
      <div className='contacthero'>
        <Header />
        <Contactsection />
      </div>
    </div>
  );
}
