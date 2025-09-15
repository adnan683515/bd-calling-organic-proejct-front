import React from 'react';
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import logo from '../assets/images/Logo.png';
import { FaChevronDown } from "react-icons/fa";
import { SlCallOut } from "react-icons/sl";
import { Link, useLocation } from 'react-router';


const navberMenus = [
    { label: 'Home', icon: <FaChevronDown />, lnk: '/' },
    { label: 'Shop', icon: <FaChevronDown />, lnk: '/shop' },
    { label: 'Pages', icon: <FaChevronDown />, lnk: '/pages' },
    { label: 'Blog', icon: <FaChevronDown />, lnk: '/blog' },
    { label: 'Contact Us', icon: <FaChevronDown />, lnk: '/contact' },
    { label: 'About', icon: '', lnk: '/about' },
];

const NavberTwo = () => {
    const location = useLocation();
    const path = location?.pathname;

    return (
        <div className='w-full sticky top-0 z-50'>

            <div className="bg-[#333333] text-white text-[11px] sm:text-[13px]">
                <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-2 py-2 px-4">
                    <div className="flex items-center gap-1 flex-1 min-w-[200px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
                        </svg>
                        <span>Store Location: Lincoln-344, Illinois, Chicago, USA</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        <span>End ↓</span>
                        <span>Bang ↓</span>
                        <span>Sign in /</span>
                        <span>Sign up</span>
                    </div>
                </div>
            </div>


            <div className="sticky top-0 z-50 bg-white shadow">
                {/* Header */}
                <header className="max-w-[1200px] mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
                    <div className="flex-shrink-0">
                        <img src={logo} alt="Logo" className="h-6 sm:h-8" />
                    </div>
                    <div className="flex-1 flex justify-center px-2 w-full sm:w-auto">
                        <div className="flex w-full max-w-md">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="flex-1 border border-gray-300 rounded-l-md py-2 px-3 sm:py-3 text-[11px] sm:text-sm focus:outline-none"
                            />
                            <button className="bg-[#00B207] text-white px-3 py-1 rounded-r-md text-[11px] sm:text-sm">
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 justify-center w-full sm:w-auto mt-2 sm:mt-0">
                        <CiHeart className="text-xl cursor-pointer" />
                        <div className="flex items-center gap-1 cursor-pointer text-[11px] sm:text-sm">
                            <GiShoppingCart className="text-xl" />
                            <span>Shopping Cart</span>
                            <span className="font-semibold">$0.00</span>
                        </div>
                    </div>
                </header>

                {/* Navbar */}
                <nav className="max-w-[1200px] mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4">
                    <ul className="flex flex-wrap gap-4 text-[11px] sm:text-sm items-center justify-center w-full sm:w-auto">
                        {navberMenus.map((item, index) => (
                            <Link to={item?.lnk} key={index}>
                                <li className={`flex items-center gap-1 cursor-pointer ${path === item.lnk ? 'text-[#00B207]' : 'text-gray-600'}`}>
                                    {item.label} {item.icon}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <div className="flex items-center gap-2 text-[11px] sm:text-sm justify-center w-full sm:w-auto mt-2 sm:mt-0">
                        <SlCallOut className="text-xl" />
                        <span>+880 1234 567890</span>
                    </div>
                </nav>
            </div>


           
        </div>
    );
};

export default NavberTwo;
