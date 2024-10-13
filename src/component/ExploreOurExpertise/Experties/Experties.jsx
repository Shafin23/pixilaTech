import React from 'react';

const Experties = ({ bgColor, heading, text }) => {
    const con = {
        "1": "#F3F0FF", // Light purple
        "2": "#FFF4E9", // Light orange
        "3": "#FFE4E4"  // Light red
    };

    return (
        <div
            className={`w-full rounded-xl m-3 p-5 h-[200px] mt-16`}
            style={{ backgroundColor: con[bgColor] }} // Apply the background color based on bgColor prop
        >
            <h1 className=' font-semibold text-gray-700 text-lg mb-4'>{heading}</h1>
            <article className=' text-sm  text-gray-600'>
                {text}
            </article>
        </div>
    );
};

export default Experties;
