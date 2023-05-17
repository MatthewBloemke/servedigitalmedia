import React from 'react';
import Image from 'next/image';
import placeholder from '../../../public/placeholder.png';
import Link from 'next/link';

const Page = () => {
  return (
    <div id="servicesPage" className="flex flex-col">
      <div className="my-10 flex flex-wrap flex-row md:flex-nowrap">
        <div id="video" className="m-8">
          <h2 className="font-bold">Video</h2>
          <p className="font-extralight">
            When competing for attention in the modern market, video helps you
            stand out from the rest of the world with the opportunity for your
            audience to connect with you before making that initial contact.
            Make a splash with this personal marketing tool!
          </p>
          <div className="flex">
            <p className="font-semibold text-[#ff8c52]">Packages:</p>
            <ul className="ml-[35px]">
              <li>Promotional video package (1 - 2 minute video)</li>
              <li>Shorts/Reels package (under 60 second video)</li>
              <li>Long form video package (3+ minute video)</li>
            </ul>
          </div>
          <p className="text-[#ff8c52]">
            Each package is customizable according to the following options:
          </p>
          <p className="font-extralight">
            -Edit existing clips or shoot and edit new video -Number of drafts
            for revision (three drafts included) -Expedited production time
            -Social media integration advising -Audio options (music, narration,
            etc.) -Additional graphics (beyond what is standard)
          </p>
          <div className="flex justify-center w-full my-5">
            <Link href="/gallery#videoProjects">
              <button className="hover:shadow-white">View Video Gallery</button>
            </Link>
          </div>
        </div>
        <div className="w-[90%] m-[15px]">
          <div className="relative">
            <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1]" />
            <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1]" />
            <Image
              src={placeholder}
              height={225}
              alt="placeholder"
              className="bg-white w-full relative -z-[1]"
            />
          </div>
          <h2 className="text-[#ff8c52]">Packages starting at $100*</h2>
        </div>
      </div>

      <div
        id="web"
        className="my-14 flex flex-wrap flex-col-reverse md:flex-row md:flex-nowrap"
      >
        <div className="w-[90%] m-[15px]">
          <div className="relative">
            <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1]" />
            <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1]" />
            <Image
              src={placeholder}
              height={225}
              alt="placeholder"
              className="bg-white w-full relative -z-[1]"
            />
          </div>
          <h2 className="text-[#ff8c52]">Packages starting at $450*</h2>
        </div>
        <div className="m-[15px]">
          <h2 className="font-bold">Web Design</h2>
          <p className="font-extralight">
            Websites are the best way for you to promote your brand, but it can
            be hard to make one look professional without paying a lot to have
            it done for you. Allow us to make you a website at an affordable
            rate!
          </p>
          <div className="flex">
            <p className="font-semibold text-[#ff8c52]">Packages:</p>
            <ul className="ml-[35px]">
              <li>Website (Customize up from 3-page site)</li>
              <li>Website and updated maintenance</li>
            </ul>
          </div>
          <p className="text-[#ff8c52]">
            Each package is customizable according to the following options:
          </p>
          <p className="font-extralight">
            -Number of pages on website -Number of drafts for revision (three
            drafts included) -Email and plug-in options -Social media
            integration -Domain cost options
          </p>
          <div className="flex justify-center w-full my-5">
            <Link href="/gallery#webProjects">
              <button className="hover:shadow-white">View Web Gallery</button>
            </Link>
          </div>
        </div>
      </div>

      <div id="social" className="my-14 flex flex-wrap flex-row md:flex-nowrap">
        <div className="m-[15px]">
          <h2 className="font-bold">Social Media Promotion</h2>
          <p className="font-extralight">
            In the modern market, social media is a necessity to maximize your
            {" brand's reach. Allow us to create posts and plan social media "}
            campaigns for your business. We will even teach you how to apply
            eye-catching techniques to your social media for the future!
          </p>
          <div className="flex">
            <p className="font-semibold text-[#ff8c52]">Packages:</p>
            <ul className="ml-[35px]">
              <li>Post creation & campaign direction</li>
              <li>General social media advisement</li>
            </ul>
          </div>
          <p className="text-[#ff8c52]">
            Each package is customizable according to the following options:
          </p>
          <p className="font-extralight">
            -Creation of individual posts -Planning of social media campaigns
            -Advisement on maximizing social media reach -Number of social media
            platforms to work with (YouTube, Facebook, Instagram, etc.)
          </p>
          <div className="flex justify-center w-full my-5">
            <Link href="/gallery#socialProjects">
              <button className="hover:shadow-white">
                View Social Gallery
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[90%] m-[15px]">
          <div className="relative">
            <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1]" />
            <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1]" />
            <Image
              src={placeholder}
              height={225}
              alt="placeholder"
              className="bg-white w-full relative -z-[1]"
            />
          </div>
          <h2 className="text-[#ff8c52]">Packages starting at $50*</h2>
        </div>
      </div>

      <div
        id="branding"
        className="my-14 flex flex-wrap flex-col-reverse md:flex-row md:flex-nowrap"
      >
        <div className="w-[90%] m-[15px]">
          <div className="relative">
            <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1]" />
            <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1]" />
            <Image
              src={placeholder}
              height={225}
              alt="placeholder"
              className="bg-white w-full relative -z-[1]"
            />
          </div>
          <h2 className="text-[#ff8c52]">Packages starting at $100*</h2>
        </div>
        <div className="m-[15px]">
          <h2 className="font-bold">General Branding</h2>
          <p className="font-extralight">
            Logos, color palettes and general design for starting your brand can
            be a daunting task, but allow us to help create a brand with you
            both worthy of your business and that you can be proud of!
          </p>
          <div className="flex">
            <p className="font-semibold text-[#ff8c52]">Packages:</p>
            <ul className="ml-[35px]">
              <li>Time-based development</li>
              <li>Choice of templates</li>
            </ul>
          </div>
          <p className="text-[#ff8c52]">
            Each package is customizable according to the following options:
          </p>
          <p className="font-extralight">
            -Design of logo or specific visual assets -Number of drafts for
            revision (three drafts included) -Advisement on brand protection
            -Design of sales merchandise and promotional tools
          </p>
          <div className="flex justify-center w-full my-5">
            <Link href="/gallery#brandingProjects">
              <button className="hover:shadow-white">
                View Branding Gallery
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full my-[10px]">
        <h1 className="text-3xl md:text-4xl mx-[5%]">
          Email us at <span className="text-[#ff8c52]">info@servedm.com</span>{' '}
          for specific pricing
        </h1>
      </div>
      <div className="flex items-center justify-center w-full my-[5px]">
        <p className="text-[#ff8c52] mx-[10%]">
          *Price represents the lowest level of the lowest package. Package
          pricing is subject to change upon adding additional benefits. Please
          contact us for pricing to fit your budget and desired product.
        </p>
      </div>
    </div>
  );
};

export default Page;
