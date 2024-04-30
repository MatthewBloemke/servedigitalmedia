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
  <div
    key="branding1"
    className="!flex items-center h-full justify-center my-auto"
  >
    <Image
      key="branding1"
      src={branding1}
      alt="branding1"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto py-auto"
    />
  </div>,
  <div
    key="branding4"
    className="!flex items-center h-full justify-center my-auto"
  >
    <Image
      key="branding4"
      src={branding4}
      alt="branding4"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto py-auto"
    />
  </div>,
  <div
    key="branding2"
    className="!flex items-center h-full justify-center my-auto"
  >
    <Image
      key="branding2"
      src={branding2}
      alt="branding2"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto py-auto"
    />
  </div>,
  <div
    key="branding3"
    className="!flex items-center h-full justify-center my-auto"
  >
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
    <Image
      key="web2"
      src={webPhoto2}
      alt="web photo 2"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto"
    />
  </div>,
  <div key="web3" className="">
    <Image
      key="web3"
      src={webPhoto3}
      alt="web photo 3"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto"
    />
  </div>,
  <div key="web" className="">
    <Image
      key="web"
      src={webPhoto}
      alt="web photo"
      className="max-h-[300px] w-auto bg-[#2d2d2d] p-2 serve-card mx-auto"
    />
  </div>,
];

const videoExamples = [
  <div key="video1" className="relative mt-5 mx-[1%]">
    <iframe
      className="w-[280px] h-[158px] md:w-[560px] md:h-[315px] relative mx-auto bg-[#2d2d2d] p-2"
      src="https://www.youtube.com/embed/UpFPaZmv104"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>,
  <div key="video2" className="relative mt-5 mx-[1%]">
    <iframe
      className="w-[280px] h-[158px] md:w-[560px] md:h-[315px] relative mx-auto bg-[#2d2d2d] p-2"
      src="https://www.youtube.com/embed/AWFT2IWnP1w?si=AWQ_XKeyIkYwValV"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>,
  <div key="video3" className="relative mt-5 mx-[1%]">
    <iframe
      className="w-[280px] h-[158px] md:w-[560px] md:h-[315px] relative mx-auto bg-[#2d2d2d] p-2"
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
  'General Branding': brandingExamples,
  'Video Design': videoExamples,
};

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
    arrows: true,
    dots: true,
    afterChange: (currentSlide: number) => {
      setSelectedCategory(categoryStrings[currentSlide]);
    },
  };

  const exampleSliderSettings = {
    dots: true,
    slidesToShow: selectedCategory === 'Social Media' ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    arrows: true,
    afterChange: (currentSlide: number) => {
      if (currentSlide === examples[selectedCategory as Category].length - 1) {
        const currentIndex = categoryStrings.indexOf(selectedCategory);

        const nextIndex = (currentIndex + 1) % categoryStrings.length;
        setTimeout(() => {
          setSelectedCategory(categoryStrings[nextIndex]);
          handleChangeSlide1(nextIndex);
        }, 1600);
      }
    },
  };

  const videoSlider = (
    <GallerySlider
      sliderRef={sliderRef2}
      sliderSettings={exampleSliderSettings}
      examples={examples['Video Design'].map((example: React.JSX.Element) => {
        return example;
      })}
    />
  );

  const [SecondSlider, setSecondSlider] = useState(videoSlider);

  const webSlider = (
    <GallerySlider
      sliderRef={sliderRef2}
      sliderSettings={exampleSliderSettings}
      examples={examples['Web Design'].map((example: React.JSX.Element) => {
        return example;
      })}
    />
  );

  const generalSlider = (
    <GallerySlider
      sliderRef={sliderRef2}
      sliderSettings={exampleSliderSettings}
      examples={examples['General Branding'].map(
        (example: React.JSX.Element) => {
          return example;
        }
      )}
    />
  );

  const socialSlider = (
    <GallerySlider
      sliderRef={sliderRef2}
      sliderSettings={exampleSliderSettings}
      examples={examples['Social Media'].map((example: React.JSX.Element) => {
        return example;
      })}
    />
  );

  useEffect(() => {
    switch (selectedCategory) {
      case 'Video Design':
        setSecondSlider(videoSlider);
        break;
      case 'Web Design':
        setSecondSlider(webSlider);
        break;
      case 'General Branding':
        setSecondSlider(generalSlider);
        break;
      case 'Social Media':
        setSecondSlider(socialSlider);
        break;
    }

    if (sliderRef2.current) {
      sliderRef2.current.slickGoTo(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return (
    <div className="flex flex-row h-full">
      {/* Left carousel: Categories */}
      <div className={'w-2/6 mr-8 my-auto'}>
        <Slider {...sliderSettings} ref={sliderRef1}>
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
      <div className="w-[60%] ml-8 mt-10 ">{SecondSlider}</div>
    </div>
  );
};

export default GalleryCarousel;
