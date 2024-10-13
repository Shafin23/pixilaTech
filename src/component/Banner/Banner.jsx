import React from 'react';
import { FaNetworkWired } from 'react-icons/fa';

const Banner = () => {
    return (
        <section className='w-[90%] mx-auto my-12 md:my-24'>
            <div>
                <div className="banner-text">
                    <h1 style={{ fontFamily:"Anybody"}} className="text-center font-extrabold text-4xl md:text-5xl lg:text-[60px] mb-5">
                        PixliaTech
                    </h1>
                    <p className="text-center w-full md:w-[550px] mx-auto mb-8 md:mb-14 text-gray-700 text-sm md:text-base lg:text-lg">
                        Get access to world-class tech experts, developers, and HR professionals who drive innovation and growth
                        for your business.
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <img
                        src="banner.png"
                        className='w-full md:w-[70%] h-auto max-h-[300px] md:max-h-[350px]'
                        alt="Team working illustration"
                    />
                </div>

                <article className='mt-10 md:mt-16 text-gray-700 text-sm md:text-base lg:text-lg'>
                    <span className='font-bold text-black'>PixliaTech</span> connects businesses with expert tech consultants, developers, and HR professionals. We provide tailored solutions to drive innovation, optimize processes, and build high-performing teams for business success.
                </article>

                <div className="flex justify-center mt-6">
                    <button className="flex items-center space-x-2 px-6 md:px-10 py-3 md:py-4 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow me-auto">
                        <span className="text-gray-700 font-medium text-sm md:text-base">Join Our Network</span>
                        <FaNetworkWired className="text-orange-500 text-lg md:text-xl" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
