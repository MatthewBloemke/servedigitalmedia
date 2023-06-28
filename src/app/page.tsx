'use-client';
import Image from 'next/image';
import webDesign from '../../public/webDesign.png';
import socialHome from '../../public/socialHome.png';
import generalBranding from '../../public/generalBranding.png';
import videoHome from '../../public/videoHome.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div id='home' className='w-full flex flex-row'>
        <div id='info' className='w-3/6 m-40'>
          <h1>Serve Digital Media</h1>
          <h2 className='text-[#8c52ff] mt-[8px]'>Serving to build your brand</h2>
          <p className='mt-[8px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec ultrices dui sapien eget mi proin. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. At lectus urna duis convallis convallis tellus id interdum. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.</p>
        </div>
        <div  className='w-3/6 items-center justify-center flex mr-[96px] mt-[48px]'>
          {/* First item */}
          <div className='relative rounded-md w-full  bg-black/40'>
            <Image src={webDesign} alt='Web design photo' className='block w-full rounded-md relative -z-[1]'/>
            <div className='absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block'>
              <h4>Web Design Services</h4>
              <button className='bg-none border-solid border-[#8c52ff]'>View web design services</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-white w-[60%] mx-auto mt-5 rounded-md relative bg-black/40 pb-1">
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
          <h4 className="md:text-2xl m-[-5px] text-white">-Dan</h4>
        </div>
      </div>
    </div>
  );
}
