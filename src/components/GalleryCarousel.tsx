'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import webPhoto from '../../public/website1.png';
import webPhoto2 from '../../public/lesterheatair.png';
import social1 from '../../public/social1.png';
import social2 from '../../public/social2.png';
import social3 from '../../public/social3.png';
import branding1 from '../../public/branding1.png';
import branding2 from '../../public/general2.png';
import branding3 from '../../public/general3.png';
import branding4 from '../../public/general4.png';
import branding5 from '../../public/general5.png';
import branding6 from '../../public/ServeWhite.png';
import webDesign from '../../public/webDesign.png';
import socialHome from '../../public/socialHome.png';
import generalBranding from '../../public/generalBranding.png';
import videoHome from '../../public/videoHome.png';

const categoryStrings = [
  'Video Design',
  'Web Design',
  'Social Media',
  'General Branding',
];

const categories = {
  'Video Design': (
    <Image
      key="videoDesign"
      src={videoHome}
      alt="social media photo"
      className="max-h-[300px] block w-full relative -z-[1] bg-[#2d2d2d] p-2"
    />
  ),
  'Web Design': (
    <Image
      key="webDesign"
      src={webDesign}
      alt="social media photo"
      className="max-h-[300px] block w-full relative -z-[1] bg-[#2d2d2d] p-2"
    />
  ),
  'Social Media': (
    <Image
      key="social"
      src={socialHome}
      alt="social media photo"
      className="max-h-[300px] block w-full relative -z-[1] bg-[#2d2d2d] p-2"
    />
  ),
  'General Branding': (
    <Image
      key="generalbranding"
      src={generalBranding}
      alt="social media photo"
      className="max-h-[300px] block w-full relative -z-[1] bg-[#2d2d2d] p-2"
    />
  ),
};

type Category =
  | 'Web Design'
  | 'Social Media'
  | 'General Branding'
  | 'Video Design';

const webExamples = [
  <div key="web" className="">
    <Image
      key="web"
      src={webPhoto}
      alt="web photo"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card"
    />
  </div>,
  <div key="web2" className="">
    <Image
      key="web2"
      src={webPhoto2}
      alt="web photo 2"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card"
    />
  </div>,
];

const socialExamples = [
  <div key="social2" className="">
    <Image
      key="social2"
      src={social1}
      alt="social media photo"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card"
    />
  </div>,
  <div key="social2" className="">
    <Image
      key="social2"
      src={social2}
      alt="social media photo"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card"
    />
  </div>,
  <div key="social2" className="">
    <Image
      key="social2"
      src={social3}
      alt="social media photo"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card"
    />
  </div>,
];

const examples = {
  'Web Design': webExamples,
  'Social Media': socialExamples,
  'General Branding': socialExamples,
  'Video Design': socialExamples,
};

const GalleryCarousel = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('Video Design');

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: (currentSlide: number) => {
      setSelectedCategory(categoryStrings[currentSlide]);
    },
  };

  const exampleSliderSettings = {
    slidesToShow: selectedCategory === 'Web Design' ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="flex flex-row h-full">
      {/* Left carousel: Categories */}
      <div className={'w-2/6 mr-8 mt-10'}>
        <Slider {...sliderSettings}>
          {categoryStrings.map((category) => {
            return (
              <div key={category} className={' relative w-full bg-black/40'}>
                {categories[category as Category]}
                <div className="absolute inset-0 flex items-center justify-center py-5 text-center text-white">
                  <h3 className="">{category}</h3>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* Right carousel: Examples */}
      <div className="w-[60%] ml-8 mt-10 ">
        <Slider {...exampleSliderSettings}>
          {examples[selectedCategory as Category].map(
            (example: React.JSX.Element) => {
              return example;
            }
          )}
        </Slider>
      </div>
    </div>
  );
};

export default GalleryCarousel;
