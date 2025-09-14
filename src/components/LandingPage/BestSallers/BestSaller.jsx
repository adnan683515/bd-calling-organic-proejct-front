import React, { useState } from 'react';
import Features from '../Features/Features';
import { FaArrowRightLong, FaRegEye } from 'react-icons/fa6';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating';
import { CiHeart } from 'react-icons/ci';
import { HiShoppingBag } from 'react-icons/hi';

const BestSaller = () => {

    const [click, setCliked] = useState(null)

    const { data: products = [] } = useQuery({
        queryKey: 'all-products',
        queryFn: (async () => {
            const result = await axios.get('/products.json')
            return result?.data
        })
    })


    const toggleDiv = <div className='flex gap-3'>


        <div className='bg-[#00B207] rounded-full p-1'>
            <HiShoppingBag className='text-white' />
        </div>
        <div>
            <CiHeart />

        </div>

        <div>
            <FaRegEye />
        </div>
    </div>




    return (
        <div className='p-1 sm:p-0'>

            <Features best='Best Sallers' ></Features>


            <div className='flex sm:flex-row flex-col-reverse mt-10 gap-3 justify-between'>


                <div className='grid flex-1 grid-cols-2 sm:grid-cols-3 gap-3'>
                    {
                        products.slice(0, 6)?.map((item, index) => {
                            return <div onClick={() => setCliked(index + 1)} className={`border ${click == index + 1 ? 'border-green-500 border-2 scale-105 transition duration-700' : ''} border-gray-400 px-1 rounded-lg flex justify-between`} key={index}>
                                <div className='w-[120px] h-[120px]  flex items-center'>
                                    <img src={item?.image} alt="" />
                                </div>



                                {
                                    click == index + 1 ? <div className='flex justify-center items-center'>
                                        {toggleDiv}
                                    </div> : <div className='flex items-center'>
                                        <div>
                                            <h1 className='text-[13px] text-gray-500'> {item?.title} </h1>
                                            <h1 className='text-black text-[14px]'> ${item?.dollar} </h1>
                                            <Rating
                                                initialValue={item?.rating}
                                                size={20}
                                                readonly
                                                allowFraction
                                                SVGclassName="inline-block"
                                                fillColor="#facc15"
                                            />
                                        </div>
                                    </div>
                                }


                            </div>
                        })
                    }
                </div>
                <div className='bg-center rounded-md  flex justify-center  bg-cover w-full  sm:w-[260px] h-[300px]' style={{
                    backgroundImage: "url('https://i.ibb.co.com/XxCFtv4r/Bannar-2.png')"
                }}>
                    <div className='text-center  mt-3'>
                        <h1 className='text-[12px]'>HOt Sale</h1>
                        <h1 className='text-2xl font-semibold '>Save 37% on
                            Every Order</h1>

                        <div className="flex justify-center items-center mt-2">
                            <button className="sm:w-[120px] sm:h-[30px] flex items-center justify-center gap-1 text-black rounded-full px-3 py-1 bg-white text-[12px] sm:px-2 sm:text-[12px]">
                                Shop Now <FaArrowRightLong className="sm:text-sm" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BestSaller;