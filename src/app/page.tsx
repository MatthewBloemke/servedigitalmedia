'use-client';
import webDesign from '../../public/webDesign.png';
import socialHome from '../../public/socialHome.png';
import generalBranding from '../../public/generalBranding.png';
import videoHome from '../../public/videoHome.png';
import Carousel from '@/components/Carousel';
import ReviewSlider from '@/components/ReviewSlider';
import Parallax from '@/components/Parallax';
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
    relative
    w-full
    h-[100vh]
    flex flex-col md:flex-row
    items-center justify-center
    overflow-hidden
    bg-gradient-to-br from-[#8c52ff1a] via-transparent to-transparent
  "
        >
          {/* Gradient overlay for subtle depth */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#8c52ff33] via-transparent to-transparent" />

          {/* Info Section */}
          <div
            id="info"
            className="
              relative
              w-[90%] mx-[5%]
              lg:w-3/6 lg:ml-20
              mt-24 lg:mt-40
              max-w-[700px]
            "
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Serve Digital Media
            </h1>

            <h2 className="text-[#8c52ff] mt-3 text-2xl md:text-3xl font-semibold tracking-wide">
              Serving to build your brand
            </h2>

            <p className="mt-5 text-gray-300 text-base md:text-lg leading-relaxed">
              Serve Digital Media was created to serve businesses and
              individuals in building their online brand. Through services in
              social media advertising, web design, video editing, and general
              branding development, our goal is to help you maximize your reach
              in the digital space.
            </p>
          </div>

          {/* Carousel Section */}
          <div
            className="
                relative
                w-[85%] mx-auto mt-10
                md:w-[40%] md:mt-32 lg:w-[40%] lg:mr-[96px]
              "
          >
            <Carousel cardObjects={slide} buttons={buttons} />
          </div>
        </div>

        <Parallax>
          <Page />
        </Parallax>
        <div className="w-[90%] mx-auto">
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
}
