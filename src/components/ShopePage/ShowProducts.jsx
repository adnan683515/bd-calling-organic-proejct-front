import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DisplayProducts from './../LandingPage/Features/DisplayProducts';
import { GiCarrot, GiBroccoli } from 'react-icons/gi';

const ShowProducts = ({ search, setSearch }) => {



    const [click, setclick] = useState(null);


    const { data: all_items = [], isLoading } = useQuery({
        queryKey: ["productsdata", search],
        queryFn: async () => {
            const result = await axios.get('/items.json');
            let items = result?.data || [];



            if (search) {


                if (search?.type == 'cetegory') {
                    return items = items.filter((product) => product?.category === search?.value);
                }
                else if (search?.type == 'tags') {
                    return items?.filter(item => item.tags?.includes(search?.value));
                }
                else if (search?.type == 'sortby') {
                    if (search?.value === "latest") {
                        return [...items].reverse();
                    }
                    else if (search?.value === "old") {
                        return items;
                    }
                    else if (search?.value === "upcoming") {
                        return items.filter((item) => item?.availability !== "In Stock");
                    }
                }
                else if (search?.type == 'rating') {
                    return items = items?.filter((products) => products?.rating == search?.value)
                }
            }


            return items;
        }
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center">
                <h1>Loading....</h1>
            </div>
        );
    }

    return (
        <div className="w-full max-w-6xl mx-auto p-4">

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">

                <div className="flex items-center gap-2">
                    <label htmlFor="sort" className="font-medium text-gray-700">Sort by:</label>
                    <select
                        id="sort"

                        onChange={(e) => setSearch({ type: 'sortby', value: e.target.value })}
                        className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="">option</option>
                        <option value="latest">Latest</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="old">Old</option>
                    </select>
                </div>


                <div className="text-gray-600 font-medium">
                    Total Products: {all_items?.length}
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {all_items?.length ? all_items?.map((itempro, index) => {
                    const item = {
                        title: itempro?.name,
                        image: itempro?.images[0],
                        price: itempro?.price.original_price,
                        rating: itempro?.rating,
                        id : itempro?.id
                    };
                    return (
                        <DisplayProducts
                            click={click}
                            index={index}
                            item={item}

                            setclick={setclick}
                            key={itempro?.id}
                        />
                    );
                }) : <div className="col-span-9 flex flex-col items-center justify-center py-20 bg-gray-50">
                    <div className="text-6xl mb-4 text-green-500 animate-bounce">
                        <GiCarrot />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2">
                        Oops! No Vegetables Found
                    </h1>
                    <p className="text-gray-500 text-center mb-6">
                        Sorry, we couldn’t find any vegetables matching your search. Try exploring other categories!
                    </p>
                    <div className="flex gap-3">
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition">
                            Browse All Vegetables
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md transition">
                            Go Back
                        </button>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default ShowProducts;
