import React, { useState } from 'react';
import { FaArrowRightLong, FaEye } from 'react-icons/fa6';
import dedosh from '../../../assets/images/dedos.png'
import capsicum from '../../../assets/images/capsicum.png'
import chanise from '../../../assets/images/chanise.png'
import apple from '../../../assets/images/apple.png'
import { Rating } from 'react-simple-star-rating'
import { CiHeart } from 'react-icons/ci';
import { GiBeachBag } from 'react-icons/gi';

const fruites = [
    {
        image: apple,
        title: 'Green Apple',
        dollar: 14.44,
        rating: 4
    },
    {
        image: chanise,
        title: 'Chanise Cabbage',
        dollar: 14.44,
        rating: 3
    },
    {
        image: dedosh,
        title: 'Ladles Finger',
        dollar: 14.44,
        rating: 3
    },
    {
        image: capsicum,
        title: 'Green Capsicum',
        dollar: 14.44,
        rating: 3
    }
]

const Features = () => {
    const [click, setclick] = useState(null)
    return (
        <div className='mx-2 sm:mx-0 mt-2'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-[20px] font-semibold'>Featured Products</h1>
                </div>
                <div className='flex justify-center items-center gap-3 text-[var(--primary-color)]'>
                    View All <FaArrowRightLong />
                </div>
            </div>

            <div className='grid grid-cols-4 mt-5 gap-2'>
                {fruites?.map((item, index) => {
                    return (
                        <div onClick={() => setclick(index + 1)} key={index} className={`border ${click && click == index + 1 ? 'border-3 border-green-600 scale-105 transition duration-1000' : ''} relative p-2 border-gray-300 rounded-md`}>
                            <div>
                                <img className='w-[300px]' src={item?.image} alt="" />
                            </div>
                            <div>
                                <h1 className='text-gray-500 text-[10px] font-semibold sm:text-[15px]'>{item?.title}</h1>
                                <h2 className='font-semibold sm:text-[15px] text-[10px]'>${item?.dollar}</h2>
                                <div className='flex items-center gap-2'>

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

                            {
                                (click && click == index + 1) && <div className='transition duration-700'>
                                    <div className='absolute right-2 top-2 '>
                                        <div className='p-1 rounded-full'>
                                            <CiHeart size={20} />
                                        </div>
                                        <div className='bg-white p-1 rounded-full'>
                                            <FaEye size={20} />
                                        </div>
                                    </div>

                                    <div className='absolute bottom-10 right-2'>
                                        <GiBeachBag
                                            size={23}
                                            className="text-white rounded-full bg-green-500 p-1 "
                                        />
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Features;
