import React from "react";
import { FaGear } from "react-icons/fa6";
import { AiFillPicture } from "react-icons/ai";
import { FaLeaf } from "react-icons/fa";

export default function Features() {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 m-auto gap-10">

        <div className="m-auto flex flex-col justify-center items-center gap-8 w-[29%]">
          <div className="bg-gray-200 p-10 rounded-lg">
            <FaGear className="text-5xl text-gray-800" />
          </div>
          <h1 className="text-5xl text-center">First Feature</h1>
          <h1 className="text-[23px] w-96 text-center font-light">
            Tell what's the value for the customer for this feature.
          </h1>
        </div>

        <div className="m-auto flex flex-col justify-center items-center gap-8 w-[29%]">
          <div className="bg-gray-200 p-10 rounded-lg">
            <AiFillPicture className="text-5xl text-gray-800" />
          </div>
          <h1 className="text-5xl text-center">Second Feature</h1>
          <h1 className="text-[23px] w-96 text-center font-light">
            Write what the customer would like to know,
          </h1>
          <h1 className="text-[23px] w-96 text-center font-light">
            not what you want to show.
          </h1>
        </div>

        <div className="m-auto flex flex-col justify-center items-center gap-8 w-[29%]">
          <div className="bg-gray-200 p-10 rounded-lg">
            <FaLeaf className="text-5xl text-gray-800" />
          </div>
          <h1 className="text-5xl text-center">Third Feature</h1>
          <h1 className="text-[23px] w-96 text-center font-light">
            A small explanation of this great feature, in clear words.
          </h1>
        </div>
      </div>
    </div>
  );
}
