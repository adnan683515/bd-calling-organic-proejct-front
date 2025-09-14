import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";
import qutation from '../../../assets/images/qutetation.png'

const commentsData = [
    {
        id: 1,
        name: "Adnan Hossain",
        role: "Customer",
        image: "https://i.pravatar.cc/100?img=1",
        description:
            "Great service! The quality of products is amazing. Will order again.",
        rating: 4.5,
    },
    {
        id: 2,
        name: "Sadia Rahman",
        role: "Customer",
        image: "https://i.pravatar.cc/100?img=2",
        description:
            "Delivery was super fast and packaging was neat. Highly recommended.",
        rating: 5,
    },
    {
        id: 3,
        name: "Mahin Ahmed",
        role: "Customer",
        image: "https://i.pravatar.cc/100?img=3",
        description:
            "Support team was very helpful in solving my queries quickly.",
        rating: 4,
    },
    {
        id: 4,
        name: "Rafsan Jani",
        role: "Customer",
        image: "https://i.pravatar.cc/100?img=4",
        description:
            "Organic products felt really fresh. Value for money purchase!",
        rating: 4.5,
    },
    {
        id: 5,
        name: "Nabila Khan",
        role: "Customer",
        image: "https://i.pravatar.cc/100?img=5",
        description:
            "Loved the user experience of the website. Ordering was smooth.",
        rating: 5,
    },
];

export default function Comments() {
    const [startIndex, setStartIndex] = useState(0);
    const [activeArrow, setActiveArrow] = useState(null);
    const itemsPerPage = 3;

    const visibleComments = commentsData.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const handleNext = () => {
        if (startIndex + itemsPerPage < commentsData.length) {
            setStartIndex(startIndex + 1);
            setActiveArrow("next");
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
            setActiveArrow("prev");
        }
    };

    return (
        <div className="py-10 p-2 sm:p-0">

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="italic txt-primary text-[10px]">TESTTIMONAL</h1>
                    <h1 className="text-xl font-bold">What Our Customer Says</h1>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={handlePrev}
                        className={`p-2 rounded-full ${activeArrow === "prev" ? "bg-[#00B207] text-white" : "bg-gray-200"
                            } hover:bg-gray-300`}
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className={`p-2 rounded-full ${activeArrow === "next" ? "bg-[#00B207] text-white" : "bg-gray-200"
                            } hover:bg-gray-300`}
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {visibleComments.map((c) => (
                    <div
                        key={c.id}
                        className="bg-white relative shadow-md rounded-lg p-4 flex flex-col justify-between"
                    >
                        <div className="aboslute top-3 left-4 mb-3">
                            <img src={qutation} alt="" />
                        </div>

                        <p className="text-gray-700 text-sm mb-4 text-left">{c.description}</p>


                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img
                                    src={c.image}
                                    alt={c.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h2 className="font-semibold text-base">{c.name}</h2>
                                    <p className="text-xs text-gray-500">{c.role}</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-1">
                                <Rating
                                    initialValue={c.rating}
                                    readonly
                                    size={30}
                                    fillColor="#facc15"
                                    SVGclassName="inline-block"
                                />
                                <span className="text-sm text-gray-500">{c.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
