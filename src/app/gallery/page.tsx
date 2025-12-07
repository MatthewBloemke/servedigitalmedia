'use client';

import React from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';

import webPhoto from '../../../public/website1.png';
import webPhoto2 from '../../../public/lesterheatair.png';
import webPhoto3 from '../../../public/website3.png';

import social1 from '../../../public/social1.png';
import social2 from '../../../public/social2.png';
import social3 from '../../../public/social3.png';

import branding1 from '../../../public/branding1.png';
import branding2 from '../../../public/branding2.png';
import branding3 from '../../../public/branding3.png';
import branding4 from '../../../public/ServeWhite.png';
import Link from 'next/link';

const videos = [
  { id: 'v1', type: 'video', src: 'https://www.youtube.com/embed/UpFPaZmv104' },
  {
    id: 'v2',
    type: 'video',
    src: 'https://www.youtube.com/embed/AWFT2IWnP1w?si=AWQ_XKeyIkYwValV',
  },
  {
    id: 'v3',
    type: 'video',
    src: 'https://www.youtube.com/embed/sZL0A4Xf-Go?si=ptZUQwflfE24G3_m',
  },
];

const websites = [
  {
    id: 'w1',
    type: 'website',
    src: webPhoto,
    href: 'https://www.mattbloemke.com',
  },
  {
    id: 'w2',
    type: 'website',
    src: webPhoto2,
    href: 'https://www.lesterheatandair.com',
  },
  {
    id: 'w3',
    type: 'website',
    src: webPhoto3,
    href: 'https://www.studenthealthyconversations.com',
  },
];

const socials = [
  { id: 's1', type: 'image', src: social1 },
  { id: 's2', type: 'image', src: social2 },
  { id: 's3', type: 'image', src: social3 },
];

const branding = [
  { id: 'b1', type: 'image', src: branding1 },
  { id: 'b2', type: 'image', src: branding2 },
  { id: 'b3', type: 'image', src: branding3 },
  { id: 'b4', type: 'image', src: branding4 },
];

const MasonrySection = ({ items }: any) => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-10 md:space-y-4">
      {items.map((item: any) => (
        <div
          key={item.id}
          className="
            break-inside-avoid
            rounded-md
            overflow-hidden
            bg-[rgba(30,30,30,0.55)]
            backdrop-blur-xl
            border border-white/10
            shadow-lg
            transition-transform
            hover:scale-[1.02]
          "
        >
          {item.type === 'image' && (
            <Image
              src={item.src}
              alt="gallery item"
              className="w-full h-auto object-cover"
            />
          )}
          {item.type === 'website' && (
            <Link href={item.href} target="_blank">
              <Image
                src={item.src}
                alt="gallery item"
                className="w-full h-auto object-cover"
              />
            </Link>
          )}

          {item.type === 'video' && (
            <div className="aspect-video w-full bg-black/30">
              <iframe
                src={item.src}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Gallery = () => {
  return (
    <div className=" relative px-6 md:px-12 lg:px-20 pt-4 pb-20 space-y-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/textures/noise.svg')] opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#fb5d0022] via-transparent to-[#8c52ff33]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      </div>
      <div>
        <SectionHeader
          id="video"
          title="Video"
          subtitle="A selection of recent video productions created for clients across multiple industries."
        />
        <MasonrySection items={videos} />
      </div>

      <div>
        <SectionHeader
          id="web"
          title="Websites"
          subtitle="Websites are custom made for each client, hand coded by our
              subcontracted developer. Inquire to learn more about the benefits
              of this approach versus Wordpress or WIX."
        />
        <MasonrySection items={websites} />
      </div>

      <div>
        <SectionHeader
          id="social"
          title="Social Media"
          subtitle="Eye-catching social content created for engagement and brand recognition."
        />
        <MasonrySection items={socials} />
      </div>

      <div>
        <SectionHeader
          id="branding"
          title="Branding"
          subtitle="Logos, visual identities, and foundational branding elements."
        />
        <MasonrySection items={branding} />
      </div>
    </div>
  );
};

export default Gallery;
