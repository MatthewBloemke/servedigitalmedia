import React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';

const ServiceCard = ({
  id,
  title,
  description,
  packages,
  image,
  link,
}: any) => {
  return (
    <div
      id={id}
      className="
        bg-[rgba(30,30,30,0.55)]
        backdrop-blur-xl
        border border-white/10
        shadow-xl
        overflow-hidden
        flex flex-col
        md:h-full
        md:max-h-[75vh]
        serve-card
      "
    >
      <div className="h-48 sm:h-56 md:h-64 w-full overflow-hidden">
        <Image src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 flex flex-col md:h-full">
        <h2 className="text-xl font-bold text-white mb-2">{title}</h2>

        <p className="text-gray-300 leading-relaxed font-light text-[0.95rem] min-h-[90px]">
          {description}
        </p>

        <div className="mt-3 space-y-1 md:min-h-[110px]">
          <p className="font-semibold text-[#fb5d00] text-[0.95rem]">
            Packages:
          </p>

          <ul className="ml-4 text-gray-300 list-disc text-[0.95rem] space-y-1">
            {packages.map((p: any, i: any) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="w-full flex justify-end mt-auto pt-4">
          <Button href={link} variant="contained" style={{ borderRadius: 28 }}>
            View {id} Gallery
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
