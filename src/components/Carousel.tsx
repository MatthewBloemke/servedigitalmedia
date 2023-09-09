'use client';
import React from 'react';
import Image from 'next/image';
import { Carousel, Button } from 'flowbite-react';
import webDesign from '../../public/webDesign.png';
import videoHome from '../../public/videoHome.png';
import socialHome from '../../public/socialHome.png';
import generalBranding from '../../public/generalBranding.png';
import Link from 'next/link';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite, DarkThemeToggle } from 'flowbite-react';
const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: 'bg-[#8c52ff] hover:bg-[#511dee]',
    },
  },
};

const DefaultCarousel = () => {
  return (
    <Carousel slideInterval={6000}>
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
            <Button size="xs" color="purple" className="mx-auto">
              View Video Editing Services
            </Button>
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
            <Button size="xs" color="purple" className="mx-auto">
              View Web Design Services
            </Button>
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
            <Button size="xs" color="purple" className="mx-auto">
              View Social Media Services
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative w-full">
        <div className="position absolute w-full h-full bg-black/40 z-1"></div>
        <Image
          src={generalBranding}
          alt="General branding services image"
          className="block w-full relative -z-[1]"
        />
        <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
          <h3>General Branding</h3>
          <Link href="/services#branding">
            <Button size="xs" color="purple" className="mx-auto">
              View General Branding Services
            </Button>
          </Link>
        </div>
      </div>
    </Carousel>
  );
};

export default DefaultCarousel;
