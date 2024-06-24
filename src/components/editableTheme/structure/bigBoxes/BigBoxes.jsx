import React from "react";
import { BsShieldShaded } from "react-icons/bs";
import { BiSolidCube } from "react-icons/bi";


export default function BigBoxes() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full justify-items-center w-full m-auto">

        <div className="flex flex-col items-center w-full h-[100vh] gap-5 pb-5 px-3 mb-5">
          <BsShieldShaded className="text-5xl" />
          <h1 className="text-center text-4xl">A color block</h1>

          <h1 className="text-center">
            Color blocks are a simple and effective way to{" "}
            <span className="font-bold">
              present and highlight your content.
            </span>{" "}
            Choose an image or a color for the background. You can even resize
            and duplicate the blocks to create your own layout. Add images or
            icons to customize the blocks.
          </h1>
          <button className="rounded bg-green-800 text-gray-50 py-3 px-8 ">
            More Details
          </button>
          
        </div>



        <div className="flex flex-col items-center  bg-green-800 gap-6 h-[100vh] w-full pb-5 px-3">
        
          <BiSolidCube className="text-5xl" />
          <h1 className="text-center text-4xl z-20">A color block</h1>

          <h1 className="text-center z-20">
            Color blocks are a simple and effective way to{" "}
            <span className="font-bold">
              present and highlight your content.
            </span>{" "}
            Choose an image or a color for the background. You can even resize
            and duplicate the blocks to create your own layout. Add images or
            icons to customize the blocks.
          </h1>
          <button className="rounded bg-gray-300 text-gray-50 py-3 px-8 z-20">
            More Details
          </button>

        </div>
      </div>
    </div>
  );
}
