'use client';
import React from 'react';
import Slider from 'react-slick';

interface props {
  examples: React.JSX.Element[];
  sliderSettings: {
    dots: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    speed: number;
    autoplaySpeed: number;
    arrows: boolean;
    afterChange: (currentSlide: number) => void;
  };
  sliderRef: React.MutableRefObject<Slider | null>;
}

const GallerySlider = ({ examples, sliderSettings, sliderRef }: props) => {
  return (
    <Slider {...sliderSettings} ref={sliderRef}>
      {examples}
    </Slider>
  );
};

export default GallerySlider;
