import React from "react";
import { FaInfo } from "react-icons/fa";

export default function Alert({ section, editMode, dispatch }) {
  const data = section.result.data;
  console.log(data , "data")
  return (
    <div className="w-full m-auto mt-10">

      <div className="w-[95%] m-auto rounded p-5 flex gap-5 bg-blue-200 justify-start">

        <div className="flex items-center justify-center w-10 h-10 p-3 bg-blue-900 rounded-full">

        <FaInfo className=" text-gray-500"/>
        </div>
        <p className="text-[15px] sm:text-[20px] md:w-1/2">
          Explain the benefits you offer. Don t write about products or services
          here, write about solutions.
        </p>
      </div>
    </div>
  );
}
