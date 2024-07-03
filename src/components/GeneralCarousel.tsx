'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import branding1 from '../../public/branding1.png';
import branding2 from '../../public/branding2.png';
import branding3 from '../../public/branding3.png';
import branding4 from '../../public/ServeWhite.png';

const GeneralCarousel = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      <div key="branding1" className="!flex items-center h-full justify-center">
        <Image
          key="branding1"
          src={branding1}
          alt="branding1"
          className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto py-auto"
        />
      </div>
      <div key="branding4" className="!flex items-center h-full justify-center">
        <Image
          key="branding4"
          src={branding4}
          alt="branding4"
          className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto py-auto"
        />
      </div>
      <div key="branding2" className="!flex items-center h-full justify-center">
        <Image
          key="branding2"
          src={branding2}
          alt="branding2"
          className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto py-auto"
        />
      </div>
      <div key="branding3" className="!flex items-center h-full justify-center">
        <Image
          key="branding3"
          src={branding3}
          alt="branding3"
          className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto py-auto"
        />
      </div>
    </Slider>
  );
};

export default GeneralCarousel;
