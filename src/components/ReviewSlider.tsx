'use client';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import Slider from 'react-slick';

const ReviewSlider = () => {
  const sliderSettings = {
    arrows: false,
    infinite: true, // Enable infinite loop
    speed: 2000, // Transition speed in milliseconds (adjust for smooth transition)
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 7000, // Autoplay speed in milliseconds
    cssEase: 'linear',
  };
  return (
    <Slider {...sliderSettings}>
      <div className="!w-[90%] mx-[5%] my-5 relative rounded-md overflow-hidden">
        <div className="bg-[#2d2d2d] opacity-50 absolute inset-0"></div>
        <div className="relative">
          <p className="text-6xl absolute top-[-15px] left-[-2px]"></p>
          <p className="text-6xl absolute bottom-[-41px] right-[-1px]"></p>
          <div className="flex justify-center items-center w-full text-center">
            <p className="md:text-lg m-2">
              &quot; Samuel is absolutely great to work with! His
              professionalism is only rivaled by his execution and creativity. I
              would 10/10 hire him again. &quot;
            </p>
          </div>
          <div className="flex w-[80%] justify-end">
            <h4 className="md:text-2xl">-Dan</h4>
            <div className="flex flex-row justify-center mt-[5px] ml-3">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="!w-[90%] mx-[5%] my-5 relative rounded-md overflow-hidden">
        <div className="bg-[#2d2d2d] opacity-50 absolute inset-0"></div>
        <div className="relative">
          <div className="flex justify-center items-center w-full text-center">
            <p className="md:text-lg m-2">
              &quot;Matt did an awesome job creating our inventory program. It
              has worked flawlessly and is a huge time saver. We would
              definitely recommend him for any software design
              applications.&quot;
            </p>
          </div>
          <div className="flex w-[80%] justify-end">
            <h4 className="md:text-2xl">-Dale</h4>
            <div className="flex flex-row justify-center mt-[5px] ml-3">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="!w-[90%] mx-[5%] my-5 relative rounded-md overflow-hidden">
        <div className="bg-[#2d2d2d] opacity-50 absolute inset-0"></div>
        <div className="relative">
          <div className="flex justify-center items-center w-full text-center">
            <p className="md:text-lg m-2">
              &quot;Samuel was phenomenal to work with! He took the pieces and
              fragmented ideas I started with and created a beautiful piece that
              represent me and my work well!&quot;
            </p>
          </div>
          <div className="flex w-[80%] justify-end">
            <h4 className="md:text-2xl">-Jessica</h4>
            <div className="flex flex-row justify-center mt-2 ml-3">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default ReviewSlider;
