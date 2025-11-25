'use client';
import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import Slider from 'react-slick';

const reviews = [
  {
    message: `"Samuel was phenomenal to work with! He took the pieces and
  fragmented ideas I started with and created a beautiful piece
  that represented me and my work well!"`,
    user: 'Jessica',
  },
  {
    message: `"Matt did an awesome job creating our inventory program.
                  It has worked flawlessly and is a huge time saver. We would
                  definitely recommend him for any software design
                  applications."`,
    user: 'Dale',
  },
  {
    message:
      '"Samuel is absolutely great to work with! His professionalism is only rivaled by his execution and creativity. I would 10/10 hire him again."',
    user: 'Dan',
  },
];

const ReviewSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const sliderSettings = {
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: 'linear',
  };
  return (
    <div
      className={`overflow-y-hidden ${isMobile ? 'h-[310px]' : 'h-[210px]'} `}
    >
      <div className="relative h-[100vh]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/textures/noise.svg')] opacity-[0.08]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8c52ff33] via-transparent to-[#fb5d0022]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
        </div>
        <Slider {...sliderSettings}>
          {reviews.map(({ message, user }) => (
            <div className="!w-full px-4 flex justify-center" key={user}>
              <div
                className="
                  w-full max-w-4xl 
                  bg-[rgba(30,30,30,0.55)]
                  backdrop-blur-xl
                  border border-white/10
                  shadow-xl
                  p-6 md:p-8 
                  mx-auto 
                "
              >
                <p className="md:text-lg text-gray-100 text-center leading-relaxed">
                  {message}
                </p>

                <div className="flex flex-col items-center mt-4">
                  <h4 className="md:text-xl font-semibold text-white">
                    - {user}
                  </h4>
                  <div className="flex gap-1 mt-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <BsStarFill key={i} className="text-yellow-400" />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSlider;
