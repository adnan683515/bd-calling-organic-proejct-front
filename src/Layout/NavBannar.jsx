import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';

const NavBannar = () => {
    return (
        <div>
            <div className='relative text-[13px] sm:text-[16px] '>
                <img className='h-15 sm:h-fit w-full' src="https://i.ibb.co.com/x8S65RLS/Breadcrumbs.png" alt="breadcrumb" />
                <div className='absolute left-2 top-5 flex gap-3 text-white sm:left-1/7 sm:top-10'>
                    <div className='flex items-center'><IoHomeOutline /></div>
                    <div className='flex gap-1 items-center'>
                        <h1>Category</h1>
                        <div className='flex items-center'><IoIosArrowForward /></div>
                    </div>
                    <h1 className='text-[#00B207] font-semibold'>Vegetables</h1>
                </div>
            </div>
        </div>
    );
};

export default NavBannar;