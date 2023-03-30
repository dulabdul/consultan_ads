import React from 'react';
import Button from '../components/Button';

export default function Contact() {
  return (
    <section className='w-full overflow-hidden px-32 pt-16 pb-32'>
      <div className='w-full relative container mx-auto bg-gradient-to-t from-[#fff] to-[#FFF4D4] px-32 py-16'>
        <div className='w-full flex justify-between'>
          <div>
            <h1 className='text-dark text-3xl my-4 font-normal'>
              All-in-one platform for business
            </h1>
            <p className='text-dark font-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{' '}
              Provident dolorem culpa sunt atque illo itaque.
            </p>
          </div>
          <div>
            <Button
              isPrimary
              className='button z-10 relative'
              isRounded>
              Get In Touch
            </Button>
            <img
              src={`${process.env.PUBLIC_URL}/images/design/white_shape.svg`}
              className='absolute top-0 bottom-0 right-0 z-0'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
}
