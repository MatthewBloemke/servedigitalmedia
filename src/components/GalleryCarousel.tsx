'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import webPhoto from '../../public/website1.png';
import webPhoto2 from '../../public/lesterheatair.png';
import webPhoto3 from '../../public/website3.png';
import social1 from '../../public/social1.png';
import social2 from '../../public/social2.png';
import social3 from '../../public/social3.png';
import branding1 from '../../public/branding1.png';
import branding2 from '../../public/branding2.png';
import branding3 from '../../public/branding3.png';
import branding4 from '../../public/ServeWhite.png';
import webDesign from '../../public/webDesign.png';
import socialHome from '../../public/socialHome.png';
import generalBranding from '../../public/generalBranding.png';
import videoHome from '../../public/videoHome.png';
import GallerySlider from './GallerySlider';
import Link from 'next/link';

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
      className="max-h-[300px] block w-full relative -z-[1] bg-[#4b4b4b] p-2"
    />
  ),
  'Web Design': (
    <Image
      key="webDesign"
      src={webDesign}
      alt="social media photo"
      className="max-h-[300px] block w-full relative -z-[1] bg-[#4b4b4b] p-2"
    />
  ),
  'Social Media': (
    <Image
      key="social"
      src={socialHome}
      alt="social media photo"
      className="max-h-[300px] block w-full relative -z-[1] bg-[#4b4b4b] p-2"
    />
  ),
  'General Branding': (
    <Image
      key="generalbranding"
      src={generalBranding}
      alt="social media photo"
      className="max-h-[300px] block w-full relative -z-[1] bg-[#4b4b4b] p-2"
    />
  ),
};

type Category =
  | 'Web Design'
  | 'Social Media'
  | 'General Branding'
  | 'Video Design';

const brandingExamples = [
  <div key="branding1" className="!flex items-center h-full justify-center">
    <Image
      key="branding1"
      src={branding1}
      alt="branding1"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto py-auto"
    />
  </div>,
  <div key="branding4" className="!flex items-center h-full justify-center">
    <Image
      key="branding4"
      src={branding4}
      alt="branding4"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto py-auto"
    />
  </div>,
  <div key="branding2" className="!flex items-center h-full justify-center">
    <Image
      key="branding2"
      src={branding2}
      alt="branding2"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto py-auto"
    />
  </div>,
  <div key="branding3" className="!flex items-center h-full justify-center">
    <Image
      key="branding3"
      src={branding3}
      alt="branding3"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto py-auto"
    />
  </div>,
];

const webExamples = [
  <div key="web2" className="">
    <Link href="https://www.lesterheatandair.com/" target="_blank">
      <Image
        key="web2"
        src={webPhoto2}
        alt="web photo 2"
        className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto"
      />
    </Link>
  </div>,
  <div key="web3" className="">
    <Link href="https://studenthealthyconversations.com/" target="_blank">
      <Image
        key="web3"
        src={webPhoto3}
        alt="web photo 3"
        className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto"
      />
    </Link>
  </div>,
  <div key="web" className="">
    <Link href="https://www.matthewbloemke.com/" target="_blank">
      <Image
        key="web"
        src={webPhoto}
        alt="web photo"
        className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto"
      />
    </Link>
  </div>,
];

const videoExamples = [
  <div key="video1" className="relative">
    <iframe
      className="w-[238px] h-[134px] xl:w-[560px] lg:w-[476px] lg:h-[268px] xl:h-[315px] relative mx-auto bg-[#2d2d2d] p-2"
      src="https://www.youtube.com/embed/UpFPaZmv104"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>,
  <div key="video2" className="relative">
    <iframe
      className="w-[238px] h-[134px] xl:w-[560px] lg:w-[476px] lg:h-[268px] xl:h-[315px] relative mx-auto bg-[#2d2d2d] p-2"
      src="https://www.youtube.com/embed/AWFT2IWnP1w?si=AWQ_XKeyIkYwValV"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>,
  <div key="video3" className="relative">
    <iframe
      className="w-[238px] h-[134px] xl:w-[560px] lg:w-[476px] lg:h-[268px] xl:h-[315px] relative mx-auto bg-[#2d2d2d] p-2"
      src="https://www.youtube.com/embed/sZL0A4Xf-Go?si=ptZUQwflfE24G3_m"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>,
];

const socialExamples = [
  <div key="social2" className="">
    <Image
      key="social2"
      src={social1}
      alt="social media photo"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto"
    />
  </div>,
  <div key="social2" className="">
    <Image
      key="social2"
      src={social2}
      alt="social media photo"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto"
    />
  </div>,
  <div key="social2" className="">
    <Image
      key="social2"
      src={social3}
      alt="social media photo"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto"
    />
  </div>,
];

const examples = [
  ...videoExamples,
  ...webExamples,
  ...socialExamples,
  ...brandingExamples,
];

const GalleryCarousel = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('Video Design');

  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  const handleChangeSlide1 = (newSlideIndex: number) => {
    if (sliderRef1.current) {
      sliderRef1.current.slickGoTo(newSlideIndex);
    }
  };

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
  };

  const exampleSliderSettings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    arrows: true,
    beforeChange: (currentSlide: number, next: number) => {
      console.log(next);
      if (next >= 0 && next <= 2) {
        if (selectedCategory != 'Video Design') {
          setSelectedCategory('Video Design');
          if (currentSlide === 12) {
            sliderRef1.current?.slickNext();
          } else {
            handleChangeSlide1(0);
          }
        }
      } else if (next >= 3 && next <= 5) {
        if (selectedCategory != 'Web Design') {
          setSelectedCategory('Web Design');
          handleChangeSlide1(1);
        }
      } else if (next >= 6 && next <= 8) {
        if (selectedCategory != 'Social Media') {
          setSelectedCategory('Social Media');
          handleChangeSlide1(2);
        }
      } else if (next >= 9 && next <= 12) {
        if (selectedCategory != 'General Branding') {
          setSelectedCategory('General Branding');
          handleChangeSlide1(3);
        }
      }
    },
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row h-full">
        <div className={'lg:w-[40%] lg:mr-8  '}>
          <Slider {...sliderSettings} ref={sliderRef1}>
            {categoryStrings.map((category) => {
              return (
                <div key={category} className={' relative w-full bg-black/40'}>
                  {categories[category as Category]}
                  <div className="absolute inset-0 flex items-center justify-center py-5 text-center text-white">
                    <h2>{category}</h2>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="lg:w-[60%] lg:ml-8  ">
          <GallerySlider
            sliderRef={sliderRef2}
            sliderSettings={exampleSliderSettings}
            examples={examples.map((example: React.JSX.Element) => {
              return example;
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryCarousel;
