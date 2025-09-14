import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { CiShoppingTag, CiUser } from 'react-icons/ci';
import { FaRegCommentAlt } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import leave from '../../../assets/images/leaveNews.png'

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export default function LatestNews() {

    const { data: allNews = [], isLoading } = useQuery({
        queryKey: 'news',
        queryFn: (async () => {
            const result = await axios.get('/news.json')
            return result?.data?.blogs
        })
    })

    if (isLoading) {
        return <div className='flex justify-center items-center'>
            <h1>Loading....</h1>
        </div>
    }

    return (
        <div className='py-10 relative '>
            <div className='flex justify-center items-center'>
                <div className='text-center'>
                    <h1 className='txt-primary'>BLOG</h1>
                    <h1 className='text-2xl font-semibold'>Latest News</h1>
                </div>
            </div>

            <div className='grid p-2 sm:pt-5 gap-9 grid-cols-1 sm:grid-cols-3'>
                {
                    allNews?.map((item, index) => {

                        let date = new Date(item?.date)
                        let getDate = date.getDate()
                        let Month = date?.getMonth()

                        return (
                            <div className='sm:w-[300px] bg-white rounded-md my-2 shadow-lg' key={index}>
                                <div className='relative'>
                                    <img className='w-full h-[200px]' src={item?.image} alt="" />

                                    <div className='absolute bottom-3 left-2 px-2 py-1 flex justify-center items-center bg-[#FFFFFF] rounded-sm'>
                                        <div>
                                            <h1 className='text-[11px] text-center'>{getDate}</h1>
                                            <h1 className='text-[12px] text-center'>{months[Month].slice(0, 3)}</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className='p-2 space-y-3'>

                                    <div className='flex justify-between text-gray-400 text-[12px]'>
                                        <div className='flex gap-1'>
                                            <CiShoppingTag />
                                            <h1>Food</h1>
                                        </div>
                                        <div className='flex gap-1'>
                                            <CiUser />
                                            <h1>Admin</h1>
                                        </div>
                                    </div>


                                    <div className='flex justify-center items-center gap-1 text-gray-400 text-[12px]'>
                                        <FaRegCommentAlt />
                                        <h1>Comments</h1>
                                    </div>


                                    <h1 className='text-[14px]'>
                                        Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
                                    </h1>


                                    <div className='txt-primary text-[14px] flex gap-2'>
                                        <h1>Read More</h1>
                                        <div className='center'>
                                            <FaArrowRightLong />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='absolute top-10 left-1/4'>
                <img src={leave} alt="" />
            </div>
        </div>
    )
}
