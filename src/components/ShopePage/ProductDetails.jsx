import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [imagestore, setImageStore] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [tabMenu, setTabMenu] = useState("description");

    const { data: details = {}, isLoading } = useQuery({
        queryKey: ["details", id],
        enabled: !!id,
        queryFn: async () => {
            const result = await axios.get("/items.json");
            return result?.data.find((item) => item?.id == id);
        },
    });

    if (isLoading) return <div className="text-center py-10">Loading...</div>;
    if (!details?.id) return <div className="text-center py-10 text-red-500">No product found!</div>;

    return (
        <div className="max-w-[1200px] mx-auto mt-10">
            <div className="w-full bg-white rounded-2xl p-6 grid md:grid-cols-2 gap-8">
                {/* Left: Images */}
                <div className="flex gap-4">
                    <div className="flex flex-col gap-3">
                        {details?.images?.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={details?.name}
                                onClick={() => setImageStore(img)}
                                className="w-16 h-16 border rounded-lg cursor-pointer hover:border-green-500"
                            />
                        ))}
                    </div>
                    <div className="flex-1 flex items-center">
                        <img
                            src={!imagestore ? details?.images?.[0] : imagestore}
                            alt={details?.name}
                            className="w-full h-full rounded-xl object-cover"
                        />
                    </div>
                </div>

                {/* Right: Product Info */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold">{details?.name}</h2>
                    <span className="text-green-600 font-medium">{details?.availability}</span>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <span className="text-sm text-gray-600">{details?.rating} Reviews</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3">
                        <span className="line-through text-gray-400 text-lg">{details?.price?.original_price}</span>
                        <span className="text-green-600 text-2xl font-bold">{details?.price?.discounted_price}</span>
                        <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded-md">
                            {details?.price?.discount_percentage}% Off
                        </span>
                    </div>

                    {/* Brand & Description */}
                    <div className="text-sm text-gray-500">
                        <span className="font-semibold">Brand:</span> {details?.brand}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{details?.description}</p>

                    {/* Tags */}
                    <div className="text-sm text-gray-500">
                        <span className="font-semibold">Tags:</span>{" "}
                        {details?.tags?.map((tag, i) => (
                            <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md mr-2">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Quantity & Add to Cart */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded-lg overflow-hidden">
                            <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200">
                                <FaMinus onClick={() => quantity > 0 && setQuantity(quantity - 1)} />
                            </button>
                            <span className="px-4">{quantity}</span>
                            <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200">
                                <FaPlus onClick={() => setQuantity(quantity + 1)} />
                            </button>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <Tabs>
                <TabList className="flex border-b border-gray-200 justify-center items-center gap-4 font-semibold">
                    <Tab
                        onClick={() => setTabMenu("description")}
                        className={`px-4 py-2 cursor-pointer rounded-md focus:outline-none ${tabMenu === "description" ? "border-b-2 border-green-500 text-black" : "text-gray-400"
                            }`}
                    >
                        Description
                    </Tab>
                    <Tab
                        onClick={() => setTabMenu("information")}
                        className={`px-4 py-2 cursor-pointer rounded-md focus:outline-none ${tabMenu === "information" ? "border-b-2 border-green-500 text-black" : "text-gray-400"
                            }`}
                    >
                        Additional Information
                    </Tab>
                    <Tab
                        onClick={() => setTabMenu("feedback")}
                        className={`px-4 py-2 cursor-pointer rounded-md focus:outline-none ${tabMenu === "feedback" ? "border-b-2 border-green-500 text-black" : "text-gray-400"
                            }`}
                    >
                        Customer Feedback
                    </Tab>
                </TabList>

                {/* Tab Panels */}
                <TabPanel className="mt-4">
                    <h2 className="text-gray-500 font-semibold">{details?.description}</h2>
                </TabPanel>

                <TabPanel className="mt-4">

                    <ul className="text-sm text-gray-500 list-disc pl-4">
                        {Object.entries(details?.additional_information || {}).map(([key, value]) => (
                            <li key={key}>
                                <span className="capitalize font-semibold">{key.replace("_", " ")}:</span>{" "}
                                {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
                            </li>
                        ))}
                    </ul>
                </TabPanel>

                <TabPanel className="mt-4">

                    <div className="flex flex-col gap-4">
                        <div className="p-4 border rounded-lg">
                            <p className="text-gray-700">"Love this cheddar cheese! Perfect for sandwiches."</p>
                            <span className="text-gray-500 text-sm">- John D.</span>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <p className="text-gray-700">"Smooth texture and great flavor. Highly recommend!"</p>
                            <span className="text-gray-500 text-sm">- Mary K.</span>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ProductDetails;
