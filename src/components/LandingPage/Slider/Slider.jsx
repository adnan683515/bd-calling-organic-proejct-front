import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../../assets/images/Image.png';
import image2 from '../../../assets/images/imag2.png';
import image3 from '../../../assets/images/image3.png';
import image4 from '../../../assets/images/imag4.png';
import image5 from '../../../assets/images/iamge5.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { FaArrowRightLong } from 'react-icons/fa6';

const slides = [image1, image2, image3, image4, image5];

export default function Slider() {
    return (
        <div className="w-full h-[60vh]   md:h-[80vh]">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
                loop={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper  "
            >
                {slides.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="flex  flex-row items-center  justify-between h-full px-4 md:px-3 gap-4">
                            <div className="center w-[350px]  sm:w-[650px] sm:h-[400px]">
                                <img src={img} alt={`slide-${idx}`} className="w-full h-full object-cover rounded-lg" />
                            </div>
                            <div className="flex justify-center items-center w-full md:w-1/2">
                                <div className="sm:text-start text-center sm:space-y-5">
                                    <p className="text-[#00B207] text-[10px] sm:text-[14px]">Welcome to Shopery</p>
                                    <h1 className="sm:text-5xl font-semibold">
                                        Fresh & Healthy <br /> Organic Food
                                    </h1>
                                    <h1 className='text-[15px] sm:text-xl'>
                                        Sale up to <span className="text-[#FF8A00]">30% OFF</span>
                                    </h1>
                                    <p className="text-gray-400 text-[10px] sm:text-sm">
                                        Free shipping on all your order. We deliver, you enjoy
                                    </p>
                                    <div className="flex sm:justify-start justify-center items-center mt-2">
                                        <button className="sm:w-[191px] sm:h-[50px] flex items-center justify-center gap-2 text-white rounded-full px-3 py-1 primary text-[12px] sm:px-4 sm:text-[15px]">
                                            Shop Now <FaArrowRightLong className="sm:text-lg" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
