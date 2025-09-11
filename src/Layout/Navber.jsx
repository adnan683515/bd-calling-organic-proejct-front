import React from 'react'
import { CiHeart, CiLocationOn, CiSearch, CiUser } from 'react-icons/ci'
import { FaChevronDown } from 'react-icons/fa'
import logo from '../assets/images/Logo.png'
import { FiPhoneCall } from 'react-icons/fi'
import { GiShoppingCart } from 'react-icons/gi'

const navberMenus = [
    { label: 'Home', icon: <FaChevronDown /> },
    { label: 'Shop', icon: <FaChevronDown /> },
    { label: 'Blog', icon: <FaChevronDown /> },
    { label: 'About', icon: '' },
]

export default function Navber() {
    return (
        <div className="w-full sticky top-0 z-50 backdrop-blur-lg">
            <div className="bg-secondary px-4 py-2 md:px-[100px] lg:px-[200px]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
                    <div className="flex items-center gap-2 justify-center">
                        <CiLocationOn />
                        <p className="text-xs md:text-base">
                            Store Location: Lincoln-344, Illinois, Chicago, USA
                        </p>
                    </div>
                    <div className="flex gap-4 text-[11px] sm:text-[15px]">
                        <div className="flex items-center gap-1">
                            <p>Eng</p>
                            <FaChevronDown />
                        </div>
                        <div className="flex items-center gap-1">
                            <p>Ban</p>
                            <FaChevronDown />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center px-1 gap-4 sm:px-4 py-4 md:px-[100px] lg:px-[200px]">
                <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                    {navberMenus.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-1 text-gray-500 hover:text-black cursor-pointer"
                        >
                            <h1 className="text-[11px] md:text-base">{item.label}</h1>
                            {item.icon && <span>{item.icon}</span>}
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <img src={logo} alt="Logo" className="w-[100px] sm:w-fit md:h-12 lg:h-7" />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="flex items-center gap-2">
                        <FiPhoneCall className="text-sm md:text-2xl" />
                        <p className="text-[11px] sm:text-[15px] md:text-base">+(219) 555-0114</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <CiSearch className="text-sm md:text-2xl" />
                        <CiHeart className="text-sm md:text-2xl" />
                        <div className="relative">
                            <GiShoppingCart className="text-sm md:text-2xl" />
                            <span className="absolute -top-2 -right-3 primary text-white text-xs rounded-full px-1">
                                0
                            </span>
                        </div>
                        <CiUser className="text-sm md:text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}
