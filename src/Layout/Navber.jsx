

import React from 'react'
import { CiHeart, CiLocationOn, CiSearch, CiUser } from 'react-icons/ci'
import { FaChevronDown } from 'react-icons/fa'
import logo from '../assets/images/Logo.png'
import { FiPhoneCall } from 'react-icons/fi'
import { GiShoppingCart } from 'react-icons/gi'


const navberMenus = [
    {
        label: 'Home',
        icon: <FaChevronDown />
    },
    {
        label: 'Shop',
        icon: <FaChevronDown />
    },
    {
        label: 'Blog',
        icon: <FaChevronDown />
    }, {
        label: 'About',
        icon: ''
    }
]

export default function Navber() {
    return (
        <div className=''>
            <div className='bg-secondary sm:px-[300px] sm:py-[12px]'>
                <div className='flex sm:flex-row flex-col justify-between'>
                    <div className='flex gap-2'>
                        <div className='center'><CiLocationOn /></div>
                        <p className='text text-xs sm:text-base'>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                    </div>

                    <div className='flex gap-2 text text-xs sm:text-base'>
                        <div className='flex gap-1'>
                            <div className='center'>
                                <p>Eng</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <FaChevronDown />
                            </div>
                        </div>

                        <div className='flex gap-1'>
                            <div className='center'>
                                <p>Ban</p>
                            </div>
                            <div className='center'>
                                <FaChevronDown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' flex justify-between flex-wrap sm:flex-nowrap sm:px-[300px] sm:py-[20px]'>
                <div className='flex gap-2 flex-row'>
                    {
                        navberMenus?.map((item, index) => {
                            return <div key={index} className='flex  sm:gap-2 sm:mx-2'>
                                <div className='center'>
                                    <h1 className='text-xs sm:text-base'> {item?.label} </h1>
                                </div>
                                <div className='center'>
                                    <div>
                                        {item?.icon ? item.icon : ''}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>

                <div>
                    <img src={logo} alt="Logo" />
                </div>

                <div>
                    <div>
                        <div className="flex gap-3 flex-col sm:flex-row">
                            <div className="flex items-center gap-2">
                                <div className="center">
                                    <FiPhoneCall className="text-2xl" />
                                </div>
                                <p className="text-xs sm:text-base">+(219) 555-0114</p>
                            </div>

                            <div className="flex gap-1 items-center">
                                <div>
                                    <CiSearch className="text-2xl" />
                                </div>
                                <div>
                                    <CiHeart className="text-2xl" />
                                </div>
                                <div className='relative'>
                                    <GiShoppingCart className="text-2xl" />

                                    <span className='absolute -top-4 primary rounded-full px-1   -right-3'>0</span>
                                </div>
                                <div>
                                    <CiUser className="text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
