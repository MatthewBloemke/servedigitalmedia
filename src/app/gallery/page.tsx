import React from 'react';
import GeneralCarousel from '@/components/GeneralCarousel';
import VideoCarousel from '@/components/VideoCarousel';
import WebCarousel from '@/components/WebCarousel';
import SocialCarousel from '@/components/SocialCarousel';

const Gallery = () => {
  return (
    <div className="flex flex-row flex-wrap">
      <div
        id="video"
        className="pb-10 mt-24 relative bg-[#2d2d2d] bg-opacity-60 md:ml-[4%] md:mr-[1%] md:w-[45%] p-2 serve-card mx-[2.5%]"
      >
        <div className="p-2">
          <h2 className="mb-4 text-[#f5f5f5]">Video Gallery</h2>
          <div className="w-[90%] mx-auto">
            <VideoCarousel />
          </div>
        </div>
      </div>

      <div
        id="web"
        className="pb-10 mt-24 relative bg-[#2d2d2d] bg-opacity-60 md:ml-[1%] md:mr-[4%] md:w-[45%] p-2 serve-card mx-[2.5%]"
      >
        <div className="p-2">
          <h2 className={`mb-2 text-center text-[#f5f5f5]`}>Web Gallery</h2>
          <hr className="mb-4 w-5/6 mx-auto" />
          <div className="w-[90%] mx-auto">
            <WebCarousel />
          </div>
        </div>
      </div>
      <div
        id="social"
        className="pb-10 mt-24 relative bg-[#2d2d2d] bg-opacity-60 md:ml-[4%] md:mr-[1%] md:w-[45%] p-2 serve-card mx-[2.5%] md:mb-10"
      >
        <div className="p-2">
          <h2 className="mb-4 text-[#f5f5f5]">Social Media Gallery</h2>
          <div className="w-[90%] mx-auto">
            <SocialCarousel />
          </div>
        </div>
      </div>
      <div
        id="general"
        className="pb-10 mt-24 relative bg-[#2d2d2d] bg-opacity-60 md:ml-[1%] md:mr-[4%] md:w-[45%] p-2 serve-card mx-[2.5%] md:mb-10"
      >
        <div className="p-2">
          <h2 className="mb-4 text-[#f5f5f5]">General Branding Gallery</h2>
          <div className="w-[90%] mx-auto">
            <GeneralCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
