import React from 'react';

const InfoLinks = ({ list, heading }) => {
    return (
        <div className="text-white">
            {/* Heading */}
            <p className="text-[#BF5540] text-[14px] mb-7">{heading}</p>

            {/* Links */}
            <ul className="space-y-2">
                {list.map(item => <li><a href="#company" className="text-white hover:text-white">{item}</a></li>)}
            </ul>
        </div>
    );
};

export default InfoLinks;
