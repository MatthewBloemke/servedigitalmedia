import React from 'react';
import Image from 'next/image';
import webDesign from '../../../public/webDesign.png';
import socialHome from '../../../public/socialHome.png';
import generalBranding from '../../../public/generalBranding.png';
import videoHome from '../../../public/videoHome.png';
import { Button } from '@mui/material';

const Page = () => {
  return (
    <div id="servicesPage" className="flex flex-row flex-wrap">
      <div
        id="video"
        className="mt-24 flex flex-wrap bg-[#2d2d2d] relative md:ml-[10%] md:mr-[5%] md:w-[35%] p-2 serve-card mx-[2.5%]"
      >
        <Image
          src={videoHome}
          alt="placeholder"
          className="bg-white w-full relative "
        />
        <div className="p-2">
          <h2 className="font-bold text-[#f5f5f5]">Video</h2>
          <p className="font-extralight text-[#f5f5f5]">
            When competing for attention in the modern market, video helps you
            stand out from the rest of the world with the opportunity for your
            audience to connect with you before making that initial contact.
            Make a splash with this personal marketing tool! Each package is
            customizable, reach out for more information
          </p>
          <br />
          <div className="flex">
            <p className="font-semibold text-[#fb5d00]">Packages:</p>
            <ul className="ml-[35px] text-[#f5f5f5]">
              <li>Promotional video package (1 - 2 minute video)</li>
              <li>Shorts/Reels package (under 60 second video)</li>
              <li>Long form video package (3+ minute video)</li>
            </ul>
          </div>
          <div className="flex justify-end w-full mt-5">
            <Button href="/gallery#videoProjects" variant="contained">
              View Video Gallery
            </Button>
          </div>
        </div>
      </div>

      <div
        id="web"
        className="md:mt-24 mt-[8%] flex flex-wrap bg-[#2d2d2d] relative md:ml-[5%] md:mr-[10%] md:w-[35%] p-2 serve-card mx-[2.5%]"
      >
        <Image
          src={webDesign}
          alt="placeholder"
          className="bg-white w-full relative"
        />
        <div className="p-2">
          <h2 className="font-bold text-[#f5f5f5]">Web Design</h2>
          <p className="font-extralight text-[#f5f5f5]">
            Websites are the best way for you to promote your brand, but it can
            be hard to make one look professional without paying a lot to have
            it done for you. Allow us to make you a website at an affordable
            rate! Each package is customizable, reach out for more information
          </p>
          <br />
          <div className="flex">
            <p className="font-semibold text-[#fb5d00]">Packages:</p>
            <ul className="ml-[35px] text-[#f5f5f5]">
              <li>Website (Customize up from 3-page site)</li>
              <li>Website and updated maintenance</li>
              <li className="text-[#2d2d2d]"></li>
            </ul>
          </div>
          <div className="flex justify-end w-full mt-5 md:mt-[116px] lg:mt-[44px] xl:mt-[20px]">
            <Button variant="contained" href="/gallery">
              View Web Gallery
            </Button>
          </div>
        </div>
      </div>

      <div
        id="social"
        className="md:mb-20 mt-[8%] flex flex-wrap bg-[#2d2d2d] relative md:ml-[10%] md:mr-[5%] md:w-[35%] p-2 serve-card mx-[2.5%]"
      >
        <Image
          src={socialHome}
          alt="placeholder"
          className="bg-white w-full relative "
        />
        <div className="p-2">
          <h2 className="font-bold text-[#f5f5f5]">Social Media Promotion</h2>
          <p className="font-extralight text-[#f5f5f5]">
            In the modern market, social media is a necessity to maximize your
            {" brand's reach. Allow us to create posts and plan social media "}
            campaigns for your business. We will even teach you how to apply
            eye-catching techniques to your social media for the future! Each
            package is customizable, reach out for more information
          </p>
          <br />
          <div className="flex">
            <p className="font-semibold text-[#fb5d00]">Packages:</p>
            <ul className="ml-[35px] text-[#f5f5f5]">
              <li>Post creation & campaign direction</li>
              <li>General social media advisement</li>
              <li className="text-[#2d2d2d]"></li>
            </ul>
          </div>
          <div className="flex justify-end w-full mt-5">
            <Button variant="contained" href="/gallery">
              View Social Gallery
            </Button>
          </div>
        </div>
      </div>

      <div
        id="branding"
        className="md:mb-20 mb-4 mt-[8%] flex flex-wrap bg-[#2d2d2d] relative md:ml-[5%] md:mr-[10%] md:w-[35%] p-2 serve-card mx-[2.5%]"
      >
        <Image
          src={generalBranding}
          alt="placeholder"
          className="bg-white w-full relative "
          height={274.36}
          width={488}
        />
        <div className="p-2">
          <h2 className="font-bold text-[#f5f5f5]">General Branding</h2>
          <p className="font-extralight text-[#f5f5f5]">
            Logos, color palettes and general design for starting your brand can
            be a daunting task, but allow us to help create a brand with you
            both worthy of your business and that you can be proud of! Each
            package is customizable, reach out for more information
          </p>
          <br />
          <div className="flex">
            <p className="font-semibold text-[#fb5d00]">Packages:</p>
            <ul className="ml-[35px] text-[#f5f5f5]">
              <li>Time-based development</li>
              <li>Choice of templates</li>
              <li className="text-[#2d2d2d]"></li>
            </ul>
          </div>
          <div className="flex justify-end w-full mt-5 md:mt-[152px] lg:mt-[156px] xl:mt-[44px]">
            <Button variant="contained" href="/gallery">
              View Branding Gallery
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
