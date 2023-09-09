'use-client';
import { BsStarFill } from 'react-icons/bs';
import DefaultCarousel from '@/components/Carousel';

export default function Home() {
  return (
    <div id="home-page" className="100vh">
      <div id="home" className="w-full flex flex-row flex-wrap md:flex-nowrap">
        <div
          id="info"
          className="w-[90&] mx-[5%] mt-20 md:w-3/6 md:ml-20 md:mt-40 md:mr-4"
        >
          <h1>Serve Digital Media</h1>
          <h2 className="text-[#8c52ff] mt-[8px]">
            Serving to build your brand
          </h2>
          <p className="mt-[8px]">
            Serve Digital Media was created to serve businesses and individuals
            in building their online brand. Through services in social media
            advertising, web design, video editing, and general branding
            development, our goal is to help you maximize your reach in the
            digital space.
          </p>
        </div>
        <div className="w-[90&] mx-[5%] md:w-3/6 items-center justify-center flex md:mr-[96px] mt-5 md:mt-40 md:ml-12">
          <DefaultCarousel />
        </div>
      </div>
      <div className="bg-[#121212] md:w-[60%] md:mx-[20%] px-4 mt-8 relative pb-1 md:mb-10">
        <div className="flex justify-center items-center w-full text-center">
          <p className="md:text-lg mt-2 mr-2 ml-2">
            <span className="">&quot;</span> Samuel is absolutely great to work
            with! His professionalism is only rivaled by his execution and
            creativity. I would 10/10 hire him again.
            <span className="">&quot;</span>
          </p>
        </div>
        <div className="flex w-[80%] justify-end mb-1">
          <h4 className="md:text-2xl m-[-5px] text-white">-Dan</h4>
          <div className="flex flex-row justify-center mt-[3px] ml-4">
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
