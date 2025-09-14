import React, { useState } from 'react';
import { FaArrowRightLong, FaEye } from 'react-icons/fa6';
import dedosh from '../../../assets/images/dedos.png'
import capsicum from '../../../assets/images/capsicum.png'
import chanise from '../../../assets/images/chanise.png'
import apple from '../../../assets/images/apple.png'
import { Rating } from 'react-simple-star-rating'
import kola from '../../../assets/images/kola.png'

import { CiHeart } from 'react-icons/ci';
import { GiBeachBag } from 'react-icons/gi';
import DisplayProducts from './DisplayProducts';

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
    },
    {
        image: kola,
        title: 'Sweet Banana',
        dollar: 14.44,
        rating: 3
    }
]

const Features = ({ best }) => {
    const [click, setclick] = useState(null)
    return (
        <div className=''>
            <div className='mx-2 sm:mx-0 mt-2 '>
                <div className='flex justify-between'>
                    <div>
                        <h1 className={`text-[20px] ${best && 'text-[26px]'} font-semibold`}> {best ? best : 'Featured Products'} </h1>
                    </div>
                    <div className='flex justify-center items-center gap-3 text-[var(--primary-color)]'>
                        View All <FaArrowRightLong />
                    </div>
                </div>

                <div className='grid  grid-cols-2 sm:grid-cols-5 mt-5 gap-2'>
                    {fruites?.map((item, index) => {
                        return <DisplayProducts click={click} setclick={setclick} item={item} index={index}></DisplayProducts>
                    })}
                </div>


            </div>

        </div>

    );
};

export default Features;
