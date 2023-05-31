'use-client';
import Image from 'next/image';
import webDesign from '../../public/webDesign.png';
import socialHome from '../../public/socialHome.png';
import generalBranding from '../../public/generalBranding.png';
import videoHome from '../../public/videoHome.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div id="homePage" className="flex flex-row flex-wrap justify-evenly">
      <div className="w-[80%] md:w-[35%]">
        <div className="relative mt-5 bg-black/40">
          <Link href="/services#video">
            <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
            <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
            <Image
              src={videoHome}
              alt="placeholder"
              className="bg-white relative -z-[1] rounded-sm"
            />
          </Link>
          <h2 className="mt-[3px] w-[75%] text-xl md:text-2xl lg:text-4xl font-bold absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            Video options & packages
          </h2>
        </div>
      </div>
      <div className="w-[80%] md:w-[35%] ">
        <div className="relative mt-5 bg-black/40">
          <Link href="/services#social">
            <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
            <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
            <Image
              src={socialHome}
              alt="placeholder"
              className="bg-white relative -z-[1] rounded-sm"
            />
            <h2 className="mt-[3px] w-[75%] text-xl md:text-2xl lg:text-4xl font-bold absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
              Social media promotion options & packages
            </h2>
          </Link>
        </div>
      </div>
      <div className="w-[80%] md:w-[35%]">
        <div className="relative mt-5 bg-black/40">
          <Link href="/services#web">
            <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
            <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
            <Image
              src={webDesign}
              alt="placeholder"
              className="bg-white relative -z-[1] rounded-sm"
            />
            <h2 className="mt-[3px] w-[75%] text-xl md:text-2xl lg:text-4xl font-bold absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
              Web design options & packages
            </h2>
          </Link>
        </div>
      </div>
      <div className="w-[80%] md:w-[35%]">
        <div className="relative mt-5 bg-black/40">
          <Link href="/services#branding">
            <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
            <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
            <Image
              src={generalBranding}
              alt="placeholder"
              className="bg-white relative -z-[1] rounded-sm"
            />
            <h2 className="mt-[3px] w-[75%] text-xl md:text-2xl lg:text-4xl font-bold absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
              General branding options & packages
            </h2>
          </Link>
        </div>
      </div>
      <div className="border-2 border-white w-[80%] mx-auto mt-5 rounded-md relative bg-black/40 pb-1">
        <p className="text-6xl absolute top-[-15px] left-[-2px]">&quot;</p>
        <p className="text-6xl absolute bottom-[-41px] right-[-1px]">&quot;</p>
        <div className="flex justify-center items-center w-full text-center">
          <p className="md:text-lg mt-2 mr-2 ml-2">
            Samuel is absolutely great to work with! His professionalism is only
            rivaled by his execution and creativity. I would 10/10 hire him
            again.
          </p>
        </div>
        <div className="flex w-[80%] justify-end">
          <h4 className="md:text-2xl m-[-5px]">-Dan</h4>
        </div>
      </div>
    </div>
  );
}
