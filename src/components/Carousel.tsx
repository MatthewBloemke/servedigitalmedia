'use client';
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { Button } from '@mui/material';

const Carousel = ({ cardObjects }: any) => {
  const settings = {
    infinite: true,
    arrows: false,
    dots: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 60000,
  };

  return (
    <div>
      <Slider {...settings} adaptiveHeight={true}>
        {cardObjects.map((obj: any, index: number) => {
          return (
            <div className="relative w-full" key={index}>
              <div className="relative bg-black/40 w-full h-[200px] sm:h-[200px] md:h-[300px] lg:h-[300px]">
                <Image
                  src={obj.src}
                  alt={obj.alt}
                  fill
                  className="object-cover w-full h-full -z-[1]"
                  priority={index === 0}
                />
              </div>

              <div className="absolute inset-x-0 bottom-6 flex flex-col items-center text-white">
                <h3 className="text-xl font-semibold drop-shadow-lg">
                  {obj.label}
                </h3>
                <Button variant="contained" size="small" href={obj.href}>
                  {obj.button}
                </Button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
