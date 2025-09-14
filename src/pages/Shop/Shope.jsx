import React from 'react';
import FilterSection from '../../components/ShopePage/FilterSection';
import ShowProducts from '../../components/ShopePage/ShowProducts';
import { FaArrowRightLong } from 'react-icons/fa6';

const Shope = () => {
    return (
        <div className='max-w-[1200px]  mx-auto my-10'>
            <div className='grid grid-cols-12 '>
                <div className='col-span-4 '>
                    <FilterSection></FilterSection>

                    <div className="w-full relative mx-auto">
                        <img
                            src="https://i.ibb.co.com/27Wp08Tv/Bannar-3.png"
                            alt="banner"
                            className="w-full h-auto"
                        />


                        <div className="absolute inset-0 flex  justify-center top-5">
                            <div className='space-y-2'>
                                <h1 className="text-black text-2xl font-semibold "> <span className='text-[#FF8A00]'>79%</span>  Discount</h1>
                                <h1 className='text-[12px] text-gray-500 text-center'>on your first order</h1>

                                <div className='flex my-2 justify-center items-center'>
                                    <div className='flex gap-1 text-[14px] txt-primary'>
                                        <h1>show more</h1>
                                        <div className='center'>
                                            <FaArrowRightLong />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-8 border'>
                    <ShowProducts></ShowProducts>
                </div>
            </div>
        </div>
    );
};

export default Shope;