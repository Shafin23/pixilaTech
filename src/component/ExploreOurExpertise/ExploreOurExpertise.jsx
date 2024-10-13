import React from 'react';
import Experties from './Experties/Experties';

const ExploreOurExpertise = () => {
    return (
        <div className='max-w-7xl mx-auto my-16 md:my-24 px-5 md:px-0'>
            <h1 style={{fontFamily:"Anybody"}} className='font-black text-2xl md:text-3xl lg:text-[32px] text-start mb-6'>
                Explore Our Expertise
            </h1>
            <hr />
            <article className='w-full md:w-[500px] ms-auto mt-5 text-gray-600 text-center md:text-left'>
                Our technology and HR services are designed to help your business grow and succeed.
            </article>

            <div className='flex flex-col md:flex-row justify-between items-center mt-10 '>
                <Experties
                    heading="Technology Consulting:"
                    text="Our technology consultants help you strategize, innovate, and implement solutions like cloud migrations, IT optimization, and ERP to drive efficiency and growth."
                    bgColor="1"
                />
                <Experties
                    heading="Cloud & Security:"
                    text="Safeguard your business with proactive solutions, including vulnerability assessments, network security, and compliance with GDPR and HIPAA."
                    bgColor="2"
                />
                <Experties
                    heading="HR Services:"
                    text="Develop high-performing teams with expert HR strategies, organizational optimization, and effective employee relations management."
                    bgColor="3"
                />
            </div>
        </div>
    );
};

export default ExploreOurExpertise;
