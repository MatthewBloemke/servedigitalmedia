'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

import Slider from 'react-slick';
import { Button } from '@mui/material';

const Carousel = ({ cardObjects }: any) => {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
  };

  return (
    <div>
      <Slider {...settings}>
        {cardObjects.map((obj: any, index: number) => {
          return (
            <div key={index} className={'transition-opacity duration-[2500ms]'}>
              <div className={' relative  w-full bg-black/40'}>
                <Image
                  src={obj.src}
                  alt={obj.alt}
                  className="block w-full  relative -z-[1]"
                />
                <div className="absolute inset-x-[15%] bottom-3 py-5 text-center text-white md:block">
                  <h3>{obj.label}</h3>
                  <Button variant="contained" size="small" href={obj.href}>
                    {obj.button}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
