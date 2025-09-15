import React, { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaStream } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import RangeSlider from 'react-range-slider-input'
import "react-range-slider-input/dist/style.css"; // MUST import the CSS
import axios from "axios";
import { Rating } from "react-simple-star-rating";

const popularTags = [
  "Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage",
  "Fruit", "Fresh", "Apple",
  "Fish", "Protein", "Omega-3",
  "Organic", "Carrot",
  "Banana", "Energy", "Sweet",
  "Orange", "Okra", "Chinese Cabbage", "Premium",
  "Grapes", "Red Grapes",
  "Pineapple", "Tropical",
  "Strawberry", "Red Berry",
  "Capsicum", "Green",
  "Mix"
];


const FilterSection = ({ setSearch, search }) => {


  const [value, setValue] = useState([10, 70]);

  const ratings = [5, 4, 3, 2, 1];


  const { data: cetagories = [] } = useQuery({
    queryKey: 'cetagories',
    queryFn: (async () => {
      const result = await axios.get('/allcetagories.json')
      return result?.data?.categories
    })
  })



  return (
    <div className="w-full px-4 ">
      <span className="primary text-white px-6 py-1 rounded-l-full rounded-r-full">
        Filter
      </span>
      <div className="mx-auto w-full max-w-lg divide-y divide-gray-200 rounded-xl bg-white ">

        <Disclosure as="div" className="p-4" defaultOpen={true}>
          {({ open }) => (
            <>
              <DisclosureButton className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-900 hover:text-gray-700">
                <span className="text-xl">All Cetagories</span>
                <ChevronDownIcon
                  className={`${open ? "rotate-180" : ""
                    } h-5 w-5 text-gray-500 transition-transform duration-300`}
                />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm text-gray-600">
                {cetagories?.map((item) => (
                  <label
                    key={parseInt(item?.id)}
                    className="flex items-center justify-between my-2 py-1 px-2 cursor-pointer rounded-full hover:bg-green-50"
                  >
                    <input
                      type="radio"
                      name="category"
                      onChange={() => {

                        const obj = { type: 'cetegory', value: item?.name }

                        setSearch(obj)
                      }}
                      value={item.id}
                      className="mr-2 text-white accent-green-500"
                    />
                    <span className="flex justify-between w-full">
                      {item?.name} <span>({item?.products_count})</span>
                    </span>
                  </label>
                ))}
              </DisclosurePanel>
            </>
          )}
        </Disclosure>


        <Disclosure as="div" className="p-4">
          {({ open }) => (
            <>
              <DisclosureButton className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-900 hover:text-gray-700">
                <span className="text-[18px] font-semibold">Price</span>
                <ChevronDownIcon
                  className={`${open ? "rotate-180" : ""
                    } h-5 w-5 text-gray-500 transition-transform duration-300`}
                />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm text-gray-600">
                <div className="w-80 mx-auto p-4">
                  <h2 className="mb-2 text-gray-700 font-medium">Select Range</h2>
                  <RangeSlider
                    min={0}
                    max={100}
                    step={1}
                    value={value}               // controlled slider
                    onInput={(val) => setValue(val)}
                    rangeStyles={{
                      track: { backgroundColor: "#BBF7D0" }, // light green track
                      range: { backgroundColor: "#22C55E" }, // selected range
                      thumb: { backgroundColor: "#22C55E" }, // thumbs
                    }}
                    ariaLabel={["Minimum value", "Maximum value"]}
                  />
                  <p className="mt-2 text-gray-600">
                    Selected range: {value[0]} - {value[1]}
                  </p>
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>


        <Disclosure as="div" className="p-4">
          {({ open }) => (
            <>
              <DisclosureButton className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-900 hover:text-gray-700">
                <span className="text-[16px] font-semibold">Rating</span>
                <ChevronDownIcon
                  className={`${open ? "rotate-180" : ""
                    } h-5 w-5 text-gray-500 transition-transform duration-300`}
                />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm text-gray-600">
                <div className="space-y-2">
                  {ratings.map((rate) => (
                    <label
                      key={rate}
                      onClick={() => setSearch({ type: 'rating', value: rate })}
                      className="flex items-center gap-2 cursor-pointer hover:text-green-600"
                    >
                      <input
                        type="radio"
                        name="rating"
                        value={rate}
                        className="w-5 h-5 accent-green-500 appearance-none border-2 border-gray-400 rounded-sm checked:bg-green-500 checked:border-green-500"

                      />
                      <Rating
                        initialValue={rate}
                        size={20}
                        readonly
                        allowFraction
                        SVGclassName="inline-block"
                        fillColor="#facc15"
                      />

                    </label>
                  ))}
                </div>
              </DisclosurePanel>

            </>
          )}
        </Disclosure>



        <Disclosure as="div" className="p-4">
          {({ open }) => (
            <>
              <DisclosureButton className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-900 hover:text-gray-700">
                <span className="text-[16px] font-semibold">Popular Tag?</span>
                <ChevronDownIcon
                  className={`${open ? "rotate-180" : ""
                    } h-5 w-5 text-gray-500 transition-transform duration-300`}
                />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm text-gray-600">

                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tagName, index) => (
                    <span
                      key={index}
                      onClick={() => setSearch({ type: 'tags', value: tagName })}
                      className={` rounded-l-full rounded-r-full ${search?.value == tagName ? 'primary text-white' : 'bg-gray-100 '} px-3 py-1 text-sm cursor-pointer`}
                    >
                      {tagName}
                    </span>
                  ))}
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default FilterSection;
