import React, { useMemo } from 'react';
import Header from '../../header/header';
import Mainblogcard from '../../mainBlogCard/mainblogcard';
import Blogallcard from '../../blogAll/blogallcard';
import Bloghero from '../../blogHero/bloghero';
import { isEmpty } from '@/app/helper/helper';
import { BlogModel } from '@/app/model/blogModels';
export default function Blogpage({ details, allBlogs }: { details: BlogModel; allBlogs: BlogModel[] }) {
  const renderDate = useMemo(() => {
    if (!isEmpty(details?.date)) {
      const inputDate = new Date(details?.date);
      const day = inputDate.getDate().toString().padStart(2, '0');
      const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(inputDate);
      const year = inputDate.getFullYear();
      const date = `${day} ${month}, ${year}`;
      return date;
    } else return null
  }, [details?.date]);

  return (
    <div className='group'>
      <div className='hero'>
        <Header />
        <Bloghero />
      </div>
      {!isEmpty(details?.banner?.url) && !isEmpty(details?.title) && !isEmpty(details?.date) && (
        <Mainblogcard
          imgSrc={details?.banner?.url}
          width={623}
          height={415}
          slug={details?.slug}
          datetitle={renderDate}
          heading={details?.title}
          description={details?.description}
        />
      )}
      {!isEmpty(allBlogs) && <Blogallcard allBlogs={allBlogs} />}
    </div>
  );
}
