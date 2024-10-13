import React from 'react';

const Mobile = () => {
    return (

        < div className="bg-[#201D1D] rounded-xl p-6 max-w-sm  me-auto h-[800px] relative" >
            <p className="text-[#BF5540] text-sm mb-4">CONTACT US</p>
            <article className="text-white text-[26px] font-thin mb-6">
                <span className=' text-gray-500'>Looking for tailored solutions?</span> Request a call from our team
            </article>
            <form className="space-y-4">
                <div className='rounded-2xl p-3 border border-[gray-200]'>
                    <label className="block text-gray-400 text-sm " htmlFor="name">
                        Your Name
                    </label>
                    <input
                        className="w-full text-sm rounded-lg bg-transparent text-white outline-none border-none "
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                    />
                </div>
                <div className='rounded-2xl p-3 border border-[gray-200]'>
                    <label className="block text-gray-400 text-sm " htmlFor="phone">
                        Phone Number
                    </label>
                    <input
                        className="w-full text-sm rounded-lg  bg-transparent text-white outline-none border-none "
                        type="text"
                        id="phone"
                        placeholder="Enter your phone number"
                    />
                </div>
                <button
                    type="submit"
                    className=" px-10 text-sm rounded-3xl py-3 bg-[#BF5540] text-white"
                >
                    Send a request
                </button>
            </form>
            <p className="text-gray-500 text-sm mt-4 absolute bottom-6 left-6">Privacy</p>
        </div >
    );
};

export default Mobile;