import Image from 'next/image';
import React from 'react';
import webPhoto from '../../../public/website1.png';
import social1 from '../../../public/social1.png';
import social2 from '../../../public/social2.png';
import social3 from '../../../public/social3.png';
import branding1 from '../../../public/branding1.png';
import branding2 from '../../../public/general2.png';
import branding3 from '../../../public/general3.png';
import branding4 from '../../../public/general4.png';
import branding5 from '../../../public/general5.png';
import branding6 from '../../../public/serve.png';
import Link from 'next/link';
import { BsStarFill } from 'react-icons/bs';

const Gallery = () => {
  return (
    <div className="flex flex-col">
      <div id="socialProjects" className="mt-20 pb-10 bg-[#262626]">
        <h1 className="mt-3 font-semibold w-3/6 mx-auto bg-[#434343] text-center py-2 text-2xl md:text-3xl lg:text-4xl">
          Social Media Projects
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-center">
          <div className="my-2 w-[40%] mx-[5%] bg-[#434343] flex flex-row">
            <div className="relative m-5 w-3/6">
              <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
              <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
              <Image
                src={social2}
                alt="social media photo"
                className="relative"
              />
            </div>
            <div className="social-gallery-text m-5 w-3/6">
              <div className="m-2">
                <h3 className="text-white">Speedymason Post</h3>
                <p>This is a post that was created for Speedymason.</p>
                <p className="mt-2">
                  100% of all posts created by Serve Digital Media increase that
                  businesses profit by 500%
                </p>
              </div>
            </div>
          </div>
          <div className="my-2 w-[40%] mx-[5%] bg-[#434343] flex flex-row">
            <div className="relative m-5 w-3/6">
              <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
              <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
              <Image
                src={social1}
                alt="social media photo"
                className="relative"
              />
            </div>
            <div className="social-gallery-text m-5 w-3/6 border-l border-white">
              <div className="m-2">
                <h3 className="text-white">Youth Alive Post</h3>
                <p>This is a post that was created for Youth Alive.</p>
                <p className="mt-2">
                  100% of all posts created by Serve Digital Media increase that
                  businesses profit by 500%
                </p>
              </div>
            </div>
          </div>
          <div className="my-2 w-[40%] mx-[5%] bg-[#434343] flex flex-row">
            <div className="relative m-5 w-3/6">
              <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
              <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
              <Image
                src={social3}
                alt="social media photo"
                className="relative"
              />
            </div>
            <div className="w-3/6 m-5 ">
              <div className="m-2">
                <h3 className="text-white">Youth Alive Post</h3>
                <p>This is a post that was created for Youth Alive.</p>
                <p className="mt-2">
                  100% of all posts created by Serve Digital Media increase that
                  businesses profit by 500%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] mx-auto my-5 relative bg-[#434343]">
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

      <div id="webProjects" className="flex flex-col items-center py-20">
        <h1 className="text-2xl font-semibold text-center md:text-3xl lg:text-4xl bg-[#262626] py-2 w-[80%] mx-[10%]">
          Web Design Projects
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="my-2 w-[80%] mx-[5%] bg-[#262626] flex flex-row">
            <div className="relative m-5 w-3/6">
              <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
              <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
              <Link href="https://matthewbloemke.com" target="_blank">
                <Image className="relative" src={webPhoto} alt="web photo" />
              </Link>
            </div>
            <div className="social-gallery-text m-5 w-3/6">
              <div className="m-2">
                <h3 className="text-white">Website</h3>
                <p>This is the website of the Serve Digital Media developer</p>
                <p className="mt-2">
                  100% of all websites created by Serve Digital Media increase
                  that businesses profit by 500%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-[%10] relative bg-[#262626]">
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
      <div
        id="videoProjects"
        className=" flex flex-col items-center bg-[#262626]"
      >
        <h1 className="mt-3 font-semibold w-[80%] mx-auto bg-[#434343] text-center py-2 text-2xl md:text-3xl lg:text-4xl">
          Video Projects
        </h1>
        <div className="w-[80%] mx-auto my-5 relative bg-[#434343]">
          <div className="m-2">
            <p>
              Here are some video projects that have been completed by members
              of Serve Digital Media. Here is some extra filler text to make
              this section fuller.
            </p>
            <p>
              Here is an intersting fact about video engagement, and why Serve
              Digital Media Video services are the best.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-evenly flex-wrap">
          <div className="relative mt-5">
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
          <div className="relative mt-5">
            <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
            <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
            <iframe
              className="w-[280px] h-[158px] md:w-[560px] md:h-[315px] relative"
              src="https://www.youtube.com/embed/xuwBJRVKnIE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="relative mt-5">
            <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
            <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
            <iframe
              className="w-[280px] h-[158px] md:w-[560px] md:h-[315px] relative"
              src="https://www.youtube.com/embed/Cl8-Hv3o5K0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-[80%] mx-auto my-5 relative bg-[#434343]">
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
        <h1 className="mx-[10%] w-[80%] text-center bg-[#262626] font-semibold text-2xl md:text-3xl lg:text-4xl">
          General Branding Projects
        </h1>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row  flex-wrap justify-evenly items-center">
            <div className="my-2 w-[40%] mx-[5%] bg-[#262626] flex flex-row">
              <div className="relative m-5 w-3/6">
                <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
                <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
                <Image
                  src={branding1}
                  alt="social media photo"
                  className="relative"
                />
              </div>
              <div className="social-gallery-text m-5 w-3/6">
                <div className="m-2">
                  <h3 className="text-white">Speedymason Post</h3>
                  <p>This is a post that was created for Speedymason.</p>
                  <p className="mt-2">
                    100% of all posts created by Serve Digital Media increase
                    that businesses profit by 500%
                  </p>
                </div>
              </div>
            </div>
            <div className="my-2 w-[40%] mx-[5%] bg-[#262626] flex flex-row">
              <div className="relative m-5 w-3/6">
                <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
                <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
                <Image
                  src={branding2}
                  alt="social media photo"
                  className="relative"
                />
              </div>
              <div className="social-gallery-text m-5 w-3/6">
                <div className="m-2">
                  <h3 className="text-white">Speedymason Post</h3>
                  <p>This is a post that was created for Speedymason.</p>
                  <p className="mt-2">
                    100% of all posts created by Serve Digital Media increase
                    that businesses profit by 500%
                  </p>
                </div>
              </div>
            </div>
            <div className="my-2 w-[40%] mx-[5%] bg-[#262626] flex flex-row">
              <div className="relative m-5 w-3/6">
                <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
                <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
                <Image
                  src={branding3}
                  alt="social media photo"
                  className="relative"
                />
              </div>
              <div className="social-gallery-text m-5 w-3/6">
                <div className="m-2">
                  <h3 className="text-white">Speedymason Post</h3>
                  <p>This is a post that was created for Speedymason.</p>
                  <p className="mt-2">
                    100% of all posts created by Serve Digital Media increase
                    that businesses profit by 500%
                  </p>
                </div>
              </div>
            </div>
            <div className="my-2 w-[40%] mx-[5%] bg-[#262626] flex flex-row">
              <div className="relative m-5 w-3/6">
                <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
                <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
                <Image
                  src={branding4}
                  alt="social media photo"
                  className="relative"
                />
              </div>
              <div className="social-gallery-text m-5 w-3/6">
                <div className="m-2">
                  <h3 className="text-white">Speedymason Post</h3>
                  <p>This is a post that was created for Speedymason.</p>
                  <p className="mt-2">
                    100% of all posts created by Serve Digital Media increase
                    that businesses profit by 500%
                  </p>
                </div>
              </div>
            </div>
            <div className="my-2 w-[40%] mx-[5%] bg-[#262626] flex flex-row">
              <div className="relative m-5 w-3/6">
                <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
                <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
                <Image
                  src={branding5}
                  alt="social media photo"
                  className="relative"
                />
              </div>
              <div className="social-gallery-text m-5 w-3/6">
                <div className="m-2">
                  <h3 className="text-white">Speedymason Post</h3>
                  <p>This is a post that was created for Speedymason.</p>
                  <p className="mt-2">
                    100% of all posts created by Serve Digital Media increase
                    that businesses profit by 500%
                  </p>
                </div>
              </div>
            </div>
            <div className="my-2 w-[40%] mx-[5%] bg-[#262626] flex flex-row">
              <div className="relative m-5 w-3/6">
                <div className="absolute bg-gradient-to-b from-[#fb5d00] w-[70px] h-[50px] top-[-5px] left-[-5px]" />
                <div className="absolute bg-gradient-to-t from-[#fb5d00] w-[70px] h-[50px] bottom-[-5px] right-[-5px]" />
                <Image
                  src={branding6}
                  alt="social media photo"
                  className="relative"
                />
              </div>
              <div className="social-gallery-text m-5 w-3/6">
                <div className="m-2">
                  <h3 className="text-white">Speedymason Post</h3>
                  <p>This is a post that was created for Speedymason.</p>
                  <p className="mt-2">
                    100% of all posts created by Serve Digital Media increase
                    that businesses profit by 500%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
