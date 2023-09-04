import React, { useMemo, useRef } from 'react';
import { Main, Box, Leftarrow, Rightarrow, Arrow } from './styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderCard from '../sliderCard/sliderCard';

import SVGIcon from '../../../../public/assets/svg/SVGIcon';
import { TestinomialSectionContentCollectionItemsModel } from '@/app/model/homePageModel';
import { isEmpty } from '@/app/helper/helper';

export default function TestimonialCard({
  testinomialData
}: {
  testinomialData: TestinomialSectionContentCollectionItemsModel[];
}) {
  const sliderRef: any = useRef(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    swipe: false,
    beforeChange: (nextSlide: number) => {
      if (nextSlide === 0) {
        sliderRef.current.slickPause();
      }
    }
  };

  const renderTestinomialData = useMemo(() => {
    return testinomialData?.map((item, index: number) => {
      return (
        <SliderCard
          key={index}
          imageSrc={item?.profile?.url}
          description={item?.content}
          title={item?.userName}
          heading={item?.companyName}
          subheading={item?.designation}
        />
      );
    });
  }, []);

  return (
    <div>
      {!isEmpty(testinomialData) && (
        <Main>
          <Box>
            <Slider ref={sliderRef} {...settings}>
              {renderTestinomialData}
            </Slider>
          </Box>

          <Arrow>
            <Leftarrow onClick={() => sliderRef.current.slickPrev()}>
              <SVGIcon
                name='left-arrow'
                viewBox='0 0 22 22'
                width='22'
                height='22'
                stroke={'#BAB8C0'}
                className='left-arrow'
              />
            </Leftarrow>
            <Rightarrow onClick={() => sliderRef.current.slickNext()}>
              <SVGIcon
                name='right-arrow'
                viewBox='0 0 22 22'
                width='22'
                height='22'
                stroke={'#BAB8C0'}
                className='right-arrow'
              />
            </Rightarrow>
          </Arrow>
        </Main>
      )}
    </div>
  );
}
