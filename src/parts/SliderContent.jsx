import React from 'react';
import Carousel from './Carousel';
import { Zoom } from 'react-reveal';

export default function SliderContent() {
  return (
    <section className='w-full overflow-hidden px-6 py-16 md:px-16 md:py-24 lg:px-32 lg:py-32'>
      <div className='w-full container mx-auto'>
        <h1 className='text-dark text-xl font-normal text-center'>
          Desgin Concept
        </h1>
        <h2 className='font-semibold text-3xl md:text-4xl text-dark text-center my-1 md:my-4'>
          The best design for your <br className='hidden md:block' /> studio
          website
        </h2>
        <Zoom>
          <Carousel />
        </Zoom>
      </div>
    </section>
  );
}
