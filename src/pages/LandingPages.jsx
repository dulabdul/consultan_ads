import React, { useEffect } from 'react';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import Content from '../parts/Content';
import SliderContent from '../parts/SliderContent';

export default function LandingPages() {
  useEffect(() => {
    window.document.title = 'Consultant Space';
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Content />
        <SliderContent />
      </main>
    </>
  );
}
