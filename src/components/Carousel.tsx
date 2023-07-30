'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Carousel = ({ cardObjects }: any) => {
  const [activeIndex, setIndex] = useState(0);
  const [timeoutId, setTimeoutId]: any = useState(1);
  const buttons = Array.from({ length: cardObjects.length }, (x, i) => i);
  const setClass = (cardNum: number) => {
    if (cardNum === activeIndex) {
      return 'carouselActive';
    } else if (cardNum + 1 === activeIndex) {
      return 'carouselPrev';
    } else if (cardNum - 1 === activeIndex) {
      return 'carouselNext';
    } else {
      return 'carouselHidden';
    }
  };

  useEffect(() => {
    const autoPlay = () => {
      let ms = 14000;
      if (timeoutId > 0) {
        ms = 7000;
      }
      const id = setTimeout(() => {
        const newIndex = activeIndex + 1;
        setIndex(newIndex >= cardObjects.length ? 0 : newIndex);
      }, ms);
      setTimeoutId(id);
    };
    autoPlay();
  }, [cardObjects, activeIndex]);

  const handlePrevious = () => {
    clearTimeout(timeoutId);
    setTimeoutId(-1);
    const newIndex = activeIndex - 1;
    setIndex(newIndex < 0 ? cardObjects.length - 1 : newIndex);
  };

  const handleNext = () => {
    clearTimeout(timeoutId);
    setTimeoutId(-1);
    const newIndex = activeIndex + 1;
    setIndex(newIndex >= cardObjects.length ? 0 : newIndex);
  };

  const onClickIndex = (newIndex: number) => {
    clearTimeout(timeoutId);
    setTimeoutId(-1);
    setIndex(newIndex);
  };

  return (
    <div className="relative ml-20">
      <div
        onClick={handlePrevious}
        className="group absolute flex top-[50%] left-[-28px] translate-x-1/2 -translate-y-1/2 z-50 text-gray-400 h-full items-center px-2.5  hover:bg-black/20 w-[55px] cursor-pointer"
      >
        <button className="align-middle group-hover:block hidden">
          <IoIosArrowBack size="2em" />
        </button>
      </div>
      <div
        onClick={handleNext}
        className="group absolute flex top-[50%] right-[-28px] -translate-x-1/2 -translate-y-1/2 z-50 text-gray-400 h-full items-center px-2.5  hover:bg-black/20 w-[55px] cursor-pointer"
      >
        <button className="align-middle group-hover:block hidden">
          <IoIosArrowForward size="2em" />
        </button>
      </div>
      <div className="absolute flex flex-row z-50 bottom-[10px] left-[50%] -translate-x-1/2 -translate-y-1/2">
        {buttons.map((index: number) => {
          return (
            <button
              key={index}
              onClick={() => onClickIndex(index)}
              className={
                'w-[25px] h-[6px] mx-1 rounded-md ' +
                (activeIndex === index
                  ? 'bg-gray-400 scale-x-[1.25]'
                  : 'bg-gray-700')
              }
            ></button>
          );
        })}
      </div>
      {cardObjects.map((obj: any, index: number) => {
        return (
          <div
            key={index}
            className={
              'transition-opacity duration-[2500ms]' + ' ' + setClass(index)
            }
          >
            <div
              className={
                ' relative  w-full bg-black/40' + ' ' + setClass(index)
              }
            >
              <Image
                src={obj.src}
                alt={obj.alt}
                className="block w-full  relative -z-[1]"
              />
              <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
                <h4>{obj.label}</h4>
                <button className="bg-none border-solid border-[#8c52ff]">
                  {obj.button}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
