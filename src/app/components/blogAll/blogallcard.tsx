'use client';
import React, { useMemo, useState } from 'react';
import { Container } from '@/app/styles/commoncontainer';
import { Content } from './styles';
import Blogcard from '../blogCard/blogcard';
import { isEmpty } from '@/app/helper/helper';
import Paginationbutton from '../paginationButton/paginationbutton';
import { ButtonContent } from '../blogButton/styles';
import { BlogModel } from '@/app/model/blogModels';

export default function Blogallcard({ allBlogs }: { allBlogs: BlogModel[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, allBlogs?.length);
  let currentBlogs = allBlogs?.slice(startIndex, endIndex);

  const handleNextClick = () => {
    if (currentPage < Math.ceil(allBlogs?.length / itemsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const renderBlogs = useMemo(() => {
    if (!isEmpty(currentBlogs)) {
      return currentBlogs?.map((item, index: number) => {
        const inputDate = new Date(item?.date);
        const day = inputDate.getDate().toString().padStart(2, '0');
        const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(inputDate);
        const year = inputDate.getFullYear();
        return (
          <>
            {!isEmpty(item?.banner?.url) && !isEmpty(item?.title) && (
              <Blogcard
                key={index}
                imgSrc={item?.banner?.url}
                width={410}
                height={275}
                datetitle={`${day} ${month}, ${year}`}
                descriprion={item?.title}
                href={`/blog/${item?.slug}`}
              />
            )}
          </>
        );
      });
    } else return null;
  }, [currentBlogs]);

  return (
    <div>
      <Container>
        {<Content>{renderBlogs}</Content>}
        <ButtonContent>
          {currentPage > 1 && (
            <Paginationbutton
              title='Previous'
              isAnglebutton='true'
              iconName='pre-arrow'
              iconSize='14'
              iconViewBox='0 0 14 14'
              onClick={handlePreviousClick}
            />
          )}

          {endIndex < allBlogs?.length && (
            <Paginationbutton
              title='Next'
              iconName='next-arrow'
              iconSize='14'
              iconViewBox='0 0 14 14'
              onClick={handleNextClick}
            />
          )}
        </ButtonContent>
      </Container>
    </div>
  );
}
