import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { GiBeachBag } from 'react-icons/gi';
import { Link } from 'react-router';
import { Rating } from 'react-simple-star-rating';

const DisplayProducts = ({ setclick, item, index, click }) => {


    return (
        <Link key={index} to={`/productDetails/${item?.id}`}>
            <div
                onClick={() => setclick(index + 1)}

                className={`relative p-3 border rounded-xl shadow-sm bg-white cursor-pointer transition-all duration-500 
        ${click && click === index + 1 ? 'border-green-600 shadow-lg' : 'border-gray-200 hover:shadow-md hover:border-green-400'}`}
            >

                <div className="flex justify-center">
                    <img
                        className="w-full max-w-[250px] h-[200px] object-contain"
                        src={item?.image}
                        alt={item?.title}
                    />
                </div>


                <div className="mt-3 space-y-1">
                    <h1 className="text-gray-700 text-sm sm:text-base font-semibold line-clamp-1">
                        {item?.title}
                    </h1>
                    <h2 className="font-bold text-green-600 text-sm sm:text-[15px]">
                        ${item?.price || item?.dollar}
                    </h2>
                    <div className="flex items-center gap-2">
                        <Rating
                            initialValue={item?.rating}
                            size={18}
                            readonly
                            allowFraction
                            SVGclassName="inline-block"
                            fillColor="#facc15"
                        />
                    </div>
                </div>


                {(click && click === index + 1) && (
                    <div className="absolute inset-0 flex flex-col justify-between p-2">

                        <div className="flex flex-col items-end gap-2">
                            <div className="bg-white p-1 rounded-full shadow hover:bg-green-50 transition">
                                <CiHeart size={20} className="text-gray-700 hover:text-red-500" />
                            </div>
                            <div className="bg-white p-1 rounded-full shadow hover:bg-green-50 transition">
                                <FaEye size={20} className="text-gray-700 hover:text-green-600" />
                            </div>
                        </div>


                        <div className="flex justify-end">
                            <GiBeachBag
                                size={24}
                                className="text-white bg-green-500 rounded-full p-1 shadow hover:bg-green-600 transition"
                            />
                        </div>
                    </div>
                )}
            </div></Link>
    );
};

export default DisplayProducts;
