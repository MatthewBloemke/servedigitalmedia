// components/Parallax.js
'use client';
import React from 'react';
import { useParallax } from 'react-scroll-parallax';

const ParallaxScroll = ({ children }: any) => {
  const parallax = useParallax<HTMLDivElement>({
    speed: 20,
  });
  return <div ref={parallax.ref}>{children}</div>;
};

export default ParallaxScroll;
