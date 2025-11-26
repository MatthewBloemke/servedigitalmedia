'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '@mui/material';

const GalleryCard = ({ title, thumbnail, onOpen }: any) => {
  return (
    <div
      className="
        bg-[rgba(30,30,30,0.55)] backdrop-blur-xl 
        border border-white/10 shadow-xl 
        p-4 space-y-3 cursor-pointer 
        transition-transform hover:scale-[1.02]
      "
      onClick={onOpen}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover rounded-sm"
        />
      </div>

      <h3 className="text-xl text-white text-center">{title}</h3>

      <div className="flex justify-center">
        <Button variant="contained">View Gallery</Button>
      </div>
    </div>
  );
};

export default GalleryCard;
