import Image from 'next/image';
import React from 'react';
import webPhoto from '../../../public/website1.png';
import webPhoto2 from '../../../public/lesterheatair.png';
import social1 from '../../../public/social1.png';
import social2 from '../../../public/social2.png';
import social3 from '../../../public/social3.png';
import branding1 from '../../../public/branding1.png';
import branding2 from '../../../public/general2.png';
import branding3 from '../../../public/general3.png';
import branding4 from '../../../public/general4.png';
import branding5 from '../../../public/general5.png';
import branding6 from '../../../public/ServeWhite.png';
import Link from 'next/link';
import { BsStarFill } from 'react-icons/bs';

const Gallery = () => {
  return (
    <div className="flex flex-col">
      <div id="socialProjects" className="mt-20 pb-10 bg-[#121212] relative">
        <h1 className="mt-3 font-semibold w-[90%] mx-[5%] bg-[#1c1c1c] text-center py-2 text-2xl md:text-3xl lg:text-4xl">
          Social Media Projects
        </h1>
        <div className="w-[90%] mx-auto my-5 relative bg-[#1c1c1c]">
          <div className="m-2 p-3 text-center">
            <p>
              Social media posts are made custom for each client according to
              their {"brand's"} identity.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-center mt-5">
          <div className="my-2 mx-[5%] md:mx-2 bg-[#1c1c1c] flex flex-row flex-wrap md:flex-nowrap">
            <div className="relative m-5 ">
              <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
              <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
              <Image
                src={social2}
                alt="social media photo"
                className="relative w-auto max-h-[300px]"
              />
            </div>
          </div>
          <div className="my-2 mx-[5%] md:mx-2 bg-[#1c1c1c] flex flex-row flex-wrap md:flex-nowrap">
            <div className="relative m-5">
              <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
              <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
              <Image
                src={social1}
                alt="social media photo"
                className="relative w-auto max-h-[300px]"
              />
            </div>
          </div>
          <div className="my-2 mx-[5%] md:mx-2 bg-[#1c1c1c] flex flex-row flex-wrap md:flex-nowrap">
            <div className="relative m-5">
              <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
              <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
              <Image
                src={social3}
                alt="social media photo"
                className="relative w-auto max-h-[300px]"
              />
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-auto my-5 relative bg-[#1c1c1c]">
          <p className="text-6xl absolute top-[-15px] left-[-2px]"></p>
          <p className="text-6xl absolute bottom-[-41px] right-[-1px]"></p>
          <div className="flex justify-center items-center w-full text-center">
            <p className="md:text-lg m-2">
              &quot; Samuel is absolutely great to work with! His
              professionalism is only rivaled by his execution and creativity. I
              would 10/10 hire him again. &quot;
            </p>
          </div>
          <div className="flex w-[80%] justify-end">
            <h4 className="md:text-2xl">-Dan</h4>
            <div className="flex flex-row justify-center mt-[5px] ml-3">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>

      <div id="webProjects" className="flex flex-col items-center py-20">
        <h1 className="text-2xl font-semibold text-center md:text-3xl lg:text-4xl bg-[#121212] py-2 w-[80%] mx-[10%] relative">
          Web Design Projects
        </h1>
        <div className="w-[80%] mx-auto my-5 relative bg-[#121212]">
          <div className="m-2 p-3 text-center">
            <p>
              Websites are custom made for each client, hand coded by our
              subcontracted developer. Inquire to learn more about the benefits
              of this approach versus Wordpress or WIX.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center relative">
          <div className="my-2 w-[80%] mx-[5%] md:w-[40%] md:mx-[5%] bg-[#121212] flex flex-row flex-wrap md:flex-nowrap">
            <div className="relative m-5">
              <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
              <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
              <Link href="https://matthewbloemke.com" target="_blank">
                <Image className="relative" src={webPhoto} alt="web photo" />
              </Link>
            </div>
          </div>
          <div className="my-2 w-[80%] mx-[5%] md:w-[40%] md:mx-[5%] bg-[#121212] flex flex-row flex-wrap md:flex-nowrap">
            <div className="relative m-5">
              <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
              <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
              <Link href="https://lesterheatandair.com" target="_blank">
                <Image className="relative" src={webPhoto2} alt="web photo" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-[%10] relative bg-[#121212]">
          <div className="flex justify-center items-center w-full text-center">
            <p className="md:text-lg m-2">
              &quot;Matt did an awesome job creating our inventory program. It
              has worked flawlessly and is a huge time saver. We would
              definitely recommend him for any software design
              applications.&quot;
            </p>
          </div>
          <div className="flex w-[80%] justify-end">
            <h4 className="md:text-2xl">-Dale</h4>
            <div className="flex flex-row justify-center mt-[5px] ml-3">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="videoProjects"
        className=" flex flex-col items-center bg-[#121212] relative"
      >
        <h1 className="mt-3 font-semibold w-[80%] mx-auto bg-[#1c1c1c] text-center py-2 text-2xl md:text-3xl lg:text-4xl">
          Video Projects
        </h1>
        <div className="w-[80%] mx-auto my-5 relative bg-[#1c1c1c]">
          <div className="m-2 p-2 text-center">
            <p>
              Video projects are made to showcase each {"client's"} brand in an
              engaging way for brand awareness and prospect understanding of the
              brand
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-evenly flex-wrap">
          <div className="relative mt-5 mx-[1%]">
            <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
            <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />{' '}
            <iframe
              className="w-[280px] h-[158px] md:w-[560px] md:h-[315px] relative"
              src="https://www.youtube.com/embed/UpFPaZmv104"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="relative mt-5 mx-[1%]">
            <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
            <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
            <iframe
              className="w-[280px] h-[158px] md:w-[560px] md:h-[315px] relative"
              src="https://www.youtube.com/embed/AWFT2IWnP1w?si=AWQ_XKeyIkYwValV"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="relative mt-5 mx-[1%]">
            <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
            <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
            <iframe
              className="w-[280px] h-[158px] md:w-[560px] md:h-[315px] relative"
              src="https://www.youtube.com/embed/sZL0A4Xf-Go?si=ptZUQwflfE24G3_m"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-[80%] mx-auto my-5 relative bg-[#1c1c1c]">
          <div className="flex justify-center items-center w-full text-center">
            <p className="md:text-lg m-2">
              &quot;Samuel was phenomenal to work with! He took the pieces and
              fragmented ideas I started with and created a beautiful piece that
              represent me and my work well!&quot;
            </p>
          </div>
          <div className="flex w-[80%] justify-end">
            <h4 className="md:text-2xl">-Jessica</h4>
            <div className="flex flex-row justify-center mt-2 ml-3">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>

      <div id="brandingProjects" className="py-12">
        <h1 className="mx-[5%] w-[90%] text-center bg-[#121212] py-2 font-semibold text-2xl md:text-3xl lg:text-4xl relative">
          General Branding Projects
        </h1>
        <div className="w-[90%] mx-auto my-5 relative bg-[#121212]">
          <div className="m-2 p-2 text-center">
            <p>
              Branding is important for marketing consistency as well as
              building a positive image to prospects.
            </p>
          </div>
        </div>
        <div className="flex flex-col relative">
          <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-center">
            <div className="my-2 w-[90%] mx-[5%] md:w-[27%] md:mx-[3%] bg-[#121212] flex flex-row flex-wrap md:flex-nowrap">
              <div className="relative m-5">
                <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
                <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
                <Image
                  src={branding1}
                  alt="social media photo"
                  className="relative bg-[#121212]"
                />
              </div>
            </div>
            <div className="my-2 w-[90%] mx-[5%] md:w-[27%] md:mx-[3%] bg-[#121212] flex flex-row flex-wrap md:flex-nowrap">
              <div className="relative m-5">
                <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
                <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
                <Image
                  src={branding2}
                  alt="social media photo"
                  className="relative bg-[#121212]"
                />
              </div>
            </div>
            <div className="my-2 w-[90%] mx-[5%] md:w-[27%] md:mx-[3%] bg-[#121212] flex flex-row flex-wrap md:flex-nowrap">
              <div className="relative m-5">
                <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
                <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
                <Image
                  src={branding3}
                  alt="social media photo"
                  className="relative bg-[#121212]"
                />
              </div>
            </div>
            <div className="my-2 w-[90%] mx-[5%] md:w-[27%] md:mx-[3%] bg-[#121212] flex flex-row flex-wrap md:flex-nowrap">
              <div className="relative m-5">
                <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
                <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
                <Image
                  src={branding4}
                  alt="social media photo"
                  className="relative bg-[#121212]"
                />
              </div>
            </div>
            <div className="my-2 w-[90%] mx-[5%] md:w-[27%] md:mx-[3%] bg-[#121212] flex flex-row flex-wrap md:flex-nowrap">
              <div className="relative m-5">
                <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
                <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
                <Image
                  src={branding5}
                  alt="social media photo"
                  className="relative bg-[#121212]"
                />
              </div>
            </div>
            <div className="my-2 w-[90%] mx-[5%] md:w-[27%] md:mx-[3%] bg-[#121212] flex flex-row flex-wrap md:flex-nowrap items-center">
              <div className="relative m-5">
                <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
                <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
                <Image
                  src={branding6}
                  alt="social media photo"
                  className="relative bg-[#121212]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
