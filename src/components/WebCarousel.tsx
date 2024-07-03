'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import webPhoto from '../../public/website1.png';
import webPhoto2 from '../../public/lesterheatair.png';
import webPhoto3 from '../../public/website3.png';

const WebCarousel = () => {
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
      <div key="web2" className="">
        <Link href="https://www.lesterheatandair.com/" target="_blank">
          <Image
            key="web2"
            src={webPhoto2}
            alt="web photo 2"
            className="max-h-[268px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto"
          />
        </Link>
      </div>
      <div key="web3" className="">
        <Link href="https://studenthealthyconversations.com/" target="_blank">
          <Image
            key="web3"
            src={webPhoto3}
            alt="web photo 3"
            className="max-h-[268px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto"
          />
        </Link>
      </div>
      <div key="web" className="">
        <Link href="https://www.matthewbloemke.com/" target="_blank">
          <Image
            key="web"
            src={webPhoto}
            alt="web photo"
            className="max-h-[268px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto"
          />
        </Link>
      </div>
    </Slider>
  );
};

export default WebCarousel;
