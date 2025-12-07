import React from 'react';
import ServiceCard from '@/components/ServiceCard';

import webDesign from '../../../public/webDesign.png';
import socialHome from '../../../public/socialHome.png';
import generalBranding from '../../../public/generalBranding.png';
import videoHome from '../../../public/videoHome.png';

const Page = () => {
  const services = [
    {
      id: 'video',
      title: 'Video',
      image: videoHome,
      link: '/gallery#video',
      description:
        'When competing for attention in the modern market, video helps you stand out and connect with your audience before that initial contact.',
      packages: [
        'Promotional video package (1–2 minutes)',
        'Shorts/Reels package (under 60 seconds)',
        'Long-form video package (3+ minutes)',
      ],
    },
    {
      id: 'web',
      title: 'Web Design',
      image: webDesign,
      link: '/gallery#web',
      description:
        'Websites are essential for promoting your brand—but professional sites can be expensive. We create high-quality, affordable websites tailored to your needs.',
      packages: [
        'Custom Website (starting from a 3-page site)',
        'Website + ongoing maintenance',
      ],
    },
    {
      id: 'social',
      title: 'Social Media Promotion',
      image: socialHome,
      link: '/gallery#social',
      description:
        'Social media is vital for reach. We create posts, plan campaigns, and teach techniques that make your content stand out.',
      packages: [
        'Post creation & campaign direction',
        'General social media advisement',
      ],
    },
    {
      id: 'branding',
      title: 'General Branding',
      image: generalBranding,
      link: '/gallery#branding',
      description:
        "Logos, palettes, and brand design can be overwhelming. Let us help build a brand identity that you're proud of.",
      packages: ['Time-based development', 'Template selection options'],
    },
  ];

  return (
    <div className="relative px-6 md:px-12 lg:px-20 pt-24 pb-10">
      {/* Backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/textures/noise.svg')] opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#fb5d0022] via-transparent to-[#8c52ff33]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      <div
        id="servicesPage"
        className="
          relative 
          grid
          grid-cols-1 
          md:grid-cols-2
          gap-12
        "
      >
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Page;
