'use client';
import React from 'react';
import Slider from 'react-slick';

const VideoCarousel = () => {
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    adaptiveHeight: true,
  };

  const videos = [
    'https://www.youtube.com/embed/UpFPaZmv104',
    'https://www.youtube.com/embed/AWFT2IWnP1w?si=AWQ_XKeyIkYwValV',
    'https://www.youtube.com/embed/sZL0A4Xf-Go?si=ptZUQwflfE24G3_m',
  ];

  return (
    <Slider {...settings}>
      {videos.map((src, i) => (
        <div className="flex justify-center" key={i}>
          <div
            className="
              w-full 
              max-w-[500px] 
              aspect-video 
              rounded-md 
              overflow-hidden
              bg-black/40
            "
          >
            <iframe src={src} className="w-full h-full" allowFullScreen />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default VideoCarousel;
