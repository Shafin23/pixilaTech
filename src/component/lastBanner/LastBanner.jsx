import React from 'react';

const LastBanner = () => {
    return (
        <div className='bg-[#F3F0FF] rounded-md p-6 md:p-14 w-[95%] md:w-[90%] mx-auto'>
            <h1 className='text-2xl md:text-[32px] font-bold mb-6 md:mb-8 text-[#2A2727] text-center md:text-left'>
                Talk to an operations expert
            </h1>

            <div className='flex flex-col md:flex-row justify-between items-center'>
                <article className='w-full md:w-9/12 text-center md:text-left mb-6 md:mb-0'>
                    PixliaTech is the all-in-one platform empowering businesses to find, hire, manage, and optimize both tech and HR talent seamlessly in a single solution.
                </article>

                <button className='rounded-md bg-[#2A2727] text-white px-6 py-3 w-full md:w-auto'>
                    Schedule a call
                </button>
            </div>
        </div>
    );
};

export default LastBanner;
