import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <img src="/logo.png" alt="PixliaTech Logo" className="w-10 h-10" />
                        <p className="ml-3 font-extrabold text-lg">PixliaTech</p>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="text-black hover:text-black px-3 py-2 rounded-md text-sm font-bold">Home</a>
                        <a href="#" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Service</a>
                        <a href="#" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">About Us</a>
                    </div>

                    {/* Call to Action buttons */}
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">Contact Us</a>
                        <a href="#" className="border border-black text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100">Sign Up</a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button onClick={handleMenuToggle} className="text-gray-700 hover:text-black focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white px-4 py-2 space-y-2">
                    <a href="#" className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="#" className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-base font-medium">Service</a>
                    <a href="#" className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-base font-medium">About Us</a>
                    <a href="#" className="block bg-black text-white px-4 py-2 rounded-md text-base font-medium hover:bg-gray-800">Contact Us</a>
                    <a href="#" className="block border border-black text-black px-4 py-2 rounded-md text-base font-medium hover:bg-gray-100">Sign Up</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
