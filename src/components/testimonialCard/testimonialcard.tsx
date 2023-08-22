import React from 'react';
import { Main, Box, Leftarrow, Rightarrow, Arrow } from './styles';
import profile from '../../../public/images/testimoniallogo.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderCard from '../sliderCard/sliderCard';

import SVGIcon from '../../../public/assets/svg/SVGIcon';

export default function TestimonialCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    swipe: false
  };

  return (
    <div>
      <Main>
        <Box>
          <Slider {...settings}>
            <SliderCard
              imageSrc={profile}
              description={
                '"I have been using Aiyyna ERP for my textile business for over a year now, and it has been a game-changer for my operations. The software is highly customizable and has allowed me to streamline my inventory management, production planning, and sales order processing. The system’s reporting and analytics features have also helped me to gain valuable insights into my business, which has enabled me to make informed decisions. I highly recommend Aiyyna ERP to any textile business looking to increase efficiency and productivity." '
              }
              title={'Manthan Dhameliya'}
              heading={'Kreeva Fashion'}
              subheading={'Founder'}
            />
            <SliderCard
              imageSrc={profile}
              description={
                ' "I have been using Aiyyna ERP for my textile business for over a year now, and it has been a game-changer for my operations. The software is highly customizable and has allowed me to streamline my inventory management, production planning, and sales order processing. The system’s reporting and analytics features have also helped me to gain valuable insights into my business, which has enabled me to make informed decisions. I highly recommend Aiyyna ERP to any textile business looking to increase efficiency and productivity." '
              }
              title={'Manthan Dhameliya'}
              heading={'Kreeva Fashion'}
              subheading={'Founder'}
            />
            <SliderCard
              imageSrc={profile}
              description={
                ' "I have been using Aiyyna ERP for my textile business for over a year now, and it has been a game-changer for my operations. The software is highly customizable and has allowed me to streamline my inventory management, production planning, and sales order processing. The system’s reporting and analytics features have also helped me to gain valuable insights into my business, which has enabled me to make informed decisions. I highly recommend Aiyyna ERP to any textile business looking to increase efficiency and productivity." '
              }
              title={'Manthan Dhameliya'}
              heading={'Kreeva Fashion'}
              subheading={'Founder'}
            />
          </Slider>
        </Box>
        <Arrow>
          <Leftarrow>
            <SVGIcon
              name='left-arrow'
              viewBox='0 0 22 22'
              width='22'
              height='22'
              stroke={'#BAB8C0'}
              className='left-arrow'
            />
          </Leftarrow>
          <Rightarrow>
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
    </div>
  );
}
