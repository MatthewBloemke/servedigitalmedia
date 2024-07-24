'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import social1 from '../../public/social1.png';
import social2 from '../../public/social2.png';
import social3 from '../../public/social3.png';

const SocialCarousel = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 3500,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      <div key="social2" className="">
        <Image
          key="social2"
          src={social1}
          alt="social media photo"
          className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto"
        />
      </div>
      <div key="social2" className="">
        <Image
          key="social2"
          src={social2}
          alt="social media photo"
          className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto"
        />
      </div>
      <div key="social2" className="">
        <Image
          key="social2"
          src={social3}
          alt="social media photo"
          className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto"
        />
      </div>
    </Slider>
  );
};

export default SocialCarousel;
