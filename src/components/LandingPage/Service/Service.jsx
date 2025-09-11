import React, { useState } from 'react';
import sheep from '../../../assets/images/sheep.png'
import moneyBack from '../../../assets/images/moneyBack.png'
import payment from '../../../assets/images/payment.png'
import support from '../../../assets/images/headphone.png'

const arrayOfServicve = [
    {
        image: sheep,
        title: 'Free Shipping',
        des: 'Free Shipping With Discount',
        ck: 'sheep'
    }, {
        image: support,
        title: 'Get Support 24/7',
        des: 'Instant access to contact',
        ck: 'support'
    },
    {
        image: payment,
        title: '100% Secure payment',
        des: 'we ensure your money is save',
        ck: 'payment'
    }, {
        image: moneyBack,
        title: 'Money-Back Guarantee',
        des: '30 Days Money Back',
        ck: 'money'
    }
]



const Service = () => {
    const [click, setClick] = useState(null)


    return (
        <div className='grid  grid-cols-4 h-[140px] sm:h-[150px]  mx-2 sm:mx-0 mt-15 border-b  border-gray-300'>

            {
                arrayOfServicve?.map((item, index) => {
                    return <div key={index} onClick={() => setClick(item?.ck)} className={`space-y-2  transition cursor-pointer ${click == item?.ck ? 'border-b-4 border-b-green-500 scale-105 duration-1000' : ""}`}>

                        <div className='flex justify-center items-center'>
                            <img className='w-[40%] sm:w-[20%]' src={item?.image} alt="" />
                        </div>
                        <div className='flex justify-center items-center'>
                            <h1 className='font-semibold text-center sm:text-start text-[12px] sm:text-[15px]'>{item?.title}</h1>
                        </div>
                        <div className='flex justify-center items-center text-gray-500'>
                            <p className='sm:text-[13px] text-[10px] text-center sm:text-start'>{item?.des}</p>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Service;