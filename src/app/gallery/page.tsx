import Image from 'next/image';
import React from 'react';
import webPhoto from '../../../public/website1.png';
import social1 from '../../../public/social1.png';
import social3 from '../../../public/social3.png';
import branding2 from '../../../public/general2.png';
import branding3 from '../../../public/general3.png';
import branding4 from '../../../public/general4.png';
import branding5 from '../../../public/general5.png';
import branding6 from '../../../public/serve.png';
import placeHolder from '../../../public/placeholder.png';
import Link from 'next/link';

const Gallery = () => {
  return (
    <div className="flex flex-col">
      <div id="videoProjects" className="my-12">
        <h1 className="ml-[5%]">Video Projects</h1>
        <div className="flex flex-col md:flex-row items-center justify-evenly flex-wrap">
          <div className="relative mt-5">
            <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
            <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
            <iframe
              className="w-[280px] h-[158px] md:w-[560px] md:h-[315px] rounded-sm"
              src="https://www.youtube.com/embed/UpFPaZmv104"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="relative mt-5">
            <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
            <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
            <iframe
              className="w-[280px] h-[158px] md:w-[560px] md:h-[315px] rounded-sm"
              src="https://www.youtube.com/embed/xuwBJRVKnIE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="relative mt-5">
            <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
            <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
            <iframe
              className="w-[280px] h-[158px] md:w-[560px] md:h-[315px] rounded-sm"
              src="https://www.youtube.com/embed/Cl8-Hv3o5K0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="border-2 border-white w-[80%] mx-auto mt-5 rounded-md relative bg-black/40">
          <p className="text-6xl absolute top-[-15px] left-[-2px]">&quot;</p>
          <p className="text-6xl absolute bottom-[-41px] right-[-1px]">
            &quot;
          </p>
          <div className="flex justify-center items-center w-full text-center">
            <p className="md:text-lg m-2">
              Samuel is absolutely great to work with! His professionalism is
              only rivaled by his execution and creativity. I would 10/10 hire
              him again.
            </p>
          </div>
          <div className="flex w-[80%] justify-end">
            <h4 className="md:text-2xl">-Dan</h4>
          </div>
        </div>
      </div>
      <div id="webProjects" className="my-12">
        <h1 className="ml-[5%]">Web Design Projects</h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="relative mt-5 w-[80%] md:w-[40%]">
            <Link href="https://matthewbloemke.com" target="_blank">
              <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
              <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
              <Image
                className="w-full rounded-sm"
                src={webPhoto}
                alt="web photo"
              />
            </Link>
          </div>
        </div>
        <div className="border-2 border-white w-[80%] mx-auto mt-5 rounded-md relative bg-black/40">
          <p className="text-6xl absolute top-[-15px] left-[-2px]">&quot;</p>
          <p className="text-6xl absolute bottom-[-41px] right-[-1px]">
            &quot;
          </p>
          <div className="flex justify-center items-center w-full text-center">
            <p className="md:text-lg m-2">
              Here is a nice long example about why Samuel is the greatest to
              work with. He is very professional and punctual, and is great to
              work with.
            </p>
          </div>
          <div className="flex w-[80%] justify-end">
            <h4 className="md:text-2xl">-Person</h4>
          </div>
        </div>
      </div>
      <div id="socialProjects" className="my-12">
        <h1 className="ml-[5%]">Social Media Projects</h1>
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="relative mt-5 w-[80%] md:w-[30%] bg-white rounded-sm">
            <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
            <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
            <Image
              src={placeHolder}
              className="max-h-[300px] w-auto m-auto rounded-sm"
              alt="social media photo"
            />
          </div>
          <div className="relative mt-5 w-[80%] md:w-[30%] bg-black rounded-sm">
            <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
            <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
            <Image
              src={social1}
              className="max-h-[300px] w-auto m-auto rounded-sm"
              alt="social media photo"
            />
          </div>
          <div className="relative mt-5 w-[80%] md:w-[30%] bg-black rounded-sm">
            <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
            <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
            <Image
              src={social3}
              className="max-h-[300px] w-auto m-auto my-auto rounded-sm"
              alt="social media photo"
            />
          </div>
        </div>
        <div className="border-2 border-white w-[80%] mx-auto mt-5 rounded-md relative bg-black/40">
          <p className="text-6xl absolute top-[-15px] left-[-2px]">&quot;</p>
          <p className="text-6xl absolute bottom-[-41px] right-[-1px]">
            &quot;
          </p>
          <div className="flex justify-center items-center w-full text-center">
            <p className="md:text-lg m-2">
              Here is a nice long example about why Samuel is the greatest to
              work with. He is very professional and punctual, and is great to
              work with.
            </p>
          </div>
          <div className="flex w-[80%] justify-end">
            <h4 className="md:text-2xl">-Person</h4>
          </div>
        </div>
      </div>
      <div id="brandingProjects" className="my-12">
        <h1 className="ml-[5%]">General Branding Projects</h1>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row justify-evenly items-center">
            <div className="relative mt-5 w-[80%] md:w-[30%] bg-white flex justify-center align-center rounded-sm">
              <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
              <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
              <Image
                src={placeHolder}
                className="max-h-[300px] w-auto m-auto rounded-sm"
                alt="general branding photo"
              />
            </div>
            <div className="relative mt-5 w-[80%] md:w-[30%] bg-black flex justify-center align-center rounded-sm">
              <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
              <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
              <Image
                src={branding2}
                className="max-h-[300px] w-auto m-auto rounded-sm"
                alt="general branding photo"
              />
            </div>
            <div className="relative mt-5 w-[80%] md:w-[30%] bg-black flex justify-center align-center rounded-sm">
              <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
              <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
              <Image
                src={branding3}
                className="max-h-[300px] w-auto m-auto rounded-sm"
                alt="general branding photo"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-center">
            <div className="relative mt-5 w-[80%] md:w-[30%] bg-black flex justify-center align-center rounded-sm">
              <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
              <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
              <Image
                src={branding4}
                className="max-h-[300px] w-auto m-auto rounded-sm"
                alt="general branding photo"
              />
            </div>
            <div className="relative mt-5 w-[80%] md:w-[30%] bg-black flex justify-center align-center rounded-sm">
              <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
              <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
              <Image
                src={branding5}
                className="max-h-[300px] w-auto m-auto rounded-sm"
                alt="general branding photo"
              />
            </div>
            <div className="relative mt-5 w-[80%] md:w-[30%] bg-black flex justify-center align-center rounded-sm">
              <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
              <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
              <Image
                src={branding6}
                className="max-h-[300px] w-auto rounded-sm"
                alt="general branding photo"
              />
            </div>
          </div>
        </div>
        <div className="border-2 border-white w-[80%] mx-auto mt-5 rounded-md relative bg-black/40">
          <p className="text-6xl absolute top-[-15px] left-[-2px]">&quot;</p>
          <p className="text-6xl absolute bottom-[-41px] right-[-1px]">
            &quot;
          </p>
          <div className="flex justify-center items-center w-full text-center">
            <p className="md:text-lg m-2">
              Here is a nice long example about why Samuel is the greatest to
              work with. He is very professional and punctual, and is great to
              work with.
            </p>
          </div>
          <div className="flex w-[80%] justify-end">
            <h4 className="md:text-2xl">-Person</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
