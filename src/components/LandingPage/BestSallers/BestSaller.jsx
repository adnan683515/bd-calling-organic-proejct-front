import React from 'react';
import Features from '../Features/Features';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const BestSaller = () => {

    const {data:products=[]} = useQuery({
        queryKey : 'all-products',
        queryFn : (async ()=>{
            const result = await axios.get('/products.json')
            return result?.data
        })
    })




    return (
        <div>

            <Features best='Best Sallers' ></Features>

            <div className='flex mt-10 gap-3 justify-between'>


                <div className='grid flex-1 grid-cols-3 gap-3'>
                    {
                        products.slice(0,6)?.map((item ,index)=>{
                            return <div className='border  border-gray-400 rounded-lg ' key={index}>
                                <div className='w-[120px] h-[120px]  flex items-center'>
                                    <img src={item?.image} alt="" />
                                </div>


                            </div>
                        })
                    }
                </div>
                <div className='bg-center rounded-md  flex justify-center  bg-cover w-[260px] h-[300px]' style={{
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