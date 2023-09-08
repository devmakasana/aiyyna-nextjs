'use client';
import React, { useMemo } from 'react';
import Image from 'next/image';
import { Description, Heading, Mainimage, Title } from './styles';
import { Container } from '@/app/styles/commoncontainer';
import { isEmpty } from '@/app/helper/helper';
import { BlogModel } from '@/app/model/blogModels';

export default function Blogdetailhero({ blogDetails }: { blogDetails: BlogModel }) {
  const renderDate = useMemo(() => {
    if (!isEmpty(blogDetails?.date)) {
      const year = new Date(blogDetails?.date).getFullYear();
      const month = new Date(blogDetails?.date).toLocaleString('default', { month: 'short' });
      const day = new Date(blogDetails?.date).getDate();
      const formattedDate = `${day} ${month}, ${year}`;
      return formattedDate;
    } else return null;
  }, [blogDetails?.date]);

  return (
    <Container>
      <Heading>
        {!isEmpty(blogDetails?.date) && <Title>{renderDate}</Title>}
        {!isEmpty(blogDetails?.title) && <Description>{blogDetails?.title}</Description>}
      </Heading>
      {!isEmpty(blogDetails?.banner?.url) && (
        <Mainimage>
          <Image src={blogDetails?.banner?.url} alt={'blogdetail'} width={980} height={653} className='blogimage' />
        </Mainimage>
      )}
    </Container>
  );
}
