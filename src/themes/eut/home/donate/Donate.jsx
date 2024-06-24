import React from "react";
import { FaHeart } from "react-icons/fa6";
import Image from "next/image";

const Donate = () => {
    const donateImg = "https://naturalcalm.wpenginepowered.com/wp-content/uploads/2020/05/Thrive_Logo_Horizontal_Purple_RGB-1-768x115.png";
  return (
    <div className="md:flex md:justify-between xs:block xs:mx-auto">
      <div className="lg:py-[200px] md:py-[100px] sm:py-[100px] py-[100px] md:flex xs:block xs:mx-auto">
        <div className=" sm:ml-[10px] md:ml-[50px] lg:ml-[90px]  w-[80%] xs:w-[90%] xs:mx-auto">
          <div className="md:w-[100%] sm:w-full lg:w-[80%] flex flex-col items-center mx-auto justify-center">
           
            <Image src = {donateImg} width = "0" height = "0" sizes="100vw" className="w-full h-auto"/>
            <p className="text-[18px] mt-4 text-[#7A7A7A] text-center mb-10">
              100% of profits are donated to help end extreme poverty. Find out
              more at&nbsp;&nbsp;
              <a className="text-[18px] text-[#A6CE39]" href="">
                thriveforgood.org
              </a>
            </p>
            <button className="bg-blue-500 flex items-center justify-center text-white py-2 px-4 rounded">
              <FaHeart className="mr-2" /> Donate Now
            </button>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className="mt-32 md:block hidden">
        <div className="donateBG"></div>
      </div>
    </div>
  );
};

export default Donate;
