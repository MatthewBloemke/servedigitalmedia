'use-client';
import webDesign from '../../public/webDesign.png';
import socialHome from '../../public/socialHome.png';
import generalBranding from '../../public/generalBranding.png';
import videoHome from '../../public/videoHome.png';
import Carousel from '@/components/Carousel';
import ReviewSlider from '@/components/ReviewSlider';
import Page from './services/page';

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
    <div className="overflow-hidden">
      <div id="home-page">
        <div
          id="home"
          className="
            relative w-full h-full md:h-[100vh]
            flex flex-col md:flex-row
            items-center justify-center
            overflow-hidden
          "
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[url('/textures/noise.svg')] opacity-[0.08]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8c52ff33] via-transparent to-[#fb5d0022]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
          </div>

          <div
            id="info"
            className="
              relative
              w-[90%] mx-[5%]
              lg:w-3/6 lg:ml-20
              mt-20 md:mt-32
              max-w-[700px]
            "
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-[0_0_15px_rgba(140,82,255,0.2)]">
              Serve Digital Media
            </h1>

            <h2 className="text-[#8c52ff] mt-3 text-[22px] md:text-3xl font-semibold tracking-wide magic">
              Serving to build your brand
            </h2>

            <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed max-w-[550px]">
              Serve Digital Media was created to serve businesses and
              individuals in building their online brand. Through services in
              social media advertising, web design, video editing, and general
              branding development, our goal is to help you maximize your reach
              in the digital space.
            </p>
          </div>

          <div
            className="
              relative
              w-[85%] mx-auto mt-10
              md:w-[40%] md:mt-24 lg:w-[40%] lg:mr-[96px]
            "
          >
            <div className="h-full">
              <Carousel cardObjects={slide} buttons={buttons} />
            </div>
          </div>
        </div>

        <Page />

        <ReviewSlider />
      </div>
    </div>
  );
}
