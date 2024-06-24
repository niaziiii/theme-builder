import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Share() {
  return (
    <div className="w-[95%] m-auto ">
      <div className="grid grid-cols-3 h-[50px] gap-4 max-w-[650px] m-auto sm:grid-cols-4 md:grid-cols-6" >
        <div className="w-[50px] h-[50px] flex justify-center items-center border rounded">
          <FaFacebookF className="text-blue-600"/>
        </div>
        <div className="w-[50px] h-[50px] flex justify-center items-center border rounded">
          <FaXTwitter className="text-black"/>
        </div>
        <div className="w-[50px] h-[50px] flex justify-center items-center border rounded">
          <FaLinkedinIn className="text-blue-600"/>
        </div>
        <div className="w-[50px] h-[50px] flex justify-center items-center border rounded">
          <FaWhatsapp className="text-green-800"/>
        </div>
        <div className="w-[50px] h-[50px] flex justify-center items-center border rounded">
          <FaPinterest className="text-red-600"/>
        </div>
        <div className="w-[50px] h-[50px] flex justify-center items-center border rounded">
          <IoMdMail className="text-green-800"/>
        </div>
      </div>
    </div>
  );
}
