'use client';
import React from 'react';
import Image from 'next/image';
import { Carousel } from 'flowbite-react';
import webDesign from '../../public/webDesign.png';
import videoHome from '../../public/videoHome.png';
import socialHome from '../../public/socialHome.png';
import generalBranding from '../../public/generalBranding.png';
import Link from 'next/link';

const DefaultCarousel = () => {
  return (
    <Carousel slideInterval={7000}>
      <div className="relative w-full bg-black/40">
        <div className="position absolute w-full h-full bg-black/40 z-1"></div>
        <Image
          src={videoHome}
          alt="Video services image"
          className="block w-full  relative -z-[1]"
        />
        <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
          <h3>Video Editing</h3>
          <Link href="/services#video">
            <button className="border-solid border-2 border-[#8c52ff] px-2 hover:bg-[#8c52ff] active:scale-[.98] text-sm">
              View Video Editing Services
            </button>
          </Link>
        </div>
      </div>
      <div className="relative w-full bg-black/40">
        <div className="position absolute w-full h-full bg-black/40 z-1"></div>
        <Image
          src={webDesign}
          alt="Web design services image"
          className="block w-full  relative -z-[1]"
        />
        <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
          <h3>Web Design</h3>
          <Link href="/services#web">
            <button className="border-solid border-2 border-[#8c52ff] px-2 hover:bg-[#8c52ff] active:scale-[.98] text-sm">
              View Web Design Services
            </button>
          </Link>
        </div>
      </div>
      <div className="relative w-full bg-black/40">
        <div className="position absolute w-full h-full bg-black/40 z-1"></div>
        <Image
          src={socialHome}
          alt="Social Media services image"
          className="block w-full relative -z-[1]"
        />
        <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
          <h3>Social Media</h3>
          <Link href="/services#social">
            <button className="border-solid border-2 border-[#8c52ff] px-2 hover:bg-[#8c52ff] active:scale-[.98] text-sm">
              View Social Media Services
            </button>
          </Link>
        </div>
      </div>
      <div className="relative w-full">
        <div className="position absolute w-full h-full bg-black/40 z-1"></div>
        <Image
          src={videoHome}
          alt="General branding services image"
          className="block w-full relative -z-[1]"
        />
        <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
          <h3>General Branding</h3>
          <Link href="/services#branding">
            <button className="border-solid border-2 border-[#8c52ff] px-2 hover:bg-[#8c52ff] active:scale-[.98] text-sm">
              View General Branding Services
            </button>
          </Link>
        </div>
      </div>
    </Carousel>
  );
};

export default DefaultCarousel;
