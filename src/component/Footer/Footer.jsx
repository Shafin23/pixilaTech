import React from 'react';
import Mobile from './Mobile/Mobile';
import InfoLinks from './list/List';
import SubscriptionAndSocials from './Mail/Mail';

const Footer = () => {
    return (
        <div className='bg-[#2A2727] w-full'>
            <footer className="bg-[#2A2727] max-w-7xl mx-auto p-8 md:p-14 text-white mt-24">
                <div className="flex flex-col md:flex-row justify-between items-start w-full md:w-[100%] mx-auto space-y-10 md:space-y-0">
                    <div className='w-full md:w-[40%]'>
                        <Mobile />
                    </div>
                    <div className='w-full md:w-[55%]'>
                        <div>
                            <div className='flex flex-col md:flex-row justify-between items-start'>
                                <InfoLinks heading="Info" list={["Pixlia.Tech", "Products", "Engineering", "Services", "Productions"]} />

                                <img src="Group (1).png" className='w-[60px] h-[60px] md:w-[70px] md:h-[70px] mt-6 md:mt-0' alt="Logo" />
                            </div>
                            <div className='mt-10 md:mt-16'>
                                <InfoLinks heading="Contact us" list={["hello@pixlia.tech", "India"]} />
                            </div>
                        </div>
                        <div className="mt-10 md:mt-16">
                            <SubscriptionAndSocials />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
