import React from 'react'
import bannar from '../../assets/images/BG.png'
import Slider from './Slider/Slider'

const Hero = () => {
    return (
        <div className='relative w-full bg-[#FFFFFF] h-[50vh] sm:h-[540px]'>
            <img
                src={bannar}
                alt="banner"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 "></div>


            <div className="relative flex flex-col items-center justify-center h-full gap-4">

                <div className="w-full max-w-[90%] mx-auto">
                    <Slider />
                </div>
            </div>
        </div>
    )
}

export default Hero
