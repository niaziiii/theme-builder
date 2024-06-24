import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import blockQuoteImg from "../../public/img1.jpg"
export default function Blockquote() {
  return (
    <div className="w-[95%] flex justify-center mt-10">
      <div className="flex m-auto w-full justify-center">

        <div className="w-[50px] h-[50px] bg-gray-400 flex justify-center items-center rounded-l-lg">
            <FaQuoteLeft/>
        </div>

        <div className="border w-[95%] md:w-[50%] p-5 flex flex-col gap-4">
          <h1>
            Write a quote here from one of your customers. Quotes are a great
            way to build confidence in your products or services.
          </h1>

          <div className="flex items-center gap-2">
          <Image src={blockQuoteImg} width={40} height={40} className="rounded-full "></Image>
            <p className="font-thin text-[12px] text-gray-500 italic">
            John DOE • CEO of MyCompany
            </p>

          </div>
          
        </div>
      </div>
    </div>
  );
}
