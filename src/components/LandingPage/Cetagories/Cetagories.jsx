import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import pata from '../../../assets/images/pata.png';
import vector from '../../../assets/images/vector1.png'
import check from '../../../assets/images/Check.png'
import meg from '../../../assets/images/meg.png'
import begun from '../../../assets/images/begun.png'

const Categories = () => {
    const [click, setClick] = useState(null);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(6);

    const { data: allCategories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const result = await axios.get('/cetagories.json');
            return result?.data || [];
        },
    });


    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
            setEndIndex(endIndex - 1);
        }
    };


    const handleNext = () => {
        if (endIndex < allCategories.length) {
            setStartIndex(startIndex + 1);
            setEndIndex(endIndex + 1);
        }
    };

    return (
        <div className=' relative  z-15'>
            <div className=' bg-secondary  py-10'>
                <div className=" relative max-w-[1200px]  mx-auto  py-10">
                    <div className=" z-20 ">

                        <div className="flex justify-between mb-4">
                            <h1 className="sm:text-2xl text-[15px] font-semibold">Shop by Top Categories</h1>
                            <button className="flex txt-primary gap-4 justify-center items-center">
                                View All <FaArrowRightLong />
                            </button>
                        </div>


                        <div className="flex my-4 gap-4 justify-between items-center">

                            <FaArrowLeftLong
                                className="bg-white rounded-full p-2 cursor-pointer transition-transform duration-200 focus:scale-110 active:scale-110 disabled:opacity-40"
                                size={30}
                                onClick={handlePrev}
                            />

                            <div className="grid flex-1 grid-cols-3 sm:grid-cols-6 gap-2">
                                {allCategories.slice(startIndex, endIndex).map((item, i) => {
                                    const originalIndex = startIndex + i;
                                    return (
                                        <div
                                            key={originalIndex}
                                            onClick={() => setClick(originalIndex)}
                                            className={`flex flex-col justify-center items-center p-2 rounded-md transition-colors duration-200 cursor-pointer
                    ${click === originalIndex ? 'bg-white border border-[#00B207] scale-105 text-black backdrop:blur-sm transition duration-500 ' : 'bg-gray-50'}`}
                                        >
                                            <div className="flex justify-center w-[40px] items-center sm:w-[50px] mx-auto mb-1">
                                                <img src={item?.image} alt={item?.name} className="object-contain w-full h-full" />
                                            </div>
                                            <h1 className="sm:text-[14px] text-[12px] text-gray-500 font-semibold">{item?.name}</h1>
                                            <p className="sm:text-[12px] text-[10px] text-gray-500">{item?.count} products</p>
                                        </div>
                                    );
                                })}
                            </div>


                            <FaArrowRightLong
                                className="bg-white rounded-full p-2 cursor-pointer transition-transform duration-200 focus:scale-110 active:scale-110 disabled:opacity-40"
                                size={30}
                                onClick={handleNext}
                            />
                        </div>
                    </div>


                    <img className="absolute -top-10 left-40" src={pata} alt="decor" />
                    <img className="absolute z-1 -bottom-6 w-[100px] sm:w-fit sm:-bottom-20 right-0" src={vector} alt="decor" />

                </div>
            </div>


            <div className='mt-13 max-w-[1200px] mx-auto'>

                <div className='flex sm:flex-row flex-col-reverse sm:justify-between'>
                    <div className='flex relative gap-3  sm:w-[600px]'>

                        <div>
                            <img src="https://i.ibb.co.com/jkTP8cHW/Image-28.png" alt="" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co.com/JWXqQhWP/Image-29.png" alt="" />
                        </div>
                        <div>
                            <img className='absolute -top-10 left-30' src={pata} alt="" />
                        </div>


                    </div>

                    <div className='sm:w-[500px] space-y-3'>
                        <div>
                            <h1 className='sm:text-3xl font-semibold w-[80%]'>100% Trusted
                                Organic Food Store</h1>
                        </div>
                        <div cl>
                            <div className='flex gap-2'>
                                <div >
                                    <img src={check} alt="" />
                                </div>
                                <h1>Healthy & natural food for lovers of healthy food.</h1>
                            </div>
                            <p className='text-gray-500'>Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum. </p>
                        </div>


                        <div >
                            <div className=' flex gap-2'>
                                <div>
                                    <img src={check} alt="" />
                                </div>
                                <h1>Every day fresh and quality products for you.</h1>
                            </div>

                            <p className='text-gray-500'>Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis felis. Sed vestibulum nisl sit amet sapien.</p>
                        </div>

                        <div>
                            <button className="sm:w-[191px] sm:h-[50px] flex items-center justify-center gap-2 text-white rounded-full px-3 py-1 primary text-[12px] sm:px-4 sm:text-[15px]">
                                Shop Now <FaArrowRightLong className="sm:text-lg" />
                            </button>
                        </div>

                    </div>
                </div>

            </div>

            <div className='absolute z-0 left-0 bottom-28 '>
                <img className='w-[200px]' src={meg} alt="" />
            </div>
            <div className='absolute z-0 left-0 bottom-0 '>
                <img className='w-[80px]' src={begun} alt="" />
            </div>

        </div>
    );
};

export default Categories;
