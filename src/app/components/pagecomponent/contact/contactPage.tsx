import React from 'react';
import Header from '../../header/header';
import Contactsection from '../../contactSection/contactsection';
import { ContactPageModel } from '@/app/model/contactModel';
export default function Contactpage({details}: {details: ContactPageModel}) {
  return (
    <div className='group'>
      <div className='contacthero'>
        <Header />
        <Contactsection details={details}/>
      </div>
    </div>
  );
}
