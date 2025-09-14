import React from 'react';
import puspo from '../../../assets/images/puspo.png'
import massrum from '../../../assets/images/massrum.png'
import { FaArrowRightLong } from 'react-icons/fa6';

const CountBox = () => {
    return (
        <div>
            <div className='bg-[url(https://i.ibb.co.com/PfbCVDb/BG-1.png)] py-10 relative' >

                <div className='max-w-[1200px] grid grid-cols-2 sm:grid-cols-5 mx-auto gap-4 p-2 sm:py-10'>
                    <div className='bg-white/10  backdrop-blur-lg rounded-lg p-6'>
                        <h1 className='text-4xl text-center text-[#00B207]'>37+</h1>
                        <h1 className='text-white text-center'>Years Of Hard Work</h1>
                    </div>

                    <div className='bg-white/10 backdrop-blur-lg rounded-lg p-6'>
                        <h1 className='text-4xl text-center text-[#00B207]'>107+</h1>
                        <h1 className='text-white text-center'>Happy Customer</h1>
                    </div>

                    <div className='bg-white/10 backdrop-blur-lg rounded-lg p-6'>
                        <h1 className='text-4xl text-center text-[#00B207]'>370+</h1>
                        <h1 className='text-white text-center'>Qualified Team Member</h1>
                    </div>

                    <div className='bg-white/10 backdrop-blur-lg rounded-lg p-6'>
                        <h1 className='text-4xl text-center text-[#00B207]'>337+</h1>
                        <h1 className='text-white text-center'>Monthly Orders</h1>
                    </div>

                    <div className='bg-white/10 backdrop-blur-lg rounded-lg p-6'>
                        <h1 className='text-4xl text-center text-[#00B207]'>37+</h1>
                        <h1 className='text-white text-center'>Years Of Hard Work</h1>
                    </div>
                </div>


                <div className='absolute left-0 top-0 sm:bottom-0'>
                    <img className='w-[100px] sm:w-fit' src={puspo} alt="" />
                </div>

                <div className='absolute bottom-4 right-0'>
                    <img className='sm:w-[150px]' src={massrum} alt="" />
                </div>

            </div>

            <div className="max-w-[1200px] mx-auto grid sm:grid-cols-2 gap-5 my-10">

                <div className="relative h-[250px] sm:h-[300px] rounded-lg overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url(https://i.ibb.co/8ndNst5k/Bannar.png)",
                        }}
                    ></div>

                    <div className="absolute inset-0 bg-black/30"></div>

                    <div className="absolute top-1/2 left-8 -translate-y-1/2 text-white space-y-3">
                        <h1 className="text-sm sm:text-base">100% Organic</h1>
                        <h1 className="text-xl sm:text-2xl font-semibold">Fruit & Vegetable</h1>
                        <p className="text-sm">
                            Starting at:{" "}
                            <span className="bg-[#FF8A00] px-2 py-1 rounded-sm">$11.43</span>
                        </p>

                        <button className="sm:w-[140px] sm:h-[42px] mt-2 flex items-center justify-center gap-2 text-white rounded-full primary text-[13px]">
                            Shop Now <FaArrowRightLong className="text-sm" />
                        </button>
                    </div>
                </div>

                <div className="relative h-[250px] sm:h-[300px] rounded-lg overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url(https://i.ibb.co/cc18ZVDV/Bannar-1.png)",
                        }}
                    ></div>

                    <div className="absolute inset-0 bg-black/20"></div>

                    <div className="absolute top-1/2 left-8 -translate-y-1/2 text-white space-y-3">
                        <h1 className="text-sm sm:text-base">Fresh & Healthy</h1>
                        <h1 className="text-xl sm:text-2xl font-semibold">Organic Juice</h1>
                        <p className="text-sm">
                            Starting at:{" "}
                            <span className="bg-[#FF8A00] px-2 py-1 rounded-sm">$7.99</span>
                        </p>

                        <button className="sm:w-[140px] sm:h-[42px] mt-2 flex items-center justify-center gap-2 text-white rounded-full primary text-[13px]">
                            Shop Now <FaArrowRightLong className="text-sm" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountBox;