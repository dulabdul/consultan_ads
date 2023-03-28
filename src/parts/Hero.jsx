import React from 'react';
import Button from '../components/Button';

export default function Hero() {
  return (
    <section className='w-full overflow-hidden'>
      <div className='w-full mx-auto pl-32 py-16'>
        <div className='grid grid-cols-2 items-center justify-center'>
          <div className='w-full h-full container flex flex-col justify-around'>
            <div>
              <div className='my-4'>
                <h1 className='text-1xl text-pastel uppercase my-4'>
                  Design Inspiration
                </h1>
                <h2 className='font-bold text-5xl capitalize text-dark'>
                  Consult Your <br />
                  Bussiness With Us
                </h2>
              </div>
              <Button
                className='button items-center justify-center mt-12 mb-4'
                isPrimary
                isFlex
                isRounded>
                Get In Touch test
              </Button>
            </div>
            <div>
              <h5 className='font-normal text-2xl'>
                I feel so much less stressed ❤️ <br /> as I now know by the
                book.”
              </h5>
              <div className='flex items-center justify-start my-4'>
                <img
                  src={`${process.env.PUBLIC_URL}/images/design/rounded-people-1.png`}
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
          <div className='w-full h-full'>
            <img
              src={`${process.env.PUBLIC_URL}/images/design/bg.png`}
              alt='Background'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
