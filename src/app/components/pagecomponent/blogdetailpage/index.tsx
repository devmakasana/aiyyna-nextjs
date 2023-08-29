import React from 'react';
import Header from '../../header/header';
import Blogdetailhero from '../../blogdetailHero/blogdetailhero';
import Blogdetailsdescription from '../../blogdetailDescription/blogdetailsdescription';

export default function BlogdetailPage() {
  return (
    <div>
      <div className='group'>
        <div className='hero'>
          <Header />
          <Blogdetailhero />
        </div>
        <Blogdetailsdescription />
      </div>
    </div>
  );
}
