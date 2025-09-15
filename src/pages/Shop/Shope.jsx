import React, { useState } from 'react';
import FilterSection from '../../components/ShopePage/FilterSection';
import ShowProducts from '../../components/ShopePage/ShowProducts';
import { FaArrowRightLong } from 'react-icons/fa6';

const Shope = () => {

    const [search,setSearch ] = useState({})

    return (
        <div className='max-w-[1200px] mx-auto my-10 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>

                <div className='md:col-span-3 col-span-1'>
                    <FilterSection search={search} setSearch={setSearch} />

                    <div className="w-full relative mx-auto mt-4 md:mt-0">
                        <img
                            src="https://i.ibb.co.com/27Wp08Tv/Bannar-3.png"
                            alt="banner"
                            className="w-full h-[300px] rounded-md"
                        />

                        <div className="absolute inset-0 flex justify-center top-1">
                            <div className='space-y-2 text-center md:text-left'>
                                <h1 className="text-black text-2xl font-semibold">
                                    <span className='text-[#FF8A00]'>79%</span> Discount
                                </h1>
                                <h1 className='text-[12px] text-gray-500'>on your first order</h1>

                                <div className='flex my-2 justify-center md:justify-start items-center'>
                                    <div className='flex gap-1 text-[14px] text-[#00B207] items-center'>
                                        <h1>show more</h1>
                                        <FaArrowRightLong />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='md:col-span-9 col-span-1 mt-6 md:mt-0'>
                    <ShowProducts setSearch={setSearch} search={search} />
                </div>
            </div>
        </div>
    );
};

export default Shope;
