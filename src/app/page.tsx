'use-client';
import Image from 'next/image';
import webDesign from '../../public/webDesign.png';
import socialHome from '../../public/socialHome.png';
import generalBranding from '../../public/generalBranding.png';
import videoHome from '../../public/videoHome.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div id="homePage">
      <div className="flex flex-row justify-evenly m-5 flex-wrap mt-5">
        <div className="w-[80%] md:w-[35%]">
          <div className="relative mt-5 bg-black/40">
            <Link href="/services#video">
              <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
              <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
              <Image
                src={videoHome}
                alt="placeholder"
                className="bg-white relative -z-[1] rounded-sm"
              />
            </Link>
            <h2 className="mt-[3px] w-[75%] text-xl md:text-4xl font-bold absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
              Video options & packages
            </h2>
          </div>
        </div>
        <div className="w-[80%] md:w-[35%] ">
          <div className="relative mt-5 bg-black/40">
            <Link href="/services#social">
              <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
              <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
              <Image
                src={socialHome}
                alt="placeholder"
                className="bg-white relative -z-[1] rounded-sm"
              />
              <h2 className="mt-[3px] w-[75%] text-xl md:text-4xl font-bold absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                Social media promotion options & packages
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly m-5 flex-wrap mt-5">
        <div className="w-[80%] md:w-[35%]">
          <div className="relative mt-5 bg-black/40">
            <Link href="/services#web">
              <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
              <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
              <Image
                src={webDesign}
                alt="placeholder"
                className="bg-white relative -z-[1] rounded-sm"
              />
              <h2 className="mt-[3px] w-[75%] text-xl md:text-4xl font-bold absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                Web design options & packages
              </h2>
            </Link>
          </div>
        </div>
        <div className="w-[80%] md:w-[35%]">
          <div className="relative mt-5 bg-black/40">
            <Link href="/services#branding">
              <div className="absolute bg-gradient-to-b from-[#ff8c52] w-[70px] h-[50px] top-[-5px] left-[-5px] z-[-1] rounded-sm" />
              <div className="absolute bg-gradient-to-t from-[#ff8c52] w-[70px] h-[50px] bottom-[-5px] right-[-5px] z-[-1] rounded-sm" />
              <Image
                src={generalBranding}
                alt="placeholder"
                className="bg-white relative -z-[1] rounded-sm"
              />
              <h2 className="mt-[3px] w-[75%] text-xl md:text-4xl font-bold absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                General branding options & packages
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full mt-5">
        <p className="md:text-lg m-5">
          &quot;Samuel is absolutely great to work with! His professionalism is
          only rivaled by his execution and creativity. I would 10/10 hire him
          again&quot;
        </p>
      </div>
      <div className="flex w-[80%] justify-end">
        <h4 className="md:text-2xl mb-5">-Dan</h4>
      </div>
    </div>
  );
}
