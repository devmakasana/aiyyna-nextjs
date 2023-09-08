import React from 'react';
import Header from '../../header/header';
import Blogdetailhero from '../../blogdetailHero/blogdetailhero';
import Blogdetailsdescription from '../../blogdetailDescription/blogdetailsdescription';
import { BlogModel } from '@/app/model/blogModels';

export default function BlogdetailPage({blogDetails}: {blogDetails: BlogModel}) {
  return (
    <div>
      <div className='group'>
        <div className='hero'>
          <Header />
          <Blogdetailhero blogDetails={blogDetails}/>
        </div>
        <Blogdetailsdescription blogData={blogDetails?.body?.json} blogDesription={blogDetails?.description}/>
      </div>
    </div>
  );
}
