"use client";

import { useState } from "react";

function SearchControls() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div className="flex gap-5 py-3 px-5 w-full text-sm leading-8 whitespace-nowrap bg-zinc-100 text-zinc-600 flex-wrap max-md:pr-5">
      <p className=" ">Your location</p>
      <div className="flex justify-start gap-2.5 max-w-full flex-wrap">
        <input
          type="text"
          className="shrink-0 bg-blue-100 rounded border border-solid border-neutral-300 h-[43px] w-[250px] max-w-full"
        />
        <p className=" ">Search radius</p>
      </div>
      <div className="flex gap-2.5 flex-wrap text-black">
        <div className="relative">
          <select
            className="appearance-none relative w-[90px] bg-white border border-solid border-stone-300 text-black py-2 px-3 mr-0 rounded"
            defaultValue="50"
            onClick={handleToggle1}
          >
            <option value="10">10 km</option>
            <option value="25">25 km</option>
            <option value="50">50 km</option>
            <option value="100">100 km</option>
            <option value="200">200 km</option>
            <option value="500">500 km</option>
          </select>
          <div
            className={`absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ${
              isOpen1 ? "transform rotate-180" : ""
            }`}
          >
            <svg
              className="h-5 w-5 fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M7 10l5 5 5-5" />
            </svg>
          </div>
        </div>
        <div className="my-auto text-sm leading-8 text-zinc-600">Results</div>
        <div className="relative">
          <select
            className="appearance-none relative w-[90px] bg-white border border-solid border-stone-300 text-black py-2 px-3  rounded"
            defaultValue="50"
            onClick={handleToggle2}
          >
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
          </select>
          <div
            className={`absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ${
              isOpen2 ? "transform rotate-180" : ""
            }`}
          >
            <svg
              className="h-5 w-5 fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M7 10l5 5 5-5" />
            </svg>
          </div>
        </div>
        <button
          type="button"
          className="px-3 py-2 font-normal text-sm tracking-widest rounded border border-solid shadow-sm mr-[10px] float-left border-neutral-300 text-[#7c7c7c] bg-[#e6e6e6] bg-repeat-x"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchControls;