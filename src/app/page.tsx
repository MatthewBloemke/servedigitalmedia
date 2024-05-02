'use-client';
import webDesign from '../../public/webDesign.png';
import socialHome from '../../public/socialHome.png';
import generalBranding from '../../public/generalBranding.png';
import videoHome from '../../public/videoHome.png';
import Carousel from '@/components/Carousel';
import ReviewSlider from '@/components/ReviewSlider';

export default function Home() {
  const slide = [
    {
      id: 1,
      src: videoHome,
      alt: 'Video',
      label: 'Video Editing',
      button: 'View Video Editing Services',
      href: '/services#video',
    },
    {
      id: 2,
      src: webDesign,
      alt: 'Web',
      label: 'Web Design',
      button: 'View Web Design Services',
      href: '/services#web',
    },
    {
      id: 3,
      src: socialHome,
      alt: 'social',
      label: 'Social Media',
      button: 'View Social Media Services',
      href: '/services#social',
    },
    {
      id: 4,
      src: generalBranding,
      alt: 'General branding',
      label: 'General Branding',
      button: 'View General Branding Services',
      href: '/services#branding',
    },
  ];
  const buttons = [0, 1, 2, 3];
  return (
    <div id="home-page" className="100vh">
      <div id="home" className="w-full flex flex-row flex-wrap md:flex-nowrap">
        <div
          id="info"
          className="w-[90&] mx-[5%] md:mr-0 mt-[70px] md:mt-[78px] lg:w-3/6 lg:ml-20 lg:mt-32 lg:mr-4 relative"
        >
          <h1 className="text-4xl md:text-[40px] lg:text-6xl">
            Serve Digital Media
          </h1>
          <h2 className="text-[#8c52ff] mt-[8px] magic">
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
        <div className="w-[80%] mx-[10%] md:mx-4 md:w-[40%] md:mt-32 lg:w-[40%] lg:mr-[96px] mt-5 lg:mt-32 lg:ml-12">
          <Carousel cardObjects={slide} buttons={buttons} />
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-10">
        <ReviewSlider />
      </div>
    </div>
  );
}
