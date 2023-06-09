import React from 'react';
import Button from '../components/Button';
import { Fade } from 'react-reveal';

export default function Content() {
  return (
    <section className='w-full overflow-hidden px-6 py-4 md:px-16 md:py-24 lg:px-32 lg:py-32 bg-[#D8F6FF]'>
      <div className='container mx-auto md:h-[750px]'>
        <div className='grid grid-cols-12 h-full items-center justify-center gap-4 '>
          <Fade left>
            <div className='col-start-1 col-end-12 md:col-start-1 md:col-end-5'>
              <img
                src={`/images/design/peter-1.webp`}
                alt='Peter-1'
                className='w-[300px] h-[350px] md:w-[400px] md:h-[340px] lg:w-[380px] lg:h-[450px]'
              />
            </div>
          </Fade>
          <div className='flex flex-col col-start-1 col-end-12 justify-around h-full md:col-start-5 md:col-end-13'>
            <div className='lg:pl-20 md:pl-4'>
              <Fade right>
                <h2 className='font-semibold text-3xl md:text-4xl lg:text-5xl text-dark md:py-12'>
                  Requirements gathering and analysis for references.
                </h2>
              </Fade>
              <Fade
                right
                delay={300}>
                <p className='text-dark font-light py-5 '>
                  Convallis turpis erat tempus, viverra aliquet. Nullam viverra
                  nam auctor sit ipsum malesuada a, duis volutpat. Convallis
                  turpis erat tempus, viverra aliquet. Nullam viverra nam auctor
                  sit ipsum malesuada a, duis volutpat.
                </p>
              </Fade>
            </div>
            <Fade
              right
              delay={500}>
              <img
                src={`/images/design/peter-2.webp`}
                alt='Peter-2'
              />
            </Fade>
          </div>
        </div>
      </div>
      <div className='container mx-auto py-16 md:py-24'>
        <div className='grid grid-cols-12 items-center justify-center gap-4 md:gap-8'>
          <Fade left>
            <div className='col-start-1 col-end-12 md:col-start-1 md:col-end-7'>
              <img
                src={`/images/design/peter-3.webp`}
                alt='Peter-3'
                className='w-[300px] h-[350px] md:w-[400px] md:h-[340px] lg:w-[380px] lg:h-[450px]'
              />
            </div>
          </Fade>
          <div className='col-start-1 col-end-12 md:col-start-7 md:col-end-13 flex flex-col justify-center'>
            <Fade right>
              <h3 className='text-3xl md:text-4xl font-semibold'>
                The best design for your studio website
              </h3>
            </Fade>
            <Fade
              right
              delay={300}>
              <p className='text-base font-light my-3 md:my-6'>
                Convallis turpis erat tempus, viverra aliquet. Nullam viverra
                nam auctor sit ipsum malesuada duis volutpat.
              </p>
              <Button
                type='link'
                isExternal
                target='_blank'
                href='https://www.facebook.com/'
                className='text-primary underline hover:text-blue-500'>
                Experience Team
              </Button>
            </Fade>
          </div>
          <br />
          <br />
          <div className='col-start-1 col-end-12 md:col-start-1 md:col-end-7 flex flex-col justify-center'>
            <Fade left>
              <h3 className='text-3xl md:text-4xl font-semibold'>
                The best design for your studio website
              </h3>
            </Fade>
            <Fade
              left
              delay={300}>
              <p className='text-base font-light my-3 md:my-6'>
                Convallis turpis erat tempus, viverra aliquet. Nullam viverra
                nam auctor sit ipsum malesuada duis volutpat.
              </p>
              <Button
                type='link'
                isExternal
                target='_blank'
                href='https://www.facebook.com/'
                className='text-primary underline hover:text-blue-500'>
                Experience Team
              </Button>
            </Fade>
          </div>
          <Fade
            right
            delay={200}>
            <div className='col-start-1 col-end-12 md:col-start-7 md:col-end-133'>
              <img
                src={`/images/design/peter-4.webp`}
                alt='Peter-4'
                className='w-[300px] h-[350px] md:w-[400px] md:h-[340px] lg:w-[380px] lg:h-[450px]'
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
