'use client';
import React from 'react';
import Slider from 'react-slick';

const VideoCarousel = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      <div className="relative">
        <iframe
          className="w-[238px] h-[134px] lg:w-[476px] lg:h-[268px] relative mx-auto bg-[#2d2d2d] p-2"
          src="https://www.youtube.com/embed/UpFPaZmv104"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="relative">
        <iframe
          className="w-[238px] h-[134px] lg:w-[476px] lg:h-[268px] relative mx-auto bg-[#2d2d2d] p-2"
          src="https://www.youtube.com/embed/AWFT2IWnP1w?si=AWQ_XKeyIkYwValV"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="relative">
        <iframe
          className="w-[238px] h-[134px] lg:w-[476px] lg:h-[268px] relative mx-auto bg-[#2d2d2d] p-2"
          src="https://www.youtube.com/embed/sZL0A4Xf-Go?si=ptZUQwflfE24G3_m"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </Slider>
  );
};

export default VideoCarousel;
