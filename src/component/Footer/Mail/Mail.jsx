import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'; // You can use react-icons for the icons

const SubscriptionAndSocials = () => {
    return (
        <div className="text-white mt-20">
            {/* Subscription Section */}
            <div className="mb-6">
                <p className="text-[#BF5540] text-sm mb-2">SUBSCRIPTION FOR REGULAR UPDATES</p>
                <form className="flex items-center space-x-2 bg-[#2E2A2A] rounded-lg p-2 max-w-md">
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="flex-1 bg-transparent text-white outline-none border-none p-2"
                    />
                    <button
                        type="submit"
                        className="text-[#BF5540] p-2 hover:text-[#BF5540] transition"
                    >
                        →
                    </button>
                </form>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 text-gray-400">
                <a href="#facebook" className="hover:text-white">
                    <FaFacebookF />
                </a>
                <a href="#instagram" className="hover:text-white">
                    <FaInstagram />
                </a>
                <a href="#youtube" className="hover:text-white">
                    <FaYoutube />
                </a>
                <a href="#twitter" className="hover:text-white">
                    <FaTwitter />
                </a>
            </div>

            {/* Copyright */}
            <div className="mt-4 text-gray-500 text-sm">
                © 2023 - Copyright
            </div>
        </div>
    );
};

export default SubscriptionAndSocials;
