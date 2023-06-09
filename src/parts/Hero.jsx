import React from 'react';
import Button from '../components/Button';
import { Fade } from 'react-reveal';
function Loading() {
  return <h1>Loading...</h1>;
}
export default function Hero() {
  return (
    <section className='w-full overflow-hidden'>
      <div className='w-full mx-auto px-6 pt-8 pb-24 md:px-0 md:pl-16 lg:pl-32 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
          <div className='w-full h-full container flex flex-col justify-around'>
            <Fade left>
              <div>
                <div className='my-4'>
                  <h1 className='text-xl text-pastel uppercase my-4'>
                    Design Inspiration
                  </h1>
                  <h2 className='font-bold text-4xl md:text-5xl capitalize text-dark'>
                    Consult Your <br />
                    Bussiness With Us.
                  </h2>
                </div>

                <Button
                  className='button items-center justify-center mt-12 mb-4'
                  isPrimary
                  isFlex
                  isRounded>
                  Get In Touch
                </Button>
              </div>
            </Fade>
            <div>
              <h5 className='font-normal text-base md:text-2xl'>
                I feel so much less stressed ❤️ <br /> as I now know by the
                book.”
              </h5>
              <div className='flex items-center justify-start my-4'>
                <img
                  src={`/images/design/rounded-people-1.png`}
                  alt='Catherine'
                  className='w-[60px] h-[60px]'
                />
                <div className='ml-3'>
                  <p className='font-semibold text-base'>Catherine Ford</p>
                  <p className='text-[12px] font-light'>CEO</p>
                </div>
              </div>
            </div>
          </div>
          <Fade right>
            <div className='w-full h-full hidden md:block'>
              <img
                src={`/images/design/bg.webp`}
                alt='Background'
                className='object-cover object-center'
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
