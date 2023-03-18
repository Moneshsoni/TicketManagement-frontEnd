import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Ticket sell and management platform</p>
            </div>
            <div>
              <h1 className='text-pink-600'>Created By Monesh soni</h1>
              <p>This project can solve the problem of black marketing tickets for any event—for example,
                 a cricket match ticket sold within 1 min.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
