import React from 'react';
import Button from '../components/Button';
import { AiOutlineRight } from 'react-icons/ai';
export default function ContentTwo() {
  const arrayDesign = [
    {
      title: 'Design Concept',
      description:
        ' Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.',
      icons: 'warning.svg',
    },
    {
      title: 'Design Concept',
      description:
        ' Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.',
      icons: 'clock.svg',
    },
    {
      title: 'Design Concept',
      description:
        ' Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.',
      icons: 'clock.svg',
    },
    {
      title: 'Design Concept',
      description:
        ' Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.',
      icons: 'warning.svg',
    },
  ];
  const arrayCard = [
    {
      title: 'Audit',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ',
    },
    {
      title: 'Teamwork',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ',
    },
    {
      title: 'Create',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ',
    },
  ];
  return (
    <section className='w-full h-full overflow-hidden pt-16 pb-32'>
      <div className=' container mx-auto w-full bg-gradient-to-t from-[#fff] to-[#FFF4D4] rounded-2xl'>
        <div className='flex justify-between w-full'>
          <div className='px-32 pt-28 pb-8'>
            <h1 className='text-dark uppercase font-normal text-xl'>
              Design Concept
            </h1>
            <h2 className='text-dark font-semibold text-4xl my-4'>
              The best design for your studio website
            </h2>
            <p className='text-dark font-light text-base'>
              Convallis turpis erat tempus, viverra aliquet. Nullam viverra{' '}
              <br />
              nam auctor sit ipsum malesuada a,
              <br />
              duis volutpat. Convallis turpis erat tempus, viverra aliquet.{' '}
              <br />
              Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
            </p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/design/rounded_content-two.svg`}
            className='top-0 bottom-0 right-0 left-0  w-[200px] h-full object-cover object-center'
            alt=''
          />
        </div>
        <div className=' px-32 py-4 inset-0'>
          <div className='w-full grid grid-cols-2 gap-4 items-center justify-center py-12'>
            {arrayDesign.map((item, index) => (
              <div
                key={index}
                className='flex gap-x-4 items-center'>
                <img
                  src={`${process.env.PUBLIC_URL}/images/design/icons/${item.icons}`}
                  alt={item.title}
                />
                <div>
                  <h4 className='text-dark font-normal text-2xl mb-1'>
                    {item.title}
                  </h4>
                  <p className='text-dark font-light text-base'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className='w-full flex items-center justify-between py-28'>
            <h1 className='text-dark text-4xl font-semibold'>
              The best design for your <br /> studio website
            </h1>
            <Button
              href='https://facebook.com'
              type='link'
              isExternal
              target='_blank'
              className='text-primary hover:text-blue-500 transition underline flex items-center gap-x-4'>
              Experiece Team <AiOutlineRight className='text-xl' />
            </Button>
          </div>
          <div className='w-full grid grid-cols-3 justify-center items-center gap-x-4'>
            {arrayCard.map((items, index) => (
              <div
                key={index}
                className='bg-white shadow-lg rounded-xl '>
                <div className='p-8'>
                  <h4 className='text-dark font-semibold text-3xl my-4'>
                    {items.title}
                  </h4>
                  <p className='text-dark font-light text-base'>
                    {items.description}
                  </p>
                </div>
                <hr className='shadow-lg bg-white text-white' />
                <div className='px-8 py-4'>
                  <p className='text-pastel'>Experience Team</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
