import Image from 'next/image';
import React from 'react';
import webPhoto from '../../../public/website1.png';
import webPhoto2 from '../../../public/lesterheatair.png';
import social1 from '../../../public/social1.png';
import social2 from '../../../public/social2.png';
import social3 from '../../../public/social3.png';
import branding1 from '../../../public/branding1.png';
import branding2 from '../../../public/general2.png';
import branding3 from '../../../public/general3.png';
import branding4 from '../../../public/general4.png';
import branding5 from '../../../public/general5.png';
import branding6 from '../../../public/ServeWhite.png';
import Link from 'next/link';
import { BsStarFill } from 'react-icons/bs';
import GalleryCarousel from '@/components/GalleryCarousel';
import './gallery.css';

const Gallery = () => {
  return (
    <div className="relative">
      <div className="w-[80%] mx-[10%] pt-24">
        <GalleryCarousel />
      </div>
    </div>
  );
};

export default Gallery;
