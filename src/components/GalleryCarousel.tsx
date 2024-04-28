'use client';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

const categories: string[] = [
  'Web Design',
  'Social Media',
  'General Branding',
  'Video Design',
];

type Category =
  | 'Web Design'
  | 'Social Media'
  | 'General Branding'
  | 'Video Design';

type ExamplesType = {
  [key in Category]: string[];
};

const examples: ExamplesType = {
  'Web Design': ['Example 1', 'Example 2', 'Example 3'],
  'Social Media': ['Example 4', 'Example 5'],
  'General Branding': ['Example 6', 'Example 7', 'Example 8'],
  'Video Design': ['Example 9', 'Example 10'],
};

function isValidCategory(category: string): category is Category {
  return [
    'Web Design',
    'Social Media',
    'General Branding',
    'Video Design',
  ].includes(category);
}

const GalleryCarousel = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('Web Design');

  // Handlers to set the selected category
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: (currentSlide: number) => {
      // Sync the selected category with the current example displayed
      if (isValidCategory(selectedCategory)) {
        const currentExample = examples[selectedCategory][currentSlide];
        const currentCategory = Object.keys(examples).find((category) =>
          examples[category as Category].includes(currentExample)
        );

        if (currentCategory) {
          setSelectedCategory(currentCategory);
        }
      }
    },
  };

  return (
    <div className="">
      {/* Left carousel: Categories */}
      <div>
        <Slider {...sliderSettings}>
          {categories.map((category) => {
            return (
              <div
                key={category}
                onClick={() => handleCategoryClick(category)}
                style={{
                  marginTop: '50px',
                  background:
                    category === selectedCategory ? 'gray' : 'lightgray',
                }}
              >
                {category}
              </div>
            );
          })}
        </Slider>
      </div>

      {/* Right carousel: Examples */}
      {/* <div>
        <Slider {...sliderSettings}>
          {examples[selectedCategory as Category].map((example, index) => {
            return (
              <div
                key={index}
                style={{
                  padding: '20px',
                  background: 'lightblue',
                  textAlign: 'center',
                }}
              >
                {example}
              </div>
            );
          })}
        </Slider>
      </div> */}
    </div>
  );
};

export default GalleryCarousel;
